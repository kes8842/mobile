import React from "react";
import { Text, View, BackHandler, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { qrModalStyleSheet } from './QrModalStylesheet';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { useState, useEffect } from "react";
import QRCode from "react-native-qrcode-svg";

const QrModal = (props) => {
    const { onClose, openModal, qrData } = props
    const [display, setDisplay] = useState(false)
    const styles = qrModalStyleSheet()

    useEffect(() => {
        setDisplay(openModal)
        BackHandler.addEventListener('hardwareBackPress', close)
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', close)
        }
    }, [openModal])

    const close = () => {
        if (openModal) {
            onClose()
            return true
        }
        return false
    }

    const closeModal = () => {
        if (typeof (onClose) === 'function') {
            if (onClose) {
                onClose()
            }
        }
        setDisplay(false)
    }

    return (
        <View style={{ ...styles.modalBox, display: display ? 'flex' : 'none' }} nestedScrollEnabled={true}>
            <View style={styles.box}>
                <View style={styles.titleSection}>
                    <Text style={styles.modalTitle}>QR코드</Text>
                    <View style={styles.closeBtn}>
                        <TouchableOpacity onPress={() => closeModal()}>
                            <ReactImage source={require('./assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.qrcodeWrap}>
                    <QRCode size={240} value={JSON.stringify({ ...qrData })} />
                </View>
            </View>
        </View>
    );

}

export default QrModal;