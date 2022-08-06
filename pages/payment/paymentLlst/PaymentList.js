import React, { Component, useEffect, useMemo, useState } from 'react';
import { Text, View, TextInput, ScrollView, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { styleSheet } from './stylesheet';
import client from '../../../api/client';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PaymentList = (props) => {

  const styles = styleSheet()
  const [listData, setListData] = useState([])

  useEffect(() => {
    callList()
  }, [])

  const callList = async () => {
    console.log('calllist done')
    const response = await client.get(`rest/v1//rest/v1/s0221a0090/cost-req-list?mobileMemberId=68&fromDate=2022-01-01&toDate=2022-12-31`)
      .catch((e) => console.log(JSON.stringify(e, null, 4)))
    // console.log(JSON.stringify(response?.data, null, 4))
    setListData(response?.data?.data || [])
  }

  const listItem = (item, index) => {
    try {
      const title = item?.useSubject
      const cutTitle = title ? `${title?.substring(0, 11)}...` : ""
      // return (<Text style={{ height: 150 }}>teset</Text>)
      return (
        <View style={styles.cell} key={index}>
          <View style={styles.cellInner}>
            <Text style={styles.cellTitle}>{cutTitle}</Text>
            <Text style={styles.cellDate}>
              <Text style={styles.name}>{item?.memberName}</Text> {item?.useDate}
            </Text>
            <Text style={styles.cellAmount}>{item?.useAmount && `${item?.useAmount} 원`}</Text>
          </View>
        </View>
      )
    } catch (error) {
      console.log(error)
      return <View></View>
    }
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.inner}>
        <View style={styles.backBtn}>

          <ReactImage source={require('./assets/backBtnIcon.png')} style={styles.backBtnIcon} />
        </View>
        <View style={styles.titleWrap}>
          <View style={styles.highlight}></View><Text style={styles.title}>결제요청현황</Text>
        </View>
        <View style={styles.layer1}>
          {/* <SelectBox style={styles.searchInput}>
                <option>구분</option>
                <option>구분</option>
                <option>구분</option>
                <option>구분</option>
              </SelectBox> */}
          <View style={styles.searchBtn}>
            <TouchableOpacity onPress={() => {
              callList()
            }}>
              <ReactImage source={require('./assets/searchIcon.png')} style={styles.searchIcon}></ReactImage>
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.layer2}>
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
        </View>
        <View style={styles.cellWrap}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} >

            {listData.map((t, i) => listItem(t, i))}
          </ScrollView>

        </View>

      </View>
      <View style={styles.regBtn}>
        <TouchableOpacity onPress={() => {
          props.navigation.navigate('Payment', { refresh: callList })
        }}>
          <Text style={styles.regBtnText}>등록</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}

export default PaymentList
