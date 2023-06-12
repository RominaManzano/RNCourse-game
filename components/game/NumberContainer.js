import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.numberTex}>
      {children}
    </Text>
  </View>
);

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberTex: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: 'open-sans-bold',
  },
});
