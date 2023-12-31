import { Platform, Text, StyleSheet } from 'react-native';

const Title = ({ children }) => (
  <Text style={styles.title}>
    {children}
  </Text>
);

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});
