import React, { Component, useEffect, useMemo, useState } from 'react';
import { Text, View, TextInput, ScrollView, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { styleSheet } from './stylesheet';
import client from '../../../api/client';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PaymentList = (props) => {

  const styles = styleSheet()
  const [listData, setListData] = useState([])

  useEffect(() => {
    callList()
  }, [])

  const callList = async () => {
    const memberId = await AsyncStorage.getItem('memberId')
    const response = await client.get(`rest/v1/s0221a0090/cost-req-list?mobileMemberId=${memberId}&fromDate=2022-01-01&toDate=2022-12-31`)
      .catch((e) => console.log(JSON.stringify(e, null, 4)))
    setListData(response?.data?.data || [])
  }

  const listItem = (item, index) => {
    try {
      // console.log(item)
      const eventUseId = item?.eventUseId
      const title = item?.useSubject
      const cutTitle = title ? `${title?.substring(0, 11)}...` : ""
      return (
        <TouchableOpacity key={index} onPress={() => {
          props.navigation.navigate('Payment', { eventUseId: eventUseId })
        }}>
          <View style={styles.cell} >
            <View style={styles.cellInner}>
              <Text style={styles.cellTitle}>{cutTitle}</Text>
              <Text style={styles.cellDate}>
                <Text style={styles.name}>{item?.memberName}</Text> {item?.useDate}
              </Text>
              <Text style={styles.cellAmount}>{item?.useAmount && `${item?.useAmount} 원`}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    } catch (error) {
      console.log(error)
      return <View></View>
    }
  }

  return (
    <View style={styles.wrap}>

      <View style={styles.topMenu}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <ReactImage source={require('./assets/backBtnIcon.png')} style={styles.backBtnIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>결제요청현황</Text>
      </View>

      <View style={styles.inner}>

        <View style={styles.layer1}>
          <View style={styles.searchDate}>
            <TextInput style={styles.inputDate}
              type="date"
              placeholder="날짜선택"
              required aria-required="true"></TextInput>
            <Text style={styles.wave}>~</Text>
            <TextInput style={styles.inputDate}
              type="date"
              placeholder="날짜선택"
              required aria-required="true"></TextInput>
          </View>
          <View style={styles.searchBtn}>
            <TouchableOpacity onPress={() => {
              callList()
            }}>
              <ReactImage source={require('./assets/searchIcon.png')} style={styles.searchIcon}></ReactImage>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cellWrap}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            {listData.map((t, i) => listItem(t, i))}
          </ScrollView>

        </View>

      </View>
      <View style={styles.regBtnWrap}>
        <TouchableOpacity style={styles.regBtn} onPress={() => {
          props.navigation.navigate('Payment', { refresh: callList })
        }}>
          <Text style={styles.regBtnText}>등록</Text>
        </TouchableOpacity>
      </View>
    </View >

  )
}

export default PaymentList
