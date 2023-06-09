import { useState, useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const handleNextGuess = (direction) => () => {
    if (
      (direction === 'lower' && currentGuess < userNumber)
      || (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Don't lie!",
        'You know that this is wrong...',
        [{ text: 'Sorry!', style: 'cancel' }],
      );
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newGuess);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      
      <Card>
        <InstructionText>Higher or lower?</InstructionText>

        <View>
          <PrimaryButton onPress={handleNextGuess('lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={handleNextGuess('greater')}>
            +
          </PrimaryButton>
        </View>
      </Card>

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
