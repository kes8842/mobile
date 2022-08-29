import React, { Component, useEffect, useMemo, useState } from 'react';
import { Text, View, TextInput, ScrollView, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { styleSheet } from './stylesheet';
import client from '../../../api/client';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TempoModal from '../../share/modal/modal';

const CostList = (props) => {
  const styles = styleSheet()

  const [listData, setListData] = useState([])
  const [eventOption, setEventOption] = useState([])
  const [openModal, setOpenmodal] = useState(false)
  const [eventState, setEventState] = useState({
    eventId: "",
    eventNm: ""
  })
  useEffect(() => {
    callModalData()
  }, [])

  const callList = async () => {
    const memberId = await AsyncStorage.getItem('memberId')
    const response = await client.get(`rest/v1/s0221a0070/retrieve-cost-req?mobileMemberId=${memberId}&fromDate=2022-01-01&toDate=2022-12-31`)
      .catch((e) => console.log(JSON.stringify(e, null, 4)))
    // console.log(JSON.stringify(response?.data, null, 4))
    setListData(response?.data?.data || [])
  }

  const callModalData = async () => {
    const res = await client.get(`/rest/v1/s0221a2000/event-list?&orgId=39`).catch(e => {
      // console.log(JSON.stringify(e, null, 4))
    })
    // console.log(JSON.stringify(res, null, 4))
    if (res.status === 200) {
      const option = res.data?.data?.map(i => {
        return {
          text: i.eventNm, value: i.eventId
        }
      })
      setEventOption(option)
    }
  }

  const modalOnClick = (value, text) => {
    setEventState({ eventId: value, eventNm: text })
    setOpenmodal(false)
  }

  const listItem = (item, index) => {
    try {
      const title = item?.useSubject
      const cutTitle = title ? `${title?.substring(0, 11)}...` : ""
      // return (<Text style={{ height: 150 }}>teset</Text>)
      return (
        <TouchableOpacity key={index}>
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
        <Text style={styles.title}>비용요청현황</Text>
      </View>
      <View style={styles.inner}>
        {/* <View style={styles.layer1}>
          <TouchableOpacity onPress={() => setOpenmodal(true)} >
            <Text style={styles.searchInput}
            >{eventState?.eventNm || '구분'}
            </Text>
          </TouchableOpacity>
          
        </View> */}
        <View style={styles.layer1}>
          <View style={styles.searchDate}>
            <Text style={styles.inputDate}
              type="date"
              required aria-required="true"
              editable={false}
              onPress={() => setOpenmodal(true)}>날짜선택</Text>
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
      </View>
      <View style={styles.cellWrap}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
          {listData.map((t, i) => listItem(t, i))}
        </ScrollView>
      </View>
      <View>
      </View>
      <View style={styles.regBtnWrap}>
        <TouchableOpacity style={styles.regBtn} onPress={() => {
          props.navigation.navigate('Cost', { refresh: callList })
        }}>
          <Text style={styles.regBtnText}>등록</Text>
        </TouchableOpacity>
      </View>
      <TempoModal
        openModal={openModal}
        onClick={modalOnClick}
        onClose={() => setOpenmodal(false)}
        option={eventOption}
      />
    </View >
  )
}

export default CostList
