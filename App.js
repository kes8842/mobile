/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Signup from './pages/auth/signup/signup';
import Qrscan from './pages/qr/qrscan/qrscan';
import Qrcode from './pages/qr/qrcode/qrcode';
import EventList from './pages/event/list/list';
import Payment from './pages/cost/payment/payment';
import { View } from 'react-native'
const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Signup}
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
        />
        <Stack.Screen
          name="Qrscan"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={Qrscan}
        />
        <Stack.Screen
          name="QrCode"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={Qrcode}
        />
        <Stack.Screen
          name="EventList"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={EventList}
        />
           <Stack.Screen
          name="Payment"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={Payment}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
