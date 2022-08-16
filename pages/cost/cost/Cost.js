import { SelectBox, Text, View, TextInput, FlatList, ScrollView, Styled, Image } from 'react-native';
import { styleSheet } from './stylesheet';
import React, { Component, useRef, useState, useMemo, useEffect } from 'react';
import { Image as ReactImage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import client from '../../../api/client';
import { Picker } from '@react-native-picker/picker';
import TempoModal from '../../share/modal/modal';

const Cost = (props) => {

  const styles = styleSheet()
  const [memberName, setMemberName] = useState('')
  const [memberId, setMemberId] = useState('')
  const [mobileId, setMobileId] = useState('')
  const [dateState, setDateState] = useState({
    viewModal: false,
    confirmVal: '',
    confirmDate: new Date()
  })
  const [inputData, setInputData] = useState({
    "eventId": 6,
    "useAmount": 0,
    "useComment": "",
    "useProStatus": "C",
    "useReceiptId": "",
    "useSubject": "",
    "usedDate": ""
  })

  useEffect(() => {
    getData()
  }, [])

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

  const openDateModal = () => {
    setDateState({ ...dateState, viewModal: true })
  }

  const confirmDateChange = (val) => {
    const year = val.getFullYear()
    const month = val.getMonth() + 1
    const date = val.getDate()
    setDateState({ ...dateState, confirmDate: val, confirmVal: `${year}-${month}-${date}`, viewModal: false })
    setInputData({ ...inputData, usedDate: `${year}-${month}-${date}` })
  }

  const regist = async () => {
    const body = { ...inputData, usedDate: `2022-06-06`, "eventUserId": memberId, }
    console.log(JSON.stringify(body, null, 4))
    const response = await client.post(`rest/v1/s0221a0060/register-event-cost`, body).catch((e) => {
      console.log('error')
      console.log(JSON.stringify(e, null, 4))
    })
    console.log(JSON.stringify(response, null, 4))

    if (response.status === 200) {
      goback()
    }
  }

  const goback = async () => {
    try {
      props.route.params.refresh()
    } catch (error) {
      console.log(error)
    }
    props.navigation.goBack()
  }

  return (

    <View style={styles.wrap} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.inner}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={goback} >
            <Image source={require('./assets/backBtnIcon.png')} style={styles.backBtnIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleWrap}>
          <View style={styles.highlight}></View><Text style={styles.title}>비용작성</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>제목</Text>
            <TextInput style={styles.input} onChange={(e) => setInputData({ ...inputData, useSubject: e.nativeEvent.text })} />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>구분</Text>
            <View style={styles.searchBtn} >
              <TouchableOpacity onPressIn={() => openDateModal()} >
                <ReactImage source={require('./assets/magnifying-glass.png')} style={styles.searchIcon} />
              </TouchableOpacity>
            </View>
            <TextInput style={styles.input} editable={false} value={""}></TextInput>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.label} >사용일자</Text>
            <View style={styles.searchBtn} >
              <TouchableOpacity onPressIn={() => openDateModal()} >
                <ReactImage source={require('./assets/magnifying-glass.png')} style={styles.searchIcon} />
              </TouchableOpacity>
            </View>
            <TextInput style={styles.input} editable={false} value={dateState.confirmVal}></TextInput>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>사용금액</Text>
            <TextInput style={styles.input} onChange={(e) => setInputData({ ...inputData, useAmount: e.nativeEvent.text })}></TextInput>
            <Text style={styles.won}>원</Text>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>첨부파일</Text>
            <View style={styles.addBtn}>
              <ReactImage source={require('./assets/plus.png')} style={styles.addIcon} ></ReactImage>
            </View>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={styles.textfieldWrap}>
            <Text style={styles.label}>사용내역</Text>
            <TextInput
              style={styles.textfield}
              multiline={true}
              onChange={(e) => setInputData({ ...inputData, useComment: e.nativeEvent.text })}
            />
          </View>
        </View>
        <View style={styles.btnWrap}>
          <TouchableOpacity onPress={regist}>
            <Text style={styles.requestBtn}>등록</Text>
          </TouchableOpacity>
          <Text style={styles.delBtn}>삭제</Text>
        </View>
      </View>
      <DateTimePickerModal
        isVisible={dateState.viewModal}
        mode="date"
        onConfirm={(a) => confirmDateChange(a)}
        onCancel={() =>
          setDateState({ ...dateState, viewModal: false })
        }
        date={dateState.confirmDate}
      />
      <TempoModal />
    </View>
  )
}

export default Cost