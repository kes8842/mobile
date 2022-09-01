import React, { Component, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Dimensions } from 'react-native';
import { styleSheet } from './stylesheet';
import QRcode from 'react-native-qrcode-svg'
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    <View style={styles.wrap} contentContainerStyle={{ flex: 1, height: 500 }}>

      <View style={styles.topMenu}>
        <View style={styles.topLogoWrap}>
          <Text style={styles.topLogo}>TOV</Text>
        </View>
        <TouchableOpacity style={styles.scanBtn} onPress={() => props.navigation.navigate('Qrscan')}>
          <ReactImage source={require('./assets/scanIcon.png')} style={styles.scanBtnIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ marginBottom: 100 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.profileCard} >
          <View style={styles.profile}></View>
          <View style={styles.profileTextGroup}>
            <Text style={styles.memberName}>{memberName}</Text>
            <Text style={styles.memberPosition}>직책</Text>
            <Text style={styles.groupName}>SampleCompName</Text>
            <Text style={styles.department}>소속부서</Text>
          </View>
          <TouchableOpacity style={styles.logOutBtn} onPress={() => logOut()}>
            <Text style={styles.logOut}>로그아웃</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.qrCard}>
          <QRcode size={230} value={JSON.stringify({ mobileId: mobileId, memberId: memberId, })} />
        </View>
      </ScrollView>
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.costListBtn} onPress={() => props.navigation.navigate('CostList')}>
          <View>
            <ReactImage source={require('./assets/receipt.png')} style={styles.costIcon} />
            <Text style={styles.costText} >비용등록</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity style={styles.paymentListBtn} onPress={() => props.navigation.navigate('PaymentList')}>
          <View>
            <ReactImage source={require('./assets/stamp.png')} style={styles.paymentIcon} />
            <Text style={styles.paymentText}>비용결제</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default QrCode

QrCode.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}
