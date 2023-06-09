import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';

import Card from '../components/ui/Card';
import Colors from '../constants/colors';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

const StartGameScreen = ({
  onPickNumber,
}) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const handleNumberInput = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const handleReset = () => {
    setEnteredNumber('');
  };

  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'The entered value has to be a number between 1 and 99',
        [{
          text: 'OK',
          style: 'destructive',
          onPress: handleReset,
        }],
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>

      <Card>
        <InstructionText>
          Enter a number
        </InstructionText>

        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={handleNumberInput}
          value={enteredNumber}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleReset}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleConfirm}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});