import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({

    "wrap": {
      "width": "100%",
      "height": '100%',
      "backgroundColor": "#ffffff"

    },
    "inner": {
      "width": "85%",
      "height": "100%",
      "position": "relative",
      "marginLeft": 'auto',
      "marginRight": 'auto',
    },


    "topMenu": {

      "width": "100%",
      "height": 66,
      "position": "relative",
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'paddingHorizontal' : 20,
      'flexDirection' : 'row',
      'alignItems' : 'center',
      'justifyContent' : 'center',


    },


    "backBtn": {
      "overflow": "hidden",
      'position' : 'absolute',
      'left' : 16,
      'top' : 15,
      "width": 40,
      "height": 40,
    },


    "backBtnIcon": {
      "width": 30,
      "height": 30
    },

  


    "title": {

      "width": "100%",
      "height": 70,
      'marginTop' : 10,
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
      "fontWeight": "900",
      "fontSize": 16,
      "color": "#f15a24",
    },

    "date": {
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": "200",
      "fontSize": 10,
      "color": "#707070"

    },

    "contentsWrap": {
      'width': '100%',
      'marginTop' : 20,
      
    },

    "contents": {
      'display': 'flex',
      'flexDirection': 'row',
      'justifyContent': 'space-between',
      'alignItems': 'center',
      'marginBottom': '5%'
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

    'contentsTextarea' : {
      'height' : '30%'

    },

    'opinion': {
      'height': '100%',
      'width': '100%',
      'borderRadius': 10,
      'borderWidth': 2,
      'borderColor': '#707070',
      'marginTop': 10,
      'fontFamily': 'Apple SD Gothic Neo',
      'fontSize': 12,
      'textAlignVertical': 'top'
    },


    'btnWrap': {
      "width": "100%",
      "height": 50,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      "flexDirection": "row",
      "justifyContent": "space-between",
      "alignItems": "center",
    },

    'confBtn': {
      
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

    'rejBtn': {
     
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
    },
    
  })
}