import React from "react";
import { Text, View, styles } from 'react-native';
import Modal from 'react-native-simple-modal';
import { modalStyleSheet } from './modalStylesheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useEffect } from "react";

const TempoModal = (props) => {
    const { onClick, onClose, option } = props
    const [display, setDisplay] = useState(false)
    const styles = modalStyleSheet()

    useEffect(() => {
        setDisplay(props.openModal)
    }, [props])

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
            <View style={styles.contentsWrap} key={i}>
                <TouchableOpacity onPress={() => onClick(value)}>
                    <View style={styles.cell}>
                        <Text style={styles.cellNum}>{i + 1}</Text>
                        <Text style={styles.cellName}>{text}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ ...styles.modalBox, display: display ? 'flex' : 'none' }}>
            <View style={styles.titleSection}>
                <Text style={styles.modalTitle}>구분</Text>
            </View>

            <View style={styles.modalInner}>
                {option?.map((e, i) => renderList(e, i))}
            </View>
            <View
                style={styles.closeBtn}>
                <TouchableOpacity onPress={() => closeModal()}>
                    <Text style={styles.closeText}>닫기</Text>
                </TouchableOpacity>

            </View>
        </View>
    );

}

export default TempoModal;