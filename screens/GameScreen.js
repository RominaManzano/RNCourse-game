import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return rndNum;
}

const GameScreen = ({ userName }) => {
  const initialGuess = generateRandomBetween(1, 100, userName);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>
      
      <View>
        <Text>Higher or lower?</Text>
        {/* BUTTONS */}
      </View>
      <View>
        {/* LOG ROUNDS */}
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 48,
  },
});
