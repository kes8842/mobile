import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({

    "wrap": {
      'position': 'relative',
      "width": '100%',
      "height": '100%',
      'backgroundColor': 'white',
      'flex': 1
    },
    "inner": {
      "width": "85%",
      'height': '100%',
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'position': 'relative',
    },
    "topMenu": {
      "width": "100%",
      "height": 66,
      "position": "relative",
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'paddingHorizontal': 20,
      'borderBottomColor': '#707070',
      'borderBottomWidth': 2,
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'center',
    },
    "backBtn": {
      "overflow": "hidden",
      'position': 'absolute',
      'left': 16,
      'top': 15,
      "width": 40,
      "height": 40,
    },
    "backBtnIcon": {
      "width": 30,
      "height": 30
    },
    "title": {
      "color": "#F15A24",
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '800',
      "fontSize": 22,
    },
    "form": {
      "width": "100%",
      'marginTop': 20

    },
    "inputWrap": {
      'width': '100%',
      "marginBottom": "3%",
      "position": "relative",
    },

    "label": {
      "fontFamily": "Apple SD Gothic Neo",
      "color": "#707070",
      "fontWeight": '700',
      "fontSize": 18,
      'marginTop': 10,
    },
    "searchBtn": {
      "width": 22,
      "height": 22,
      "marginTop": -5,
      "position": "absolute",
      "right": 0,
      "bottom": 10,
      'zIndex': 1
    },
    "searchIcon": {
      "width": "100%",
      "height": "100%",
    },

    "input": {
      // "width": windowWidth * 0.85 * 0.8,
      "width": "100%",
      "height": 35,
      "overflow": "hidden",
      "borderBottomWidth": 2,
      "borderBottomColor": "#707070",
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 20,
      "fontWeight": '700',
      "color": "#383838",
      "paddingTop": 0,
      "paddingBottom": 10,
    },

    "won": {
      "position": "absolute",
      "right": 0,
      "bottom": 10,
      "fontSize": 14,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": "700",
      "color": "#1d1d1d",
    },
    "addBtn": {
      "position": "absolute",
      "right": 0,
      "bottom": 10,
      "width": 20,
      "height": 20,
      "backgroundColor": "#f15a24",
      "borderRadius": 50,
      'zIndex': 1
    },

    "addIcon": {
      "width": 13,
      "height": 13,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 3,
    },

    "textfield": {
      "height": windowHeight * 0.15,
      "borderRadius": 10,
      "borderWidth": 2,
      "borderColor": "#707070",
      "marginTop": 8,
      'paddingLeft': 10,
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 14,
      "textAlignVertical": "top",
    },

    "selectBox": {
      "width": "70%",
      // "border": "none",
      // "borderBottomWidth": 3,
      // "borderBottomColor": "#707070",
    },

    "btnWrap": {
      "width": "100%",
      "height": 50,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 40,
      "flexDirection": "row",
      "justifyContent": "space-between",
      "alignItems": "center",
    },

    "requestBtn": {
      "width": 140,
      "height": 50,
      "backgroundColor": "#F15A24",
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
      "backgroundColor": "#707070",
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