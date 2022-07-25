import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 640
  return StyleSheet.create({

    "wrap": {
      "width": windowWidth,
      "height": windowHeight,
    },
    "inner": {
      "position": "relative",
      // "width": windowWidth * 0.85,
      "width": "85%",
      "height": windowHeight,
      "marginLeft": 'auto',
      "marginRight": 'auto'
    },

    "backBtn": {
      "overflow": "hidden",
      "position": "absolute",
      "width": 30,
      "height": 30,
      "top": 25,
    },

    "backBtnIcon": {
      "width": "100%",
      "height": "100%"
    },

    "titleWrap": {
      "opacity": 1,
      "position": "absolute",
      // "overflow": "hidden",
      "width": 172,
      "height": 40,
      "top": 80
    },

    "highlight": {
      "width": 113,
      "height": 19,
      "backgroundColor": "rgba(252, 242, 0, 0.9599999785423279)",
      "opacity": 1,
      "position": "absolute",
      "top": 21,
    },
    "title": {
      "width": 172,
      "color": "#1d1d1d",
      "position": "absolute",
      "top": 0,
      "left": 0,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '800',
      "fontSize": 33,
    },
    "form": {
      // "width": windowWidth * 0.75,
      "width": "100%",
      "position": "absolute",
      "top": 130
    },
    "inputWrap": {

      "flexDirection": "row",
      "justifyContent": 'space-between',
      "alignItems": "baseline",
      "marginBottom": "5%",
      "position": "relative",

    },

    "label": {
      "fontFamily": "Apple SD Gothic Neo",
      "color": "#1d1d1d",
      "fontWeight": '700',
      "fontSize": 18

    },
    "searchBtn": {
      "width": 22,
      "height": 22,
      "marginTop": -5,
      "position": "absolute",
      "right": 0,
      "top": 10,
      zIndex: 1
    },
    "searchIcon": {
      "width": "100%",
      "height": "100%",
    },

    "input": {
      // "width": windowWidth * 0.85 * 0.8,
      "width": "70%",
      "height": 35,
      "overflow": "hidden",
      "borderBottomWidth": 3,
      "borderBottomColor": "#707070",
      "fontSize": 20,
      "paddingTop": 0,
      "paddingBottom": 0,
      "position": "relative"
    },

    "won": {
      "position": "absolute",
      "right": 0,
      "top": 10,
      "fontSize": 14,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": "700",
      "color": "#1d1d1d"


    },
    "addBtn": {
      "position": "absolute",
      "right": 0,
      "width": 22,
      "height": 22,
      "backgroundColor": "#00878d",
      "borderRadius": 50,
      "marginTop": 5
    },
    "addIcon": {
      "width": "60%",
      "height": "60%",
      "marginRight": "auto",
      "marginLeft": "auto",
      "marginTop": "auto",
      "marginBottom": "auto"


    },
    "textfieldWrap": {

      "marginTop": "5%"

    },
    "textfield": {
      // "width": windowWidth * 0.75,
      "height": windowHeight * 0.12,
      "borderRadius": 20,
      "borderWidth": 3,
      "borderColor": "#707070",
      "marginTop": 10,
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 14,
      "textAlignVertical": "top"
    },

    "selectBox": {
      "width": "70%",
      "border": "none",
      "borderBottomWidth": 3,
      "borderBottomColor": "#707070",

    },

    "btnWrap": {
      "width": "100%",
      // "width": windowWidth * 0.85,
      "position": "absolute",
      "left": 0,
      "right": 0,
      "bottom": 40,
      "margin": 0,
      "marginLeft": 'auto',
      "flexDirection": "row",
      "justifyContent": "space-between",
      "alignItems": "center",
    },

    "requestBtn": {
      "width": 140,
      "height": 50,
      "backgroundColor": "#00878d",
      "borderRadius": 50,
      "textAlign": "center",
      "color": "white",
      "fontSize": 21,
      "fontWeight": "500",
      "lineHeight": 50,
      "fontFamily": "Apple SD Gothic Neo"
    },

    "delBtn": {
      "width": 140,
      "height": 50,
      "backgroundColor": "rgba(226, 56, 56, 1)",
      "borderRadius": 50,
      "color": "white",
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      "fontSize": 21,
      "textAlign": "center",
      "lineHeight": 50,
    }
  })
}