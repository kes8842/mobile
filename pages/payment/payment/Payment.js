import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { styleSheet } from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import client from '../../../api/client';

const Payment = (props) => {
  const [detailData, setDetailData] = useState({})
  const [inputData, setInputData] = useState({})
  const styles = styleSheet()

  useEffect(() => {
    callDetail()
  }, [])

  const callDetail = async () => {
    const { eventUseId } = props.route.params
    const response = await client.get(`/rest/v1/s0221a0080/cost-req-detail?eventUseId=${eventUseId}`).catch((e) => {
      console.log(e)
    })
    if (response.status === 200) {
      console.log('?')
      console.log(JSON.stringify(response, null, 4))
      const memberName = await AsyncStorage.getItem('memberName')
      setDetailData({ ...response.data?.data || {}, memberName: memberName })
    }
  }

  const requestPay = async (flag) => {
    const { eventUseId } = props.route.params
    const memberId = await AsyncStorage.getItem('memberId')

    const body = {
      ...inputData,
      eventUseId,
      memberId,
      payCurrentStep: 1,
      payResultFlag: flag
    }

    console.log(body)
    const response = await client.post(`/rest/v1/s0221a0080/processing-cost-req`, body).catch((e) => {
      console.log(e)
    })
    console.log(JSON.stringify(response?.data, null, 4))

    if (response?.data?.status === 200) {
      props.navigation.goBack()
    }
  }

  const renderDetailPay = (item) => {
    return (
      <View>
        <View style={styles.sepLine}></View>
        <View style={styles.contents}>
          <Text style={styles.label}>결제자명</Text>
          <Text>{item?.paiedName}</Text>
        </View>
        <View style={styles.contents}>
          <Text style={styles.label}>결제결과</Text>
          <Text>{item?.payResultFlagNm}</Text>
        </View>
        <View style={styles.contents}>
          <Text style={styles.label}>결제의견</Text>
          <Text>{item?.payComment}</Text>
        </View>
      </View>)
  }

  return (
    <View style={styles.wrap} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.topMenu}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <ReactImage source={require('./assets/backBtnIcon.png')} style={styles.backBtnIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inner}>
        <View style={styles.title}>
          <Text style={styles.date}>사용일자: {detailData?.header?.usedDate}</Text>
          <View style={styles.amountWrap}>
            <View>
              <Text style={styles.amount}>{detailData?.header?.useAmount} 원</Text>
            </View>
            <View >
              <Text style={styles.status}>결제요청</Text>
            </View>
          </View>
        </View>

        <View style={styles.contentsWrap}>
          <View style={styles.contents}>
            <Text style={styles.label}>작성자</Text><Text>{detailData?.header?.userName}</Text>
          </View>

          <View style={styles.contents}>
            <Text style={styles.label}>사용제목</Text><Text>{detailData?.header?.useSubject}</Text>
          </View>

          <View style={styles.contents}>
            <Text style={styles.label}>행사명</Text><Text>{detailData?.header?.eventNm}</Text>
          </View>

          <View style={styles.contents}>
            <Text style={styles.label}>첨부파일</Text><Text>sampleFile.jpg</Text>
          </View>

          <View style={styles.contents}>
            <Text style={styles.label}>사용내역</Text>
            <Text>{detailData?.header?.useComment}</Text>
          </View>
          {detailData?.detail?.map((item) => renderDetailPay(item))}
          <View style={styles.sepLine}></View>
          <View style={styles.contentsTextarea}>
            <Text style={styles.label}>결제의견</Text>
            <TextInput style={styles.opinion} onChange={(e) => setInputData({ ...inputData, payComment: e.nativeEvent.text })} />
          </View>
        </View>
        <View style={styles.btnWrap}>
          <TouchableOpacity onPress={() => requestPay("Y")}>
            <Text style={styles.confBtn}>승인</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => requestPay("N")}>
            <Text style={styles.rejBtn}>반려</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={styles.canBtn}>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Payment
