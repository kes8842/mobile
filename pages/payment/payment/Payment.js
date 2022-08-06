import React, { Component, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Dimensions } from 'react-native';
import { styleSheet } from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Payment = (props) => {
  const styles = styleSheet()
  return (

    <View style={styles.wrap} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.inner}>
        <View style={styles.backBtn}>
          <ReactImage source={require('./assets/backBtnIcon.png')} style={styles.backBtnIcon} />
        </View>

        <View style={styles.title}>
          <Text style={styles.date}>사용일자: 2022년 02월 13일 15:21</Text>
          <View style={styles.amountWrap}>
            <Text style={styles.amount}>25,000 원</Text>
            <Text style={styles.status}>결제요청</Text>
          </View>
        </View>
        <View style={styles.contentsWrap}>
          <View style={styles.contents}>
            <Text style={styles.label}>작성자</Text><Text>사원A</Text>
          </View>

          <View style={styles.contents}>
            <Text style={styles.label}>결제자</Text><Text>결제자A</Text>
          </View>

          <View style={styles.contents}>
            <Text style={styles.label}>부서</Text><Text>부서A</Text>
          </View>

          <View style={styles.contents}>
            <Text style={styles.label}>첨부파일</Text><Text>파일A</Text>
          </View>

          <View style={styles.contentsTextarea}>
            <Text style={styles.label}>사용내역</Text>
            <TextInput style={styles.textarea}></TextInput>
          </View>

          <View style={styles.contentsTextarea}>
            <Text style={styles.label}>결제의견</Text>
            <TextInput style={styles.opinion}></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.btnWrap}>
        <Text style={styles.confBtn}>승인</Text>
        <Text style={styles.rejBtn}>반려</Text>
        <Text style={styles.canBtn}>취소</Text>
      </View>
    </View>
  )
}

export default Payment
