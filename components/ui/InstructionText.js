import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

const InstructionText = ({ children }) => (
  <Text style={styles.text}>
    {children}
  </Text>
);

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
