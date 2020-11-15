/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SafeAreaView,
  ScrollView,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {QRScanner, Home, ProductDetail} from './src/Screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="QRScannerScreen"
          component={QRScanner}
          options={{title: 'QR Scanner'}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{title: 'Product Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
