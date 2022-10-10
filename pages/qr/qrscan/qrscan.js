import React, { Component, useRef, useState, useMemo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { RNCamera } from 'react-native-camera';
import { Dimensions } from 'react-native';
import { styleSheet } from './stylesheet';
import client from '../../../api/client';

const Qrscan = (props) => {
  const camera = useRef(null)
  const [controlCamera, setControlCamera] = useState(false)
  const [cameraFront, setCameraFront] = useState(true)
  const CAM_VIEW_HEIGHT = Dimensions.get('screen').height;
  const CAM_VIEW_WIDTH = Dimensions.get('screen').width;
  const styles = useMemo(() => styleSheet(CAM_VIEW_HEIGHT, CAM_VIEW_WIDTH), [CAM_VIEW_HEIGHT, CAM_VIEW_WIDTH])

  const onBarCodeRead = async (e) => {
    if (controlCamera) {
      return
    }
    camera.current.pausePreview()
    setControlCamera(true)

    try {
      const qrData = JSON.parse(e.data)
      console.log(JSON.stringify(qrData, null, 4))

      const response = await client.post('rest/v1/s0221a0020/qr-scan', { ...qrData, "orgId": "39", "eventId": "4" })
      console.log(JSON.stringify(response, null, 4))
    } catch (error) {
      console.log(error)
    }
    setTimeout(() => {
      setControlCamera(false)
      camera.current.resumePreview()
    }, 1500)

  }

  return (
    <RNCamera
      ref={camera}
      style={{ width: CAM_VIEW_WIDTH, height: CAM_VIEW_HEIGHT, }}
      type={cameraFront ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
      captureAudio={true}
      barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
      cameraViewDimensions={{
        width: CAM_VIEW_WIDTH,
        height: CAM_VIEW_HEIGHT,
      }}
      rectOfInterest={{
        x: cameraFront ? 0.5 : 0.1,
        y: 0,
        width: 0.35,
        height: 0.85,
      }}
      onBarCodeRead={(e) => onBarCodeRead(e)}
    >
      <View style={styles.wrap}>
        <View style={styles.inner}>
          <View style={styles.topBtnWrap}>
            <TouchableOpacity style={styles.closeBtn} onPress={() => {
              props.navigation.goBack()
            }}>
              <ReactImage source={require('./assets/closeIcon.png')} style={styles.closeIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeBtn} onPress={() => {
              setCameraFront(!cameraFront)
            }}>
              <ReactImage source={require('./assets/change.png')} style={styles.closeIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.eventSelectBtn} onPress={() => {
              props.navigation.navigate('EventList')
            }}>
              <ReactImage source={require('./assets/magnifier.png')} style={styles.searchIcon} />
              <Text style={styles.eventSelect}>행사선택</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.camArea} />
          <View style={styles.textGroup}>
            <Text style={styles.compName}>에스원테크</Text>
            <Text style={styles.eventName}>SampleEventName</Text>
            <Text style={styles.eventDate}>2022.00.00 ~ 2022.00.00</Text>
          </View>
        </View>

      </View>
    </RNCamera >
  );
}

Qrscan.propTypes = {

}

Qrscan.defaultProps = {

}

export default Qrscan

