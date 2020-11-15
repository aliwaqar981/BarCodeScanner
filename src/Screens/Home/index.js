/* React Imports */
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

/* Styles */
import {styles} from './style';

const Home = ({navigation}) => {
  return (
    <View style={styles.rootContainer}>
      <Text>Scan QR Code to get Product Details</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('QRScannerScreen')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Scan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
