import React from "react";
import { Text, View, styles, TouchableOpacity } from 'react-native';
import Modal from 'react-native-simple-modal';
import { modalStyleSheet } from './modalStylesheet';

const TempoModal = () => {
    const styles = modalStyleSheet()
    return (
        <View style={styles.modalBox}>
            <View style={styles.titleSection}>
                <Text style={styles.modalTitle}>구분</Text>
            </View>

            <View style={styles.modalInner}>

                <View style={styles.contentsWrap}>
                    <View style={styles.cell}>
                        <Text style={styles.cellNum}>1</Text>
                        <Text style={styles.cellName}>행사명 A</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cellNum}>2</Text>
                        <Text style={styles.cellName}>긴 행사명 B</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cellNum}>3</Text>
                        <Text style={styles.cellName}>매우 긴 행사명 C</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cellNum}>4</Text>
                        <Text style={styles.cellName}>짤릴 수 있는 행사명 D</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cellNum}>5</Text>
                        <Text style={styles.cellName}>짤릴 수 있는 행사명 E</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cellNum}>6</Text>
                        <Text style={styles.cellName}>짤릴 수 있는 행사명 F</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cellNum}>7</Text>
                        <Text style={styles.cellName}>짤릴 수 있는 행사명 G</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cellNum}>8</Text>
                        <Text style={styles.cellName}>짤릴 수 있는 행사명 H</Text>
                    </View>
                </View>
            </View>

            <View
                style={styles.closeBtn}>
                <Text style={styles.closeText}>닫기</Text>
            </View>
        </View>
    );

}

export default TempoModal;