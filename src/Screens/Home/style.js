import {StyleSheet} from 'react-native';
import {Colors} from '../../Theme';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: Colors.appColor1,
    borderRadius: 8,
    marginVertical: 16,
  },
  buttonText: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: '#FFF',
  },
});
