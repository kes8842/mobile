import { SelectBox, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity, Styled, } from 'react-native';
import { styleSheet } from './stylesheet';
import React, { Component, useRef, useState, useMemo } from 'react';
import { Image as ReactImage } from 'react-native';


const Payment = () => {
  const styles = styleSheet()
  return (

    <View style={styles.wrap} >
      <View style={styles.inner}>
        <View style={styles.backBtn}>
          <ReactImage source={require('./assets/backBtnIcon.png')} style={styles.backBtnIcon} />
        </View>
        <View style={styles.titleWrap}>
          <View style={styles.highlight}></View><Text style={styles.title}>비용작성</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>제목</Text>
            <TextInput style={styles.input}/>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>구분</Text>
            {/* <SelectBox style={styles.selectBox}></SelectBox> */}
          </View>
          <View style={styles.inputWrap}>

            <Text style={styles.label}>사용일자</Text>
            <View style={styles.searchBtn}>
              <ReactImage source={require('./assets/magnifying-glass.png')} style={styles.searchIcon}></ReactImage>
            </View>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>사용금액</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.won}>원</Text>
          </View>

          <View style={styles.inputWrap}>
            <Text style={styles.label}>첨부파일</Text>
            <View style={styles.addBtn}>
              <ReactImage source={require('./assets/plus.png')} style={styles.addIcon} ></ReactImage>
            </View>

            <TextInput style={styles.input}></TextInput>

          </View>

          <View>
            <Text style={styles.label}>사용내역</Text>
            <TextInput
              style={styles.textfield}
              multiline={true}
              numberOfLines={4} />
          </View>
        </View>
      </View>
      <View style={styles.btnWrap}>
        <Text style={styles.requestBtn}>비용요청</Text>
        <Text style={styles.delBtn}>삭제</Text>
      </View>
    </View>
  )
}

export default Payment