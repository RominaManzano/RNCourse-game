import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';

const GameScreen = () => (
  <View style={styles.screen}>
    <Title>
      Opponent's Guess
    </Title>
    {/* GUESS */}
    <View>
      <Text>Higher or lower?</Text>
      {/* BUTTONS */}
    </View>
    <View>
      {/* LOG ROUNDS */}
    </View>
  </View>
);

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 48,
  },
});
