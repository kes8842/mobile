import { Text, View, TextInput, Image, Keyboard, PermissionsAndroid, Linking, Platform } from 'react-native';
import { styleSheet } from './stylesheet';
import React, { useState, useEffect } from 'react';
import { Image as ReactImage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import client from '../../../api/client';
import TempoModal from '../../share/modal/modal';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AlertAsync from 'react-native-alert-async';

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
  const [eventOption, setEventOption] = useState([])
  const [inputData, setInputData] = useState({
    "eventId": "",
    "eventNm": "",
    "useAmount": 0,
    "useComment": "",
    "useProStatus": "A",
    "useReceiptId": "",
    "useSubject": "",
    "usedDate": ""
  })
  const [openModal, setOpenmodal] = useState(false)
  const [fileState, setFileState] = useState({
  })

  useEffect(() => {
    getData()
    callModalData()
    test()
  }, [])

  const test = () => {

  }

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
    Keyboard.dismiss()
    setDateState({ ...dateState, viewModal: true })
  }

  const openEventModal = () => {
    Keyboard.dismiss()
    setOpenmodal(true)
  }

  const confirmDateChange = (val) => {
    const year = val.getFullYear()
    const month = val.getMonth() + 1
    const date = val.getDate()
    setDateState({ ...dateState, confirmDate: val, confirmVal: `${year}-${month}-${date}`, viewModal: false })
    setInputData({ ...inputData, usedDate: `${year}-${month}-${date}` })
  }

  const regist = async () => {

    const body = { ...inputData, usedDate: dateState.confirmVal, "eventUserId": memberId, }
    console.log(JSON.stringify(body, null, 4))
    const headers = {
      'Content-Type': 'multipart/form-data; boundary=someArbitraryUniqueString',
    };

    const response = await client.post(`rest/v1/s0221a0060/register-event-cost`, body, headers).catch((e) => {
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

  const callModalData = async () => {
    const res = await client.get(`/rest/v1/s0221a2000/event-list?&orgId=39`).catch(e => {
      console.log(JSON.stringify(e, null, 4))
    })
    console.log(JSON.stringify(res, null, 4))
    if (res.status === 200) {
      const option = res.data?.data?.map(i => {
        return {
          text: i.eventNm, value: i.eventId
        }
      })
      setEventOption(option)
    }
  }

  const ShowPicker = async () => {
    let options = {
      title: "Upload Prescription",
      takePhotoButtonTitle: "Take a Photo",
      chooseFromLibraryButtonTitle: "Select From Gallery",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
      includeBase64: true
    };

    const cameraGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    )

    if (cameraGranted === PermissionsAndroid.RESULTS.GRANTED) {
      await AlertAsync(
        "사진을 선택해주세요.",
        "카메라로 촬영 혹은 파일을 선택해주세요.",
        [
          {
            text: '카메라',
            onPress: async () => {
              launchCamera({ saveToPhotos: true, includeBase64: true }, async (res) => {
                setInputData({
                  ...inputData,
                  base64: res.assets[0].base64,
                  fileName: res.assets[0].fileName
                })
              }).catch((e) => {
                console.log(e)
              })
            }
          },
          {
            text: '파일',
            onPress: async () => {
              launchImageLibrary(options, async (res) => {
                setInputData({
                  ...inputData,
                  base64: res.assets[0].base64,
                  fileName: res.assets[0].fileName
                })
              }).catch((e) => {
                console.log(e)
              })
            }
          },
        ],
        { cancelable: true })

    } else {
      await AlertAsync(
        "카메라 권한이없습니다.",
        "권한을 직접 설정해주세요",
        [
          {
            text: '예',
            onPress: async () => {
              Linking.openSettings()
            }
          },
          {
            text: '아니오',
          },
        ],
        { cancelable: false })
    }
  }

  const onClick = (e, text) => {
    setInputData({ ...inputData, eventId: e, eventNm: text })
    setOpenmodal(false)
  }

  return (

    <KeyboardAwareScrollView
      style={styles.wrap}
      resetScrollToCoords={{ x: 0, y: 0 }}
      enableOnAndroid={true}
      scrollEnabled={true}
      scrollToOverflowEnabled={true}
      enableAutomaticScroll={true}
      keyboardShouldPersistTaps='always'
      nestedScrollEnabled={true}
    >

      <View style={styles.topMenu}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={goback} >
            <Image source={require('./assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>비용작성</Text>
      </View>

      <View style={styles.inner}>
        <View style={styles.form}>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>사용제목</Text>
            <TextInput style={styles.input} onChange={(e) => setInputData({ ...inputData, useSubject: e.nativeEvent.text })} />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>행사명</Text>
            <View style={styles.searchBtn} >
              <TouchableOpacity onPressIn={() => openEventModal()} >
                <ReactImage source={require('./assets/magnifying-glass.png')} style={styles.searchIcon} />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              editable={false}
              value={inputData.eventNm}></TextInput>
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
            <TextInput
              style={styles.amountInput}
              onChange={(e) => {
                console.log(e.nativeEvent.text.replace(/,/gi, ""))
                setInputData({ ...inputData, useAmount: e.nativeEvent.text.replace(/,/gi, "") })
              }}
              value={inputData?.useAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              keyboardType={'number-pad'}
            />
            <Text style={styles.won}>원</Text>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>첨부파일</Text>
            <View style={styles.addBtn}>
              <TouchableOpacity onPressIn={() => ShowPicker()}>
                <ReactImage source={require('./assets/plus.png')} style={styles.addIcon} ></ReactImage>

              </TouchableOpacity>
            </View>
            <TextInput style={styles.input} editable={false}>{inputData.fileName}</TextInput>
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
      <TempoModal
        openModal={openModal}
        onClick={onClick}
        onClose={() => setOpenmodal(false)}
        option={eventOption}
      />
    </KeyboardAwareScrollView>
  )
}

export default Cost