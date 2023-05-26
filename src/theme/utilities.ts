import { StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../utils/constans';

const utilitiesStyles = StyleSheet.create({
  button: {
    backgroundColor: MAIN_COLOR,
    alignSelf: 'center',
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
});

export default utilitiesStyles;
