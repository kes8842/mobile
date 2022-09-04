import React, { useEffect, useState } from 'react';
import { Dimensions, Keyboard } from 'react-native';
import { Text, View, TextInput, TouchableOpacity, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useEffect, useState, useMemo } from 'react/cjs/react.development';
import client from '../../../api/client';
import { styleSheet } from './stylesheet';

const Signup = (props) => {
  const { windowHeight } = props
  const [name, setName] = useState('')
  const [inputhpNo, setInputHpNo] = useState({
    first: '',
    middle: '',
    last: '',
  })
  const [show, setShow] = useState(false)
  const [heightMagnifi, setheightMagnifi] = useState(1.2)
  const [isFocus, setIsFoucs] = useState(false)
  const [privacyAgree, setPrivacyAgree] = useState(false)

  const styles = styleSheet()

  let keyboardSub = null;

  useEffect(() => {
    try {
      const getLocalData = async () => {
        const localName = await AsyncStorage.getItem('memberName')
        const hpNo = await AsyncStorage.getItem('hpNo')
        if (localName && hpNo) {
          doLogin(localName, hpNo, true)
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

  useEffect(() => {
    keyboardSub = Keyboard.addListener('keyboardDidHide', blurTextInput)
    return () => {
      keyboardSub?.remove()
    }
  }, [isFocus])

  const blurTextInput = () => {
    if (isFocus) {
      Keyboard.dismiss()
      setIsFoucs(false)
      setheightMagnifi(1.2)
    }
  }

  const doLogin = async (paramName, paramHpNo, privacy) => {
    if (!privacy) {
      alert('개인정보 수집에 동의해주세요')
      return
    }
    if (paramName === '') {
      alert('성명을 입력해주세요')
      return
    }

    if (paramHpNo === '' || paramHpNo.length < 11) {
      alert('핸드폰 번호를 확인해주세요')
      return
    }

    if (!paramName || !paramHpNo) {
      return
    }
    keyboardSub?.remove()

    try {
      const result = await client
        .get(`/rest/v1/s0221a0030/sign-up?memberName=${paramName}&hpNo=${paramHpNo}`)
        .catch((error) => {
          console.log('error!!')
          console.log(JSON.stringify(error.response, null, 4))
        })

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

  const checkHeight = () => {
    if (windowHeight < 800) {
      return heightMagnifi
    } else {
      return 1
    }
  }

  return (
    <>
      {show && <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollToOverflowEnabled={false}
        enableAutomaticScroll
        enableOnAndroid
        keyboardShouldPersistTaps='always'
        contentContainerStyle={{ height: windowHeight * checkHeight() }}
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
                onFocus={() => {
                  setheightMagnifi(1.5)
                  setIsFoucs(true)
                }}
                onBlur={() => { setheightMagnifi(1.2) }} />
              <View style={styles.phoneInputWrap}>
                <TextInput
                  style={styles.phoneInput1}
                  onFocus={() => {
                    setheightMagnifi(1.5)
                    setIsFoucs(true)
                  }}
                  onBlur={() => { setheightMagnifi(1.2) }}
                  placeholder={"010"}
                  onChange={(e) => setInputHpNo({ ...inputhpNo, first: e.nativeEvent.text })}
                  keyboardType="number-pad"
                  maxLength={3}
                  onKeyPress={(e) => { console.log(e) }}
                  returnKeyType="done"
                />
                <View style={styles.dash}></View>
                <TextInput
                  style={styles.phoneInput2}
                  placeholder={"0000"}
                  onChange={(e) => setInputHpNo({ ...inputhpNo, middle: e.nativeEvent.text })}
                  keyboardType="number-pad"
                  maxLength={4}
                  onFocus={() => {
                    setheightMagnifi(1.5)
                    setIsFoucs(true)
                  }}
                  onBlur={() => { setheightMagnifi(1.2) }}
                  returnKeyType="done" />
                <View style={styles.dash}></View>
                <TextInput
                  style={styles.phoneInput3}
                  placeholder={"0000"}
                  onChange={(e) => setInputHpNo({ ...inputhpNo, last: e.nativeEvent.text })}
                  keyboardType="number-pad"
                  onFocus={() => {
                    setheightMagnifi(1.5)
                    setIsFoucs(true)
                  }}
                  onBlur={() => { setheightMagnifi(1.2) }}
                  maxLength={4}
                  returnKeyType="done" />
              </View>
              <TouchableOpacity onPress={() => setPrivacyAgree(!privacyAgree)}>
                <View style={styles.infoAggWrap}>
                  <View style={privacyAgree ? styles.checkBox : styles.unCheckBox}>
                    <ReactImage source={require('./assets/check.png')} style={styles.checkIcon} />
                  </View>
                  <Text style={styles.infoAgg}>개인정보 수집 및 이용 동의</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.textBox}>
                <View>
                  <Text style={styles.textBoxTitle}>[ 개인정보수집 및 사용 ]</Text>
                  <Text>목적 : 토브 앱 이용</Text>
                  <Text>수집 : 이름, 전화번호</Text>
                  <Text>보유기간 : 목적 달성 시 지체없이 폐기</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.loginBtnWrap} onPress={() => doLogin(name, `${inputhpNo.first}${inputhpNo.middle}${inputhpNo.last}`, privacyAgree)}>
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
