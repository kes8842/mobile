import React, { Component, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Dimensions } from 'react-native';
import { styleSheet } from './stylesheet';
import QRcode from 'react-native-qrcode-svg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../../share/footer/Footer';

const QrCode = (props) => {
  const [memberName, setMemberName] = useState('')
  const [memberId, setMemberId] = useState('')
  const [mobileId, setMobileId] = useState('')
  const { windowHeight, windowWidth } = props
  const styles = useMemo(() => styleSheet(windowHeight, windowWidth), [windowHeight, windowWidth])

  useEffect(() => {
    const getData = async () => {

      const localName = await AsyncStorage.getItem('memberName')
      const localMemberId = await AsyncStorage.getItem('memberId')
      const localMobileId = await AsyncStorage.getItem('mobileId')
      if (localName) {
        setMemberName(localName)
        setMemberId(localMemberId)
        setMobileId(localMobileId)
      }
    }

    getData()
  }, [])

  const logOut = async () => {
    await AsyncStorage.setItem('id', '')
    await AsyncStorage.setItem('hpNo', '')
    props.navigation.reset({ routes: [{ name: 'Signup' }] })
  }

  return (
    <View>
      <View style={styles.wrap} contentContainerStyle={{ flex: 1, height: 500 }}>
        <View style={styles.circle}></View>
        <View style={styles.topMenu}>
          <View style={styles.topLogoWrap}>
            <Text style={styles.topLogo}>TOV</Text>
          </View>
          <View style={styles.logoutBtn}>
            <TouchableOpacity onPress={() => logOut()}>
              <ReactImage source={require('./assets/power-off-w.png')} style={styles.logout} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.profileCard} >
            <View style={styles.profileTextGroup}>
              <Text style={styles.memberName}>{memberName}</Text>
              <Text style={styles.memberPosition}>소속부서 / 직책</Text>
            </View>

            <View style={styles.processInfoWrap}>

              <View style={styles.leftProcessBox}>

                <Text style={styles.processTitle}>비용요청 진행현황</Text>

                <View style={styles.processInner}>
                  <View style={styles.process}>

                    <Text style={styles.processText}>
                      요청
                    </Text>

                    <Text style={styles.processNumber}>
                      3
                    </Text>


                  </View>
                  <View style={styles.divider}></View>
                  <View style={styles.process}>

                    <Text style={styles.processText}>
                      진행
                    </Text>
                    <Text style={styles.processNumber}>
                      3
                    </Text>
                  </View>
                  <View style={styles.divider}></View>
                  <View style={styles.process}>
                    <Text style={styles.processText}>
                      완료
                    </Text>
                    <Text style={styles.processNumber}>
                      3
                    </Text>
                  </View>
                  <View style={styles.divider}></View>
                  <View style={styles.process}>
                    <Text style={styles.processText}>
                      지급
                    </Text>
                    <Text style={styles.processNumber}>
                      3
                    </Text>
                  </View>
                  <View style={styles.divider}></View>
                  <View style={styles.process}>

                    <Text style={styles.processText}>
                      반려
                    </Text>

                    <Text style={styles.processNumber}>
                      3
                    </Text>
                  </View>
                </View>

              </View>

              <View style={styles.rightProcessBox}>
                <Text style={styles.processTitle}>결제요청</Text>

                <View style={styles.processInner}>
                  <View style={styles.processRight}>
                    <Text style={styles.processText}>
                      요청
                    </Text>

                    <Text style={styles.processNumber}>
                      3
                    </Text>

                  </View>
                </View>
              </View>

            </View>

          </View>
          <View style={styles.centerBtnWrap}>
            <View style={styles.layer1}>

              <TouchableOpacity style={styles.centerCostBtnWrap} onPress={() => props.navigation.navigate('CostList')}>
                <View style={styles.centerCostBtn}>
                  <ReactImage source={require('./assets/receipt-w.png')} style={styles.centerIcon} />
                </View>
                <Text style={styles.centerText}>비용등록</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.centerpaymentBtnWrap} onPress={() => props.navigation.navigate('PaymentList')}>
                <View style={styles.centerpaymentBtn}>
                  <ReactImage source={require('./assets/stamp-w.png')} style={styles.centerIcon} />
                </View>
                <Text style={styles.centerText}>비용결제</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.layer2}>
              <TouchableOpacity style={styles.centerQrBtnWrap} onPress={() => props.navigation.navigate('')}>
                <View style={styles.centerQrBtn}>
                  <ReactImage source={require('./assets/sampleQr-w.png')} style={styles.centerIcon} />
                </View>
                <Text style={styles.centerText}>QR보기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.centerGuideBtnWrap}>
                <View style={styles.centerGuideBtn}>
                  <ReactImage source={require('./assets/guide-w.png')} style={styles.centerIcon} />
                </View>
                <Text style={styles.centerText}>가이드</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
        {/* <View style={styles.bottomMenu}>
          <TouchableOpacity style={styles.homeBtn} onPress={() => props.navigation.navigate('QrCode')}>
            <View>
              <ReactImage source={require('./assets/home.png')} style={styles.homeIcon} />
              <Text style={styles.homeText} >홈</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.costListBtn} onPress={() => props.navigation.navigate('CostList')}>
            <View>
              <ReactImage source={require('./assets/receipt.png')} style={styles.costIcon} />
              <Text style={styles.costText} >비용등록</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentListBtn} onPress={() => props.navigation.navigate('PaymentList')}>
            <View>
              <ReactImage source={require('./assets/stamp.png')} style={styles.paymentIcon} />
              <Text style={styles.paymentText}>비용결제</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.scanBtn} onPress={() => props.navigation.navigate('Qrscan')}>
            <View>
              <ReactImage source={require('./assets/scanIcon.png')} style={styles.scanBtnIcon} />
              <Text style={styles.qrscanText}>QR스캔</Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
      <Footer
        navigation={props.navigation}
      />
    </View>

  );
}

export default QrCode

QrCode.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}
