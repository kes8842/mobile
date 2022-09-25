import { styleSheet } from './styleSheet';
import React, { Component, useEffect, useMemo, useState } from 'react';
import { Image as ReactImage } from 'react-native';
import { Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const Footer = (props) => {
    const styles = styleSheet()
    return (
        <View style={styles.bottomMenu}>
            <TouchableOpacity style={styles.homeBtn} onPress={() => props.navigation.navigate('QrCode')}>
                <View>
                    <ReactImage source={require('./assets/home.png')} style={styles.homeIcon} />
                    <Text style={styles.homeText} >홈</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.costListBtn} onPress={() => props.navigation.navigate('CostList')}>
                <View>
                    <ReactImage source={require('./assets/receipt.png')} style={styles.costIcon} />
                    <Text style={styles.costText} >비용등록</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentListBtn} onPress={() => props.navigation.navigate('PaymentList')}>
                <View>
                    <ReactImage source={require('./assets/stamp.png')} style={styles.paymentIcon} />
                    <Text style={styles.paymentText}>비용결제</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.scanBtn} onPress={() => props.navigation.navigate('Qrscan')}>
                <View>
                    <ReactImage source={require('./assets/scanIcon.png')} style={styles.scanBtnIcon} />
                    <Text style={styles.qrscanText}>QR스캔</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Footer