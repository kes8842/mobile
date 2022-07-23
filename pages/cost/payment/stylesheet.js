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
      "width": windowWidth * 0.85,
      "height": windowHeight,
      "margin": 0,
      "marginLeft": 'auto'
    },
    "backBtn": {
      "overflow": "hidden",
      "position": "absolute",
      "width": 30,
      "height": 30,
      "top": 37,
    },
    "backBtnIcon": {
      "width": 30,
    },
    "titleWrap": {
      "opacity": 1,
      "position": "absolute",
      "overflow": "hidden",
      "width": 172,
      "height": 40,
      "top": 96
    },
    "hightlight": {
      "width": 113,
      "height": 19,
      "backgroundColor": "rgba(252, 242, 0, 0.9599999785423279)",
      "opacity": 1,
      "position": "absolute",
      "top": 21,
    },
    "title": {
      "width": 172,
      "color": (29, 29, 29, 1),
      "position": "absolute",
      "top": 0,
      "left": 0,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '800',
      "fontSize": 33,
    },
    "form": {
      "width": windowWidth * 0.75,
      "position": "absolute",
      "top": 170
    },
    "inputWrap": {
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "baseline",
      // "marginBottom": windowWidth * 0.7,
      "position": "relative",
    },
    "label": {
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '700',
      "fontSize": 18,
      "lineHeight": 21,
    },
    "searchBtn": {
      "width": 22,
      "height": 22,
      "marginTop": -5,
      "position": "absolute",
      "right": 0,
    },
    "searchIcon": {
      "width": 22,
    },
    "input": {
      "width": windowWidth * 0.85 * 0.8,
      // "border": "none",
      "borderBottomWidth": 3,
      "borderBottomColor": "#707070",
    },
    "addBtn": {
      "position": "absolute",
      "right": 0,
      "width": 22,
      "height": 22,
      "backgroundColor": "#00878d",
      "borderRadius": 50,
      "marginTop": -5
    },
    "addIcon": {
      "width": 22 * 0.8,
      "height": 22 * 0.8,
      "margin": 0,
      "marginLeft": 'auto',
      "position": "absolute",
      "left": 0,
      "right": 0,
      "top": 1.5,
    },
    "textfield": {
      "width": windowWidth * 0.75,
      "height": windowHeight * 0.5,
      "borderRadius": 20,
      "borderWidth": 3,
      "borderColor": "#707070",
      "marginTop": 10,
      // "resize": "none",
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 14
    },

    "selectBox": {
      // "width": 70 %,
      // "border": "none",
      // "borderBottomWidth": 3,
      // "borderBottomColor": "#707070",

    },

    "btnWrap": {
      "width": windowWidth * 0.85,
      "position": "absolute",
      "left": 0,
      "right": 0,
      "bottom": 30,
      "margin": 0,
      "marginLeft": 'auto',
      "display": "flex",
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
      "color": (255, 255, 255, 1),
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      "fontSize": 21,
      "textAlign": "center",
      "lineHeight": 50,
    }
  })
}