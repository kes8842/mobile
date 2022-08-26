import React, { Component, useEffect, useState, useMemo } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useEffect, useState, useMemo } from 'react/cjs/react.development';
import client from '../../../api/client';
import { styleSheet } from './stylesheet';

const Signup = (props) => {
  const styles = styleSheet()
  const [name, setName] = useState('')
  const [inputhpNo, setInputHpNo] = useState('')
  const [show, setShow] = useState(false)
  const [heightMagnifi, setheightMagnifi] = useState(1)

  useEffect(() => {
    try {

      const getLocalData = async () => {
        const localName = await AsyncStorage.getItem('memberName')
        const hpNo = await AsyncStorage.getItem('hpNo')

        if (localName && hpNo) {
          doLogin(localName, hpNo)
          // const result = await client.get(`/rest/v1/s0221a0030/sign-up?member-name=${name}&hp-no=${hpNo}`)
          // console.log(JSON.stringify(result, null, 4))
          // await props.navigation.reset({ routes: [{ name: 'QrCode' }] })
        } else {
          setShow(true)
        }
        return
      }

      getLocalData()

    } catch (error) {
      console.log(error)
      setShow(true)
    }
  }, [])

  const doLogin = async (paramName, paramHpNo) => {
    if (!paramName || !paramHpNo) {
      return
    }

    try {
      const result = await client.get(`/rest/v1/s0221a0030/sign-up?memberName=${paramName}&hpNo=${paramHpNo}`).catch((error) => {
        console.log('error!!')
        console.log(JSON.stringify(error.response, null, 4))
      })

      console.log(JSON.stringify(result, null, 4))

      if (result?.status === 200) {

        const { data } = result
        const loginData = data?.data
        if (!loginData) {
          return
        }

        const { orgId, memberTp, orgEventName, mobileId, memberId, memberName, hpNo } = loginData

        await AsyncStorage.setItem('memberName', memberName || '')
        await AsyncStorage.setItem('hpNo', hpNo || '')
        await AsyncStorage.setItem('mobileId', mobileId || '')
        await AsyncStorage.setItem('memberId', JSON.stringify(memberId) || '')
        await AsyncStorage.setItem('orgEventName', orgEventName || '')
        await AsyncStorage.setItem('memberTp', memberTp || '')
        await AsyncStorage.setItem('orgId', JSON.stringify(orgId) || '')

      } else {
        return
      }
    } catch (error) {
      console.log('error')
      console.error(error)
      return
    }
    await props.navigation.reset({ routes: [{ name: 'QrCode' }] })
  }

  const { windowWidth, windowHeight } = props
  // const styles = useMemo(() => styless(windowWidth, windowHeight), [windowHeight, windowWidth])
  return (
    <>
      {show && <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollToOverflowEnabled={false}
        enableAutomaticScroll={true}
        scrollEnabled={true}
        keyboardShouldPersistTaps='always'
        contentContainerStyle={{ height: windowHeight * heightMagnifi }}
      >
        <View
          style={styles.wrap}
        >
          <View style={styles.titleWrap}>
            <Text style={styles.subTitle}>
              <Text style={styles.subTitleBold}>쉽고 빠른</Text> 비용처리
            </Text>
            <Text style={styles.title}>토  브</Text>
          </View>

          <View style={styles.contentsWrap}>
            <View style={styles.contentsInner}>
              <TextInput
                style={styles.inputName}
                placeholder={"이름"}
                onChange={(e) => setName(e.nativeEvent.text)}
                onFocus={() => setheightMagnifi(1.2)}
                onEndEditing={() => { setheightMagnifi(1) }} />
              <View style={styles.phoneInputWrap}>
                <TextInput
                  style={styles.phoneInput1}
                  onFocus={() => setheightMagnifi(1.2)}
                  onEndEditing={() => { setheightMagnifi(1) }}
                  placeholder={"010"}
                  onChange={(e) => setInputHpNo(e.nativeEvent.text)}
                  keyboardType="number-pad"
                  maxLength={3}
                  returnKeyType="done"
                />
                <View style={styles.dash}></View>
                <TextInput
                  style={styles.phoneInput2}
                  placeholder={"0000"}
                  onChange={(e) => setInputHpNo(e.nativeEvent.text)}
                  keyboardType="number-pad"
                  maxLength={4}
                  onFocus={() => setheightMagnifi(1.2)}
                  onEndEditing={() => { setheightMagnifi(1) }}
                  returnKeyType="done" />
                <View style={styles.dash}></View>
                <TextInput
                  style={styles.phoneInput3}
                  placeholder={"0000"}
                  onChange={(e) => setInputHpNo(e.nativeEvent.text)}
                  keyboardType="number-pad"
                  onFocus={() => setheightMagnifi(1.5)}
                  onEndEditing={() => { setheightMagnifi(1.2) }}
                  maxLength={4}
                  returnKeyType="done" />
              </View>
              <View style={styles.infoAggWrap}>
                <View style={styles.checkBox}></View>
                <Text style={styles.infoAgg}>개인정보 수집 및 이용 동의</Text>
              </View>

              <View style={styles.textBox}>
                <View>
                  <Text style={styles.textBoxTitle}>[ 개인정보수집 및 사용 ]</Text>
                  <Text>목적 : 토브 앱 이용</Text>
                  <Text>수집 : 이름, 전화번호</Text>
                  <Text>보유기간 : 목적 달성 시 지체없이 폐기</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.loginBtnWrap} onPress={() => doLogin(name, inputhpNo)}>
                <Text style={styles.loginBtn}>로그인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </KeyboardAwareScrollView >}
    </>

  );
}

Signup.propTypes = {

}

Signup.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}




export default Signup
