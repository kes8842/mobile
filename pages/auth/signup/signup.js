import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TextInput, ScrollView, } from 'react-native';
import { Image as ReactImage } from 'react-native';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { windowWidth, windowHeight } = this.props
    const styles = styless(windowWidth, windowHeight)
    console.log(windowHeight)
    console.log(windowWidth)

    return (
      <ScrollView style={styles.signup}
        contentContainerStyle={{ flex: 1 }}>
        <View data-layer="ea17b79f-8e6b-4885-a32e-548925801faa" style={styles.signup_x98}>
          <View data-layer="905c4bd5-2a73-44ef-a82b-0a99dd7807b7" style={styles.signup_x98_x12}></View>
          <Text data-layer="72a38335-da9c-42f7-bb97-b91e906fe19a" style={styles.signup_x98_x04e5fcf6}>로그인</Text>
        </View>
        <View data-layer="87f18346-a379-44bd-b978-98ba7372e6e1" style={styles.signup_x3}>
          <Text data-layer="9c696a7b-5e45-4af3-92e2-8e55edfe1a69" style={styles.signup_x3_xeff37fe1}>성명</Text>
          <TextInput style={styles.phone_insert_xccd6c701} placeholder={"성명을 입력해주세요"} />
        </View>
        <View data-layer="eb158b20-d986-442e-b483-1f4a56372bf8" style={styles.phone_insert}>
          <Text data-layer="c0d5f013-2fa9-4232-afc9-e22f4701eb7e" style={styles.phone_insert_x}>핸드폰 번호</Text>
          <TextInput style={styles.phone_insert_xccd6c701} placeholder={"번호를 입력해주세요"} />
        </View>
        <View data-layer="a51f1c56-d1f7-4e89-be36-a3a0e7303358" style={styles.signup_iconClose}>
          <ReactImage data-layer="54e44012-5432-4f60-9943-ca3f2f328f01" source={require('./assets/x4781838cancelclosedeleteexitlogouticon.png')} style={styles.signup_iconClose_x4781838cancelclosedeleteexitlogouticon} />
        </View>
        <View data-layer="821bb467-e6a5-48f8-b7a6-602983356629" style={styles.signup_x150}>
          <View data-layer="7e9004e4-b07e-4d65-87e0-9a56101a0d47" style={styles.signup_x150_x1}></View>
          <View data-layer="278979ee-089f-4c0e-8e0c-32141bf16483" style={styles.signup_x150_x96}>
            <Text data-layer="96664cfd-7dea-4b39-84dc-c7c953850546" style={styles.signup_x150_x96_xae48a666}>로그인</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Signup.propTypes = {

}

Signup.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}

const styless = (windowWidth, windowHeight) => StyleSheet.create({
  "signup": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": windowHeight,
    "height": 640 * (windowHeight / 640),
    "left": 0,
    "top": 0
  },
  "signup_x98": {
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
    "width": 101 * (windowWidth / 360),
    "height": 43 * (windowHeight / 640),
    "left": 33 * (windowWidth / 360),
    "top": 99 * (windowHeight / 640)
  },
  "signup_x98_x12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(252, 242, 0, 0.9568627450980393)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 101 * (windowWidth / 360),
    "height": 19 * (windowHeight / 640),
    "left": 0,
    "top": 24 * (windowHeight / 640)
  },
  "signup_x98_x04e5fcf6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(29, 29, 29, 1)",
    "fontSize": 36 * (windowHeight / 640),
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Apple SD Gothic Neo",
    "textAlign": "left",
    "lineHeight": 43 * (windowHeight / 640),
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 93 * (windowWidth / 360),
    "height": 100 * (windowHeight / 640),
    "left": 1 * (windowWidth / 360),
    "top": 0
  },
  "signup_x3": {
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
    "width": 287 * (windowWidth / 360),
    "height": 58 * (windowHeight / 640),
    "left": 37 * (windowWidth / 360),
    "top": 234 * (windowHeight / 640)
  },
  "signup_x3_xeff37fe1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(29, 29, 29, 1)",
    "fontSize": 20 * (windowHeight / 640),
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Apple SD Gothic Neo",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 35 * (windowWidth / 360),
    "height": 24 * (windowHeight / 640),
    "left": 0,
    "top": 0
  },
  "signup_x3_x76274aa5": {
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
    "width": 287 * (windowWidth / 360),
    "height": 0,
    "left": 0,
    "top": 58 * (windowHeight / 640)
  },
  "signup_x3_x76274aa5_x1337d6733": {
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
    "width": 290 * (windowWidth / 360),
    "height": 3 * (windowHeight / 640),
    "left": -1.5 * (windowWidth / 360),
    "top": -1.5 * (windowHeight / 640)
  },
  "phone_insert": {
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
    "width": 287 * (windowWidth / 360),
    "height": 58 * (windowHeight / 640),
    "left": 37 * (windowWidth / 360),
    "top": 320 * (windowHeight / 640)
  },
  "phone_insert_x": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(29, 29, 29, 1)",
    "fontSize": 20 * (windowHeight / 640),
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Apple SD Gothic Neo",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 92 * (windowWidth / 360),
    "height": 24 * (windowHeight / 640),
    "left": 0,
    "top": 0
  },
  "phone_insert_xccd6c701": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "borderBottomWidth": 1.0,
    "fontSize": 20 * (windowHeight / 640),
    "width": 287 * (windowWidth / 360),
    "height": 50 * (windowHeight / 640),
    "left": 0,
    "top": 20 * (windowHeight / 640)
  },
  "phone_insert_xccd6c701_x1c33c89bd": {
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
    "width": 290 * (windowWidth / 360),
    "height": 3 * (windowHeight / 640),
    "left": -1.5 * (windowWidth / 360),
    "top": -1.5 * (windowHeight / 640)
  },
  "signup_iconClose": {
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
    "width": 27 * (windowWidth / 360),
    "height": 27 * (windowHeight / 640),
    "left": 19 * (windowWidth / 360),
    "top": 37 * (windowHeight / 640)
  },
  "signup_iconClose_x4781838cancelclosedeleteexitlogouticon": {
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
    "width": 27 * (windowWidth / 360),
    "height": 27 * (windowHeight / 640),
    "left": 0,
    "top": 0
  },
  "signup_x150": {
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
    "width": 300 * (windowWidth / 360),
    "height": 81 * (windowHeight / 640),
    "left": 30 * (windowWidth / 360),
    "top": 480 * (windowHeight / 640),
    textAlign: 'center'
  },
  "signup_x150_x1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(0, 135, 141, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 41,
    "borderTopRightRadius": 41,
    "borderBottomLeftRadius": 41,
    "borderBottomRightRadius": 41,
    "width": 300 * (windowWidth / 360),
    "height": 81 * (windowHeight / 640),
    "left": 0,
    "top": 0
  },
  "signup_x150_x96": {
    textAlign: 'center',
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
    "width": 110 * (windowWidth / 360),
    "height": 49 * (windowHeight / 640),
    "left": 95 * (windowWidth / 360),
    "top": 18 * (windowHeight / 640)
  },
  "signup_x150_x96_xae48a666": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 41 * (windowHeight / 640),
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
    "width": 110 * (windowWidth / 360),
    "height": 49 * (windowHeight / 640),
    "left": 0,
    "top": 0
  }
});