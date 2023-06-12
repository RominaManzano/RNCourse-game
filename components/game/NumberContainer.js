import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.numberTex}>
      {children}
    </Text>
  </View>
);

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberTex: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: 'open-sans-bold',
  },
});
