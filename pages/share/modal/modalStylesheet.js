import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const modalStyleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 640
  return StyleSheet.create({

    "modalBox": {
      "width": '100%',
      "height": '98%',
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'backgroundColor': 'white',
      "position": 'absolute',
      'zIndex' : 9,
    },

    'modalInner': {
      "position": "relative",
      "width": "85%",
      "marginLeft": 'auto',
      "marginRight": 'auto',
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

    'contentsWrap': {
      'width': '90%',
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'marginTop': 30,
    },

    'cell': {
      'width': '100%',
      'height': 60,
      'flexDirection': 'row',
      'paddingLeft' : 20,
      'borderColor' : '#00878d',
      'borderWidth' : 2,
      'borderRadius' : 10,
      'alignItems' :'center',

    },

    'cellNum': {

      'fontSize': 18,
      'fontWeight': '900',
      'fontFamily': "Apple SD Gothic Neo",
      'color': '#00878d',
    },
    'cellName': {

      'fontSize': 18,
      'fontWeight': '800',
      'fontFamily': "Apple SD Gothic Neo",
      'color': '#1d1d1d',
      'marginLeft': 30,

    },

    'closeBtn': {
      
      'position': 'absolute',
      'right': 20,
      'bottom': 20,

    },

    'closeText': {
      'fontSize': 18,
      'fontWeight': '900',
      'fontFamily': "Apple SD Gothic Neo",
      'color': '#00878D',
    },
  })
}