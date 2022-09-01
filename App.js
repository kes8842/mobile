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
import Cost from './pages/cost/cost/Cost';
import CostList from './pages/cost/costList/CostList';
import Payment from './pages/payment/payment/Payment';
import PaymentList from './pages/payment/paymentLlst/PaymentList';
import Access from './pages/auth/access/Access'
import SplashScreen from './pages/auth/splash/SplashScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
          name="Signup"
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
          name="Cost"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={Cost}
        />
        <Stack.Screen
          name="CostList"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={CostList}
        />
        <Stack.Screen
          name="Payment"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={Payment}
        />
        <Stack.Screen
          name="PaymentList"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={PaymentList}
        />
        <Stack.Screen
          name="Access"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={Access}
        />
        <Stack.Screen
          name="Splash"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={SplashScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
