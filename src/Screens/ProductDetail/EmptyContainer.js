import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements';
import {styles} from './style';
const EmptyContainer = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        resizeMode="contain"
        PlaceholderContent={<ActivityIndicator size="small" color="#00BFFF" />}
        style={styles.placeholderImage}
        source={{
          uri:
            'https://svgs.co/templates/default-new/images/no-product-found.png',
        }}
      />
    </View>
  );
};

export default EmptyContainer;
