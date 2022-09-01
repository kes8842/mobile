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

    "name": {
      "width": 172,
      "color": "rgba(29, 29, 29, 1)",
      "position": "absolute",
      "top": 0,
      "left": 0,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": "800",
      "fontSize": 33,
    },

    "layer1": {
      'marginTop': 30,
      "width": "100%",
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-between',
    },



    "searchInput": {
      "width": 120,
      "height": 40,
      "borderWidth": 2,
      "borderColor": "#707070",
      "borderRadius": 50,
      "textAlign": "center",
      "fontFamily": " Apple SD Gothic Neo",
      "marginRight": 10,
      "color": "#ababab",
      "fontSize": 14,
      "backgroundColor": "transparent",
      'lineHeight': 40
    },

    "searchBtn": {
      "width": 37,
      "height": 37,
      "borderRadius": 50,
      "backgroundColor": "#f14a24",

    },

    "searchIcon": {
      "width": 25,
      "height": 25,
      "marginTop": 5,
      "marginLeft": "auto",
      "marginRight": "auto",
    },

    "searchDate": {
      "width": '85%',
      "height": 40,
      "borderWidth": 2,
      "borderColor": "#707070",
      "borderRadius": 50,
      "color": "#707070",
      "textAlign": "center",
      "lineHeight": 38,
      "flexDirection": "row",
      "justifyContent": "space-evenly",
      "alignItems": "center",
    },

    "inputDate": {
      "height": 40,
      "color": "#ababab",
      "fontSize": 14,
      "textAlign": "center",
      "backgroundColor": "transparent",
      "alignItems": "center",
      "lineHeight": 40
    },
    //   input[type="date"]::before {

    //       content:attr(data-placeholder),
    //       width:100%,
    //       color:#ababab,
    //   }


    //   input[type="date"]:focus:before,
    //   input[type="date"]:valid:before{
    //       display: none,

    //   }


    "cellWrap": {
      "width": "100%",
      "height": "80%",
      "position": "absolute",
      "top": 165,
      'backgroundColor': '#e9e9e9',
      'zIndex': 3,
      'paddingTop': '10%',
      'paddingBottom': '10%',
    },

    "cell": {
      "width": "90%",
      "height": 70,
      // "borderWidth": 2.5,
      // "borderColor": "#F15A24",
      'backgroundColor': 'white',
      "borderRadius": 10,
      "marginBottom": 15,
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'elevation': 6,
      'zIndex': 9
    },

    "cellInner": {
      "width": "90%",
      "marginLeft": "auto",
      "marginRight": "auto",
      "position": "relative",
    },

    "cellTitle": {
      "color": "#1d1d1d",
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 21,
      "fontWeight": "700",
      "paddingTop": 8,
    },

    "cellDate": {

      "fontSize": 11,
      "lineHeight": 13.2,
      "fontWeight": "500",
      "color": "#707070",
      "marginTop": 5,

    },

    "name": {
      "fontSize": 14,
      "fontWeight": "700",
      'lineHeight': 20,
    },

    "cellAmount": {
      "position": "absolute",
      "right": 0,
      "top": 22.5,
      "color": "#F15A24",
      "fontSize": 21,
      "fontWeight": "800",
      "lineHeight": 25.2,
    },


    "regBtnWrap": {
      'position': 'absolute',
      'left': 0,
      'right': 0,
      'bottom': 60,
      "width": '100%',
      'height': 80,
      'zIndex': 9,
    },

    "regBtn": {
      'marginLeft': 'auto',
      'marginRight': 'auto',
      "width": '90%',
      'height': 80,
      "borderRadius": 50,
      'backgroundColor': "#F15A24",
      'elevation': 6,
    },
    "regBtnText": {
      'width': '100%',
      'height': '100%',
      'fontSize': 36,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '700',
      'color': 'white',
      'textAlign': 'center',
      'lineHeight': 80,

    },

  })
}