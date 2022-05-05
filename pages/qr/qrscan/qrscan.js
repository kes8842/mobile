import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const Qrscan = () => {

  return (
    <ScrollView data-layer="ebae08e0-c5cf-45bb-b786-8131a6080ff2" style={styles.qrscan} >
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
      <View data-layer="b0ddd424-1e4f-4a89-8505-7750b8299e74" style={styles.qrscan_iconCamerachange}>
        <ReactImage data-layer="dd3848b7-d8db-4392-a319-b5d8172cbb38" source={require('./assets/sync.png')} style={styles.qrscan_iconCamerachange_sync} />
      </View>
    </ScrollView >
  );
}

Qrscan.propTypes = {

}

Qrscan.defaultProps = {

}

export default Qrscan

const styles = StyleSheet.create({
  "qrscan": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(0, 0, 0, 0.7019607843137254)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 360,
    "height": 640,
    "left": 0,
    "top": 0
  },
  "qrscan_x145": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 249.07,
    "height": 333.12,
    "left": 55,
    "top": 127.88
  },
  "qrscan_x145_x8": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 46,
    "borderTopRightRadius": 46,
    "borderBottomLeftRadius": 46,
    "borderBottomRightRadius": 46,
    "width": 249.07,
    "height": 245,
    "left": 0,
    "top": 0
  },
  "qrscan_x145_x144": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 240,
    "height": 51.31,
    "left": 4.53,
    "top": 281.8
  },
  "qrscan_x145_x144_x146": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 240,
    "height": 51.31,
    "left": 0,
    "top": 0
  },
  "qrscan_x145_x144_x146_qr0d071759": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 23,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Apple SD Gothic Neo",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 240,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "qrscan_x145_x144_x146_qr": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(188, 188, 188, 1)",
    "fontSize": 14,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Apple SD Gothic Neo",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 186,
    "height": 17,
    "left": 27,
    "top": 34.31
  },
  "qrscan_x34": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 84,
    "height": 84,
    "left": 138,
    "top": 525
  },
  "qrscan_x34_x26": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 84,
    "height": 84,
    "left": 0,
    "top": 0
  },
  "qrscan_x34_x27": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 62,
    "height": 62,
    "left": 11,
    "top": 11
  },
  "qrscan_iconCloseWhite": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 27,
    "height": 27,
    "left": 19,
    "top": 37
  },
  "qrscan_iconCloseWhite_x4781838cancelclosedeleteexitlogouticon": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 27,
    "height": 27,
    "left": 0,
    "top": 0
  },
  "qrscan_iconCamerachange": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 37,
    "height": 37,
    "left": 273,
    "top": 549
  },
  "qrscan_iconCamerachange_sync": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 37,
    "height": 37,
    "left": 0,
    "top": 0
  }
});