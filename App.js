import * as React from 'react';
import 'react-native-gesture-handler'
import { RootNavigation } from './src/navigation/RootNavigation'
import { NativeBaseProvider, Text, Box } from "native-base";
import { View, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import { store,persistor } from './src/store/store'
import { Provider } from 'react-redux'
import {colors}  from './src/assets/colors/colors'
import { PersistGate } from 'redux-persist/integration/react';



const App = () => {
  return (<>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NativeBaseProvider>
        <StatusBar

          backgroundColor={colors.mainGrey}
          barStyle="light-content"/>
        <RootNavigation />

      </NativeBaseProvider>
      </PersistGate>
    </Provider>
  </>
  )
}
export default App

const styles = StyleSheet.create({})


