import React from "react";
import { Text, View, BackHandler, } from 'react-native';
import { modalStyleSheet } from './modalStylesheet';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { useState, useEffect } from "react";

const TempoModal = (props) => {
    const { onClick, onClose, option, openModal } = props
    const [display, setDisplay] = useState(false)
    const styles = modalStyleSheet()

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

    const renderList = (item, i) => {
        const { text, value } = item
        return (
            <View style={styles.cellWrap} key={i}>
                <TouchableOpacity onPress={() => onClick(value, text)}>
                    <View style={styles.cell}>
                        <Text style={styles.cellNum}>{i + 1}</Text>
                        <Text style={styles.cellName}>{text}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ ...styles.modalBox, display: display ? 'flex' : 'none' }} nestedScrollEnabled={true}>
            <View style={styles.box}>
                <View style={styles.titleSection}>
                    <Text style={styles.modalTitle}>구분</Text>
                </View>
                <ScrollView style={styles.modalInner} contentContainerStyle={{ height: option ? option.length * 90 + 70 : '100%' }}>
                    {option?.map((e, i) => renderList(e, i))}
                </ScrollView>
                <View
                    style={styles.closeBtn}>
                    <TouchableOpacity onPress={() => closeModal()}>
                        <Text style={styles.closeText}>닫기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

}

export default TempoModal;