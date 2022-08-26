import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 800
    return StyleSheet.create({
        "wrap": {
            "backgroundColor": "#FD6935",
            "width": '100%',
            "height": '100%',
        },

        'topMenu' : {
            "backgroundColor": "white",
            'width' : '100%',
            'height' : 55,
            'flexDirection' :'row',
            'justifyContent' : 'space-between',
            'alignItems' :'center',
            'paddingVertical' : 5,
            'paddingHorizontal' : 10,
        
        },

        'topLogo' : {

            'fontFamily' : 'Jalnan',
            'color' :'#F15A24',
            'fontSize' : 32,
            
        },

        'scanBtn' : {
            'width' :30,
            'height' :30,
        },
        'scanBtnIcon' : {
            'width' :'100%',
            'height' :'100%',
            
        },

        "profileCard" : {
            'backgroundColor' : 'white',
            'width' : '90%',
            'height' : 190,
            'marginLeft' : 'auto',
            'marginRight' : 'auto',
            'marginTop' : 30,
            'borderRadius' : 20,
            'flexDirection' : 'row',
            'justifyContent' : 'space-around',
            'alignItems' :'center',
            'position' :  'relative',
            'elevation' : 9,
        },

        "profile" : {
            'width' : 100,
            'height' : 130,
            'backgroundColor' : "#d9d9d9",
        },
        "profileTextGroup" : {
            'marginLeft' : -40,
            'marginTop' : -20
        },
       

        'memberName' :{

            'fontFamily' : "Apple SD Gothic Neo",
            'color' :'#383838',
            'fontSize' : 24,
            'fontWeight' : '700',
            'marginBottom':5
        },

        'memberPosition' :{

            'fontFamily' : "Apple SD Gothic Neo",
            'color' :'#707070',
            'fontSize' : 16,
            'fontWeight' : '700',
            'marginBottom':5
        },
        'groupName' :{

            'fontFamily' : "Apple SD Gothic Neo",
            'color' :'#707070',
            'fontSize' : 16,
            'fontWeight' : '700',
            'marginBottom':5
        },
        'department' :{

            'fontFamily' : "Apple SD Gothic Neo",
            'color' :'#707070',
            'fontSize' : 16,
            'fontWeight' : '700'
        },

        'logOutBtn' : {
            'position' : 'absolute',
            'bottom' : 10,
            'right' : 15,
        },

        'logOut' : {
            'fontFamily' : "Apple SD Gothic Neo",
            'color' :'#F15A24',
            'fontSize' : 14,
            'fontWeight' : '700'
        },
        'qrCard' : {
            'backgroundColor' : 'white',
            'width' : '90%',
            'height' : 300,
            'marginLeft' : 'auto',
            'marginRight' : 'auto',
            'marginTop' : 20,
            'borderRadius' : 20,
            'flexDirection' : 'row',
            'justifyContent' : 'space-around',
            'alignItems' :'center',
            'elevation' : 9,
        },
        'bottomMenu' : {
            'width' : '100%',
            'height' : 100,
            'backgroundColor' :'white',
            'borderTopLeftRadius' : 50,
            'borderTopRightRadius' : 50,
            'position' : 'absolute',
            'bottom' : 0,
            'flexDirection' : 'row',
            'alignItems' : 'center',
            'justifyContent': 'space-around',
            'paddingHorizontal' : 30


        },
        'divider': {
            'width': 2,
            'height' : 46,
            'backgroundColor' : "#bfbfbf"

        },

        'costIcon': {
            'width': 44,
            'height' : 44,
            'marginLeft' : 'auto',
            'marginRight' : 'auto',
        },
        'paymentIcon': {
            'width': 44,
            'height' : 44,
            'marginLeft' : 'auto',
            'marginRight' : 'auto',
        },

        'costText' : {
            'fontFamily' : "Apple SD Gothic Neo",
            'color' :'#707070',
            'fontSize' : 16,
            'fontWeight' : '700',
            'marginTop' : 5

        },
        'paymentText' : {
            'fontFamily' : "Apple SD Gothic Neo",
            'color' :'#707070',
            'fontSize' : 16,
            'fontWeight' : '700',
            'marginTop' : 5
        }
  
    });
}
