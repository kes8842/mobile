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

    "titleWrap": {

      "opacity": 1,
      "position": "absolute",
      "width": 250,
      "height": 40,
      "top": 80,

    },

    "title": {

      "color": "#1d1d1d",
      "position": "absolute",
      "top": 0,
      "left": 0,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '800',
      "fontSize": 33,
    },


    "highlight": {
      "width": 120,
      "height": 19,
      "backgroundColor": "rgba(252, 242, 0, 0.9599999785423279)",
      "top": 21,


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
    "regBtn": {
      "left": 0,
      "right": 0,
      "bottom": 60,
      "marginLeft": "auto",
      "marginRight": "auto",
      "width": 140,
      "height": 50,
      "borderRadius": 50,
      "backgroundColor": "rgba(0, 135, 141, 1)",
    },
    "regBtnText": {
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": "700",
      "fontSize": 21,
      "textAlign": "center",
      "lineHeight": 50,
      "color": "white",
    },
    "layer1": {
      "display": "flex",
      "alignItems": "center",
      "position": "absolute",
      "top": 150,

    },

    "searchInput": {
      "width": 126,
      "height": 38,
      "borderWidth": 2,
      "borderColor": "#707070",
      "borderRadius": 50,
      "color": "#707070",
      "text-align": "center",
      "lineHeight": 38,
      "fontFamily": " Apple SD Gothic Neo",
      "fontSize": 16,
      "fontWeight": "700",
      "marginRight": 30,
      // -webkit-appearance: none,
      //  -moz-appearance: none,
      //  appearance: none,
    },


    "searchBtn": {
      "width": 37,
      "height": 37,
      "borderRadius": 50,
      "backgroundColor": "#00878d",
    },

    "searchIcon": {
      "width": 25,
      "height": 25,
      "marginTop": 5,
      "marginLeft": "auto",
      "marginRight": "auto",

    },


    "layer2": {

      "position": "absolute",
      "top": 200,
      "width": "100%",

    },


    "searchDate": {

      "width": "100%",
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
      "width": "70%",
      "height": "100%",
      "marginTop": 5,
      "color": "#ababab",
      "fontSize": 14,
      "textAlign": "center",
      "backgroundColor": "transparent",
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
      "position": "absolute",
      "top": 260,
    },

    "cell": {
      "width": "100%",
      "height": 70,
      "margin-bottom": 10,
      "borderWidth": 2.5,
      "borderColor": "#00878d",
      "borderRadius": 10,
      "marginBottom": 10

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
    },

    "cellAmount": {
      "position": "absolute",
      "right": 0,
      "top": 22.5,
      "color": "#00878d",
      "fontSize": 21,
      "fontWeight": "800",
      "lineHeight": 25.2,
    },



  })
}