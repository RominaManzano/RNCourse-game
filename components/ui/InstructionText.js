import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

const InstructionText = ({ children, style }) => (
  <Text style={[styles.text, style]}>
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
