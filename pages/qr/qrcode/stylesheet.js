import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 800
    return StyleSheet.create({
        "wrap": {
            "backgroundColor": "white",
            "width": '100%',
            "height": '100%',
        },

        'topMenu': {
            "backgroundColor": "white",
            'width': '100%',
            'height': 55,
            'flexDirection': 'row',
            'justifyContent': 'space-between',
            'alignItems': 'center',
            'paddingVertical': 5,
            'paddingHorizontal': 10,

        },

        'topLogo': {

            'fontFamily': 'Jalnan',
            'color': '#F15A24',
            'fontSize': 32,

        },




        "profileCard": {
            'backgroundColor': ' rgba(255, 168, 0 , 0.3)',
            'width': '100%',
            'height': 150,
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'flexDirection': 'row',
            'alignItems': 'center',
            'position': 'relative',
        },


        "profileTextGroup": {
            'marginLeft': 30,
        },

        'memberName': {

            'fontFamily': "Apple SD Gothic Neo",
            'color': '#383838',
            'fontSize': 38,
            'fontWeight': '700',
            'marginBottom': 5
        },

        'memberPosition': {

            'fontFamily': "Apple SD Gothic Neo",
            'color': '#707070',
            'fontSize': 22,
            'fontWeight': '700',
            'marginBottom': 5
        },
        'welcome': {

            'fontFamily': "Apple SD Gothic Neo",
            'color': '#383838',
            'fontSize': 16,
            'fontWeight': '700',
            'marginBottom': 2
        },


        'logoutBtn': {
            'width': 30,
            'height': 30,
        },
        'logout': {

            'width': 30,
            'height': 30,
        },


        'qrCard': {
            'backgroundColor': 'white',
            'width': '90%',
            'height': 300,
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': 20,
            'borderRadius': 20,
            'flexDirection': 'row',
            'justifyContent': 'space-around',
            'alignItems': 'center',
            'elevation': 9,
        },
        'bottomMenu': {
            'width': '100%',
            'height': 80,
            'backgroundColor': 'white',
            'position': 'absolute',
            'bottom': 0,
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'space-around',
            'paddingHorizontal': 30,
            'borderTopWidth': 2,
            'borderTopColor': "rgba(112, 112, 112 , 0.3)",


        },
        'scanBtn': {
            'width': 30,
            'height': 30,
            'alignItems': 'center',
            'marginTop': -20,


        },
        'scanBtnIcon': {
            'width': 30,
            'height': 30,
            'marginLeft': 'auto',
            'marginRight': 'auto',
        },

        'homeBtn': {

            'alignItems': 'center',
        },

        'homeIcon': {
            'width': 30,
            'height': 30,
            'marginLeft': 'auto',
            'marginRight': 'auto',
        },
        'costIcon': {
            'width': 30,
            'height': 30,
            'marginLeft': 'auto',
            'marginRight': 'auto',

        },
        'paymentIcon': {
            'width': 30,
            'height': 30,
            'marginLeft': 'auto',
            'marginRight': 'auto',
        },

        'homeText': {
            'fontFamily': "Apple SD Gothic Neo",
            'color': '#707070',
            'fontSize': 12,
            'fontWeight': '700',
            'marginTop': 5,
            'textAlign': 'center'

        },
        'costText': {
            'fontFamily': "Apple SD Gothic Neo",
            'color': '#707070',
            'fontSize': 12,
            'fontWeight': '700',
            'marginTop': 5

        },
        'paymentText': {
            'fontFamily': "Apple SD Gothic Neo",
            'color': '#707070',
            'fontSize': 12,
            'fontWeight': '700',
            'marginTop': 5
        },
        'qrscanText': {
            'width': 50,
            'fontFamily': "Apple SD Gothic Neo",
            'color': '#707070',
            'fontSize': 12,
            'fontWeight': '700',
            'marginTop': 5,
            'textAlign': 'center'
        },

        'centerBtnWrap': {
            'width': '70%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': '15%',
            'display': 'flex',
            'flexDirection': 'column',
            'justifyContent': 'space-around',

        },

        'layer1': {
            'width': '100%',
            'flexDirection': 'row',
            'justifyContent': 'space-around',
            'marginBottom': '8%',
        },
        'layer2': {
            'width': '100%',
            'flexDirection': 'row',
            'justifyContent': 'space-around'
        },

        'centerCostBtn': {
            'width': 100,
            'height': 100,
            'borderRadius': 20,
            'backgroundColor': '#f29433'

        },
        'centerpaymentBtn': {
            'width': 100,
            'height': 100,
            'borderRadius': 20,
            'backgroundColor': '#f29433'

        },
        'centerQrBtn': {
            'width': 100,
            'height': 100,
            'borderRadius': 20,
            'backgroundColor': '#f15a24'

        },
        'centerGuideBtn': {
            'width': 100,
            'height': 100,
            'borderRadius': 20,
            'backgroundColor': '#ff6262'

        },

        'centerCostBtnWrap': {
            'display': 'flex',
            'alignItems': 'center'

        },
        'centerpaymentBtnWrap': {
            'display': 'flex',
            'alignItems': 'center'

        },
        'centerQrBtnWrap': {
            'display': 'flex',
            'alignItems': 'center'

        },
        'centerGuideBtnWrap': {
            'display': 'flex',
            'alignItems': 'center'
        },
        'centerIcon': {

            'width': 65,
            'height': 65,
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': 'auto',
            'marginBottom': 'auto'


        },
        'centerText': {
            'fontSize': 18,
            'fontWeight': '700',
            'textAlign': 'center',
            'marginTop': 5,
        },

        'adWrap': {
            'width': '100%',
            'height': 100,
            'marginTop': '17%',
            'backgroundColor': '#333',

        },
        'adText': {
            'color': 'white',
            'textAlign': 'center',
            'fontSize': 30,
            'lineHeight': 100,

        }

    });
}
