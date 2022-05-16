import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { RNCamera } from 'react-native-camera';
import { Dimensions } from 'react-native';
import { useRef, useState, useMemo } from 'react/cjs/react.development';
import { styleSheet } from './stylesheet';
import client from '../../../api/client';

const Qrscan = () => {
  const camera = useRef(null)
  const [controlCamera, setControlCamera] = useState(false)
  const CAM_VIEW_HEIGHT = Dimensions.get('screen').height;
  const CAM_VIEW_WIDTH = Dimensions.get('screen').width;
  const styles = useMemo(() => styleSheet(CAM_VIEW_HEIGHT, CAM_VIEW_WIDTH), [CAM_VIEW_HEIGHT, CAM_VIEW_WIDTH])

  const onBarCodeRead = async (e) => {
    if (controlCamera) {
      return
    }
    camera.current.pausePreview()
    setControlCamera(true)

    const qrData = JSON.parse(e.data)
    console.log(JSON.stringify(qrData, null, 4))

    const response = await client.post('rest/v1/s0221a0020/qr-scan', { ...qrData, "orgId": "39", "eventId": "4" })
    console.log(JSON.stringify(response, null, 4))

    setTimeout(() => {
      setControlCamera(false)
      camera.current.resumePreview()
    }, 1500)

  }

  return (
    <RNCamera
      ref={camera}
      style={{ width: CAM_VIEW_WIDTH, height: CAM_VIEW_HEIGHT, }}
      type={RNCamera.Constants.Type.back}
      captureAudio={false}
      barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
      cameraViewDimensions={{
        width: CAM_VIEW_WIDTH,
        height: CAM_VIEW_HEIGHT,
      }}
      rectOfInterest={{
        x: 0.1,
        y: 0,
        width: 0.35,
        height: 0.85,
      }}
      onBarCodeRead={(e) => onBarCodeRead(e)}
    >
      <View style={styles.qrscan}>
        <View data-layer="ba021901-9252-4df0-889b-575fccb548a5" style={styles.qrscan_x145}>
          <ReactImage data-layer="14a7451c-3120-45cc-ace7-5ffcbafc3d52" source={require('./assets/x8.png')} style={styles.qrscan_x145_x8} />
          <View data-layer="c3c40b39-8c21-4ffb-b343-5f19b3581f6e" style={styles.qrscan_x145_x144}>
            <View data-layer="9d8c68e7-fd16-475a-854e-7c08e5ffdb3b" style={styles.qrscan_x145_x144_x146}>
              <Text data-layer="0f36aec7-21a0-47d0-b656-b6232e2c5ec0" style={styles.qrscan_x145_x144_x146_qr0d071759}>QR코드를 스캔 시켜주세요</Text>
              <Text data-layer="b2d6896f-4cec-4c48-8729-bdf17e782506" style={styles.qrscan_x145_x144_x146_qr}>QR코드가 영역 안에 위치시키세요</Text>
            </View>
          </View>
        </View>
        <View data-layer="0f11cc1c-46a2-4ee1-a7fa-755b63a69334" style={styles.qrscan_x34}>
          <Svg data-layer="d08d0856-70ba-4dd7-a3ed-46b574f08e44" style={styles.qrscan_x34_x26} preserveAspectRatio="none" viewBox="-0.75 -0.75 85.5 85.5" fill="transparent"><SvgPath d="M 42 0 C 65.19596099853516 0 84 18.80404090881348 84 42 C 84 65.19596099853516 65.19596099853516 84 42 84 C 18.80404090881348 84 0 65.19596099853516 0 42 C 0 18.80404090881348 18.80404090881348 0 42 0 Z" /></Svg>
          <Svg data-layer="e9e6e53c-e2f7-45ee-8b23-88c16e868f9a" style={styles.qrscan_x34_x27} preserveAspectRatio="none" viewBox="0 0 62 62" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 31 0 C 48.12082672119141 0 62 13.87917327880859 62 31 C 62 48.12082672119141 48.12082672119141 62 31 62 C 13.87917327880859 62 0 48.12082672119141 0 31 C 0 13.87917327880859 13.87917327880859 0 31 0 Z" /></Svg>
        </View>
        <View data-layer="4d320cd8-f321-4fd5-b48d-c8cb8144f2d7" style={styles.qrscan_iconCloseWhite}>
          <ReactImage data-layer="186382d1-190f-4dad-a70f-b9339a603d11" source={require('./assets/x4781838cancelclosedeleteexitlogouticon.png')} style={styles.qrscan_iconCloseWhite_x4781838cancelclosedeleteexitlogouticon} />
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

