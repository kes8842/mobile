import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Dimensions } from 'react-native';
import { useEffect, useMemo, useState } from 'react/cjs/react.development';
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
    props.navigation.reset({ routes: [{ name: 'Home' }] })
  }

  return (
    <ScrollView data-layer="905d908f-4491-42f7-864c-7c16442357c2" style={styles.qrcode} contentContainerStyle={{ flex: 1 }}>
      <View data-layer="de19eb82-0485-4d1c-9872-4cb0ae63e396" style={styles.qr_body}>
        <Text data-layer="146d49f7-7ad6-4a00-baae-526c23a4698f" style={styles.qr_header}>QR코드를 스캔 시켜주세요</Text>
        <Text data-layer="e58061e9-34f0-48ea-bdaf-f10996cfa593" style={styles.qr_answer}>QR코드를 영역 안에 위치시키세요</Text>
      </View>
      <View data-layer="d8209c16-8106-4902-b922-fd35abb68437" style={styles.qrcode_x41}/>
      <View data-layer="e2ec3d4a-6cad-49b2-9a7a-61a164289cff" style={styles.qrcode_x56}>
        <Text data-layer="444cbccf-edaa-47eb-91e9-8628d9e4d209" style={styles.cost_text}>비용등록</Text>
        <View data-layer="76c66651-ea97-4eac-a065-e987d5f69f43" style={styles.qrcode_x56_iconHand}>
          <ReactImage data-layer="32c163e3-c209-4947-8382-a79ee6164b69" source={require('./assets/hand.png')} style={styles.qrcode_x56_iconHand_hand} />
        </View>
      </View>
      <View data-layer="7f789017-fa74-4a8a-a8e2-be928987507b" style={styles.qrcode_x55}>
        <Text data-layer="a57721ba-2cf2-4c28-99ec-86cdbb31382f" style={styles.pay_text}>결제하기</Text>
        <View data-layer="121b8c35-f149-433a-ad40-dd8cdd8136bf" style={styles.qrcode_x55_iconDocuments}>
          <ReactImage data-layer="50c178e5-f387-43bb-8abe-0cbbecffadc0" source={require('./assets/documents.png')} style={styles.qrcode_x55_iconDocuments_documents} />
        </View>
      </View>
      <Svg data-layer="08c3b17a-26b1-436c-b502-3ab7d53e66ad" style={styles.qrcode_x232ca2d889} preserveAspectRatio="none" viewBox="-0.75 0 1.5 68" fill="transparent"><SvgPath d="M 0 0 L 0 68" /></Svg>
      <View data-layer="fe6ffe7a-6e45-4439-8b86-dbdf502a8ef7" style={styles.qrcode_x109}>
        <View data-layer="3b3145cb-4b9e-43d4-b6be-e14f1de8bbdb" style={styles.qrcode_x109_x25}></View>
        <View data-layer="df94f18d-8bfe-4282-bee9-aec3b6d33f61" style={styles.qrcode_x109_x107}>
          <View data-layer="a488d622-4eb0-4ec6-b41e-5320a8522df7" style={styles.qrcode_x109_x107_x104}>
            <View style={styles.qrcode_x109_x107_x104_rwyyrzli98hnwpoQrCodeTransparentPng}>
              <QRcode size={140 * windowWidth / 360} value={JSON.stringify({ mobileId: mobileId, memberId: memberId, })} />
              {/* <QRcode size={140 * windowWidth / 360} value={[{ memberName: memberName }, { hpNo: hpNo }, { mobileId: mobileId }]} /> */}
            </View>
          </View>
          <View data-layer="26ffd333-e583-4974-a91a-ffbc3d27b71a" style={styles.qrcode_x109_x107_x105}>
            <View data-layer="6b0283c1-92db-45d3-b2c0-493f0a4f9b4e" style={styles.qrcode_x109_x107_x105_x106}>
              <Svg data-layer="523d924b-5be0-42ba-9477-93f94df31d4c" style={styles.qrcode_x109_x107_x105_x106_x35} preserveAspectRatio="none" viewBox="318.0924072265625 274.68994140625 58.1331787109375 58.13330078125" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 318.8424072265625 275.43994140625 L 318.8424072265625 283.43994140625 L 367.4755859375 283.43994140625 L 367.4755859375 332.0732421875 L 375.4755859375 332.0732421875 L 375.4755859375 275.43994140625 L 318.8424072265625 275.43994140625 Z" /></Svg>
              <View data-layer="9a09c712-989f-4a84-a469-f747c57bbfc0" style={styles.qrcode_x109_x107_x105_x106_x110}>
                <Svg data-layer="dfcb9b7d-04f6-45d0-9802-2e9ff147b89f" style={styles.qrcode_x109_x107_x105_x106_x110_x36} preserveAspectRatio="none" viewBox="318.0924072265625 391.05621337890625 58.1331787109375 58.13323974609375" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 367.4755859375 440.439453125 L 318.8424072265625 440.439453125 L 318.8424072265625 448.439453125 L 375.4755859375 448.439453125 L 375.4755859375 391.8062133789062 L 367.4755859375 391.8062133789062 L 367.4755859375 440.439453125 Z" /></Svg>
              </View>
              <Svg data-layer="0a617fa7-0d14-4337-a854-8beee8dd4f07" style={styles.qrcode_x109_x107_x105_x106_x37} preserveAspectRatio="none" viewBox="201.72607421875 274.68994140625 58.13330078125 58.13330078125" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 202.47607421875 332.0732421875 L 210.47607421875 332.0732421875 L 210.47607421875 283.43994140625 L 259.109375 283.43994140625 L 259.109375 275.43994140625 L 202.47607421875 275.43994140625 L 202.47607421875 332.0732421875 Z" /></Svg>
              <Svg data-layer="33049509-c783-4af4-9fae-5168e0217c28" style={styles.qrcode_x109_x107_x105_x106_x38} preserveAspectRatio="none" viewBox="201.72607421875 391.05621337890625 58.13330078125 58.13323974609375" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 210.47607421875 391.8062133789062 L 202.47607421875 391.8062133789062 L 202.47607421875 448.439453125 L 259.109375 448.439453125 L 259.109375 440.439453125 L 210.47607421875 440.439453125 L 210.47607421875 391.8062133789062 Z" /></Svg>
            </View>
          </View>
        </View>
      </View>
      <Text data-layer="3ca3bf9e-9457-4d07-bac9-54b5ad67fb9c" style={styles.qrcode_x8c7d203a}>{memberName}</Text>
      <Text data-layer="1f6a51e3-8b9d-4ebc-9db3-0c427022ef30" style={styles.qrcode_x}>엘리트그룹 소속 팀장</Text>
      {/* <ReactImage data-layer="e57ea44f-c86a-418e-8cb1-5d6a691fe0e8" source={require('./assets/x1.png')} style={styles.qrcode_x1} /> */}
      <TouchableOpacity data-layer="4b9630fe-a827-4064-a395-931ac2075662" style={styles.qrcode_x154} onPress={() => logOut()}>
        <ReactImage data-layer="7a226e96-6daa-46e7-a7ce-56ef6c541e02" source={require('./assets/x48.png')} style={styles.qrcode_x154_x48} />
        <Text data-layer="211359f3-8d11-4267-9658-b9bbf8608635" style={styles.log_out}>로그아웃</Text>
      </TouchableOpacity>
      <TouchableOpacity data-layer="57a7d739-aec4-4895-b0b8-bdf7b7fc9671" style={styles.qrcode_x151} onPress={() => props.navigation.navigate('Qrscan')}>
        <Text data-layer="a4f81d26-a9ef-4b21-95a0-2ae23068742f" style={styles.qrcode_x151_scan}>SCAN</Text>
        <ReactImage data-layer="f0a78d32-3850-4b97-8c00-50c767bb3dea" source={require('./assets/x49.png')} style={styles.qrcode_x151_x49} />
      </TouchableOpacity>
    </ScrollView>
  );
}

export default QrCode

QrCode.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}
