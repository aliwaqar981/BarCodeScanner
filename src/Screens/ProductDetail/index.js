import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {styles} from './style';
import {AppStyles, Colors} from '../../Theme';
import {Image, ListItem} from 'react-native-elements';
import {fetchProductDetails} from '../../Backend/api';
// import ImageSlider from 'react-native-image-slider';
import Carousel from 'react-native-snap-carousel';
import EmptyContainer from './EmptyContainer';
import {width} from 'react-native-dimension';

const ProductDetail = ({route}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [productInfo, setProductInfo] = useState('');
  const [loading, setLoading] = useState(true);

  const clickEventListener = () => {
    Alert.alert('Success', 'Product has beed added to cart');
  };

  useEffect(() => {
    const {barCode} = route.params;
    fetchProductDetails(barCode, onRecieveDetails);
  }, []);

  // **************** Handler to recieve response from api *********************** //
  const onRecieveDetails = (res) => {
    if (res) {
      if (res.products && res.products.length > 0)
        setProductInfo(res.products[0]);
    } else {
      Alert.alert('Error!', 'Something went wrong');
    }
    setLoading(false);
  };

  const _renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: '#FFF',
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <Image
          source={{uri: item}}
          style={{width: width(100), height: 250}}
          resizeMode="cover"
        />
      </View>
    );
  };

  const renderStores = ({item}) => {
    return (
      <ListItem bottomDivider containerStyle={{borderRadius: 10}}>
        <ListItem.Content>
          <ListItem.Title numberOfLines={1}>{item.store_name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Subtitle
          style={{
            color: Colors.appColor1,
          }}>{`${item.currency_symbol}${item.store_price}`}</ListItem.Subtitle>
      </ListItem>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color={Colors.appColor1} size="large" />
      ) : productInfo ? (
        <ScrollView>
          <Carousel
            layout={'default'}
            data={productInfo.images}
            sliderWidth={width(100)}
            itemWidth={width(86)}
            renderItem={_renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
          />
          <View
            style={{
              flex: 1,
              paddingHorizontal: 24,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 16,
            }}>
            <View style={AppStyles.rowContainer}>
              <Text style={AppStyles.h5}>Product Name: </Text>
              <Text>{productInfo.product_name} </Text>
            </View>

            <FlatList
              data={productInfo.stores}
              keyExtractor={({index}) => index}
              renderItem={renderStores}
              style={{width: width(86), paddingTop: 8}}
            />
          </View>

          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={clickEventListener}>
              <Text style={styles.shareButtonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <EmptyContainer />
      )}
    </View>
  );
};

export default ProductDetail;
