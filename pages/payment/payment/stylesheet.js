import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 640
  return StyleSheet.create({

    "wrap": {
      "width": "100%",
      "height": "100%",
      "backgroundColor": "#ffffff"

    },
    "inner": {
      "width": "85%",
      "height": "100%",
      "position": "relative",
      "marginLeft": 'auto',
      "marginRight": 'auto',
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


    "title": {

      "width": "100%",
      "height": 70,
      "position": "absolute",
      "top": 75,
      "overflow": "hidden",
      "borderBottomWidth": 3,
      "borderBottomColor": "#bcbcbc",
    },


    "amountWrap": {
      "width": "100%",
      "display": "flex",
      "flexDirection": "row",
      "alignItems": "baseline",
      "justifyContent": 'space-between'

    },

    "amount": {
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": "700",
      "fontSize": 33,
      'color': '#1d1d1d'

    },


    "status": {
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": "800",
      "fontSize": 16,
      "color": "#00878D",
    },

    "date": {
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": "200",
      "fontSize": 10,
      "color": "#707070"

    },

    "contentsWrap": {
      'width': '100%',
      'position': 'absolute',
      'top': 155,
    },

    "contents": {
      'display': 'flex',
      'flexDirection': 'row',
      'justifyContent': 'space-between',
      'alignItems': 'center',
      'marginBottom': '4%'
    },

    'label': {
      'font-family': 'Apple SD Gothic Neo',
      'color': '#707070',
      'font-weight': '200',
      'fontSize': 14
    },

    'sepLine': {

      'width': '100%',
      'height': 3,
      'backgroundColor': '#bcbcbc',
      'marginBottom': 10,

    },


    'btnWrap': {

      'width': '100%',
      'position': 'absolute',
      'left': 0,
      'right': 0,
      'bottom': 10,
      'marginLeft': "auto",
      'marginRight': 'auto',
      'display': 'flex',
      'flexDirection': 'row',
      'justifyContent': 'space-between',
      ' alignItems': 'center',
    },



    'opinion': {
      'height': 40,
      'width': '100%',
      'borderRadius': 10,
      'borderWidth': 2,
      'borderColor': '#707070',
      'marginTop': 10,
      'fontFamily': 'Apple SD Gothic Neo',
      'fontSize': 12,
      'marginBottom': 10,
      'textAlignVertical': 'top'
    },


    'confBtn': {
      'width': 95,
      'height': 45,
      'borderRadius': 50,
      'backgroundColor': '#00878d',
      'color': 'white',
      'fontFamily': 'Apple SD Gothic Neo',
      'fontWeight': '500',
      'fontSize': 21,
      'textAlign': 'center',
      'lineHeight': 40,
    },

    'rejBtn': {
      'width': 95,
      'height': 40,
      'backgroundColor': '#e23838',
      'borderRadius': 50,
      'color': 'white',
      'fontFamily': 'Apple SD Gothic Neo',
      'fontWeight': '500',
      'fontSize': 21,
      'textAlign': 'center',
      'lineHeight': 40,
    },
    'canBtn': {
      'width': 95,
      'height': 40,
      'backgroundColor': '#a8a8a8',
      'borderRadius': 50,
      'color': 'white',
      'fontFamily': 'Apple SD Gothic Neo',
      'fontWeight': '500',
      'fontSize': 21,
      'textAlign': 'center',
      'lineHeight': 40,
    }
  })
}