import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../component/auth/Login';
import {Signup} from '../component/auth/Signup';
import {Example} from '../screens/Experiment';
import Home from '../component/Genset/Home';
import SplashScreen from '../component/auth/SplashScreen';

import { createDrawerNavigator  } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Auth() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />

    </Stack.Navigator>
  );
}

const APP = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen options={{ headerShown: false }} name="Home" component={Home} />
    </Drawer.Navigator>
  );
};



export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
  
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="APP"
          component={APP}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
