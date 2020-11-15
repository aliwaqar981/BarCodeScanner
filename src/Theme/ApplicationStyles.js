import {StyleSheet} from 'react-native';
import {totalSize, height, width} from 'react-native-dimension';
import {Colors, FontSize} from '.';

export default StyleSheet.create({
  bgContainer: {
    flex: 1,
    height: null,
    width: null,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.appBgColor1,
  },
  mainContainerRed: {
    flex: 1,
    backgroundColor: Colors.appColor1,
  },
  rowContainer: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'flex-start',
    paddingTop: 4,
  },
  h1: {
    fontSize: FontSize.h1,
    color: Colors.appBgColor1,
  },
  h2: {
    fontSize: FontSize.h2,
    color: Colors.appBgColor1,
  },
  h3: {
    fontSize: FontSize.h3,
    color: Colors.appBgColor1,
  },
  h4: {
    fontSize: FontSize.h4,
    color: Colors.appBgColor1,
  },
  h5: {
    fontSize: FontSize.h5,
    color: Colors.appBgColor1,
    fontWeight: 'bold',
  },
});
