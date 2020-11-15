/* React Imports */
import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
/* External Components */
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

/* Styles */
import {styles} from './style';

const QRScanner = ({navigation}) => {
  const [statusText, setStatusText] = useState('Scanning...');

  const onSuccess = (e) => {
    setStatusText('Okay Got it');
    console.log('See console', e);
    // alert(e.data);
    navigation.navigate('ProductDetail', {barCode: e.data});
    // Linking.openURL(e.data).catch((err) =>
    //   console.error('An error occured', err),
    // );
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.off}
      topContent={
        <Text style={styles.centerText}>
          Fetch Product Details from Monsters
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>{statusText}</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default QRScanner;
