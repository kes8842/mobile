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
import { View } from 'react-native'
const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Qrscan'>
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
          name="qrCode"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={Qrcode}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
