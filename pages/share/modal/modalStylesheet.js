import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const modalStyleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({

    "modalBox": {
      "width": '100%',
      "height": '100%',
      'backgroundColor': 'rgba(0,0,0,0.7)',
      "position": 'absolute',
      // display: 'none',
      "zIndex": 9,

    },
    "box": {
      "width": '90%',
      "height": '60%',
      'backgroundColor': 'white',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 80,
      'marginBottom': 'auto',
    },

    'modalInner': {
      "position": "relative",
      "width": "85%",
      "marginLeft": 'auto',
      "marginRight": 'auto',
      // 'overflow': 'scroll'
    },

    'titleSection': {
      "width": '100%',
      'height': 50,
      'borderBottomWidth': 2,
      'borderBottomColor': '#707070',
      'textAlignVertical': 'center',
      'display': 'flex',

    },
    'modalTitle': {
      'textAlign': 'center',
      'fontSize': 18,
      'fontWeight': '900',
      'fontFamily': "Apple SD Gothic Neo",
      'color': '#000000',
      'lineHeight': 50,

    },

    'cellWrap': {
      'width': '90%',
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'marginTop': 30,
    },

    'cell': {
      'width': '100%',
      'height': 60,
      'flexDirection': 'row',
      'paddingLeft': 20,
      'borderColor': '#f15a24',
      'borderWidth': 2,
      'borderRadius': 10,
      'alignItems': 'center',
    },

    'cellNum': {

      'fontSize': 18,
      'fontWeight': '900',
      'fontFamily': "Apple SD Gothic Neo",
      'color': '#f15a24',
    },
    'cellName': {

      'fontSize': 18,
      'fontWeight': '800',
      'fontFamily': "Apple SD Gothic Neo",
      'color': '#1d1d1d',
      'marginLeft': 30,

    },

    'closeBtn': {
      'width': '100%',
      'height': 50,
      'position': 'absolute',
      'bottom': 0,
      'backgroundColor': 'white'

    },

    'closeText': {
      'fontSize': 18,
      'fontWeight': '900',
      'fontFamily': "Apple SD Gothic Neo",
      'color': '#f15a24',
      'textAlign': 'right',
      'lineHeight': 50,
      'marginRight': 20,
    },
  })
}