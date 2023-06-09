import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const handlePickNumber = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const handleGameOver = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickNumber={handlePickNumber} />;

  if (userNumber) screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;

  if (gameIsOver && userNumber) screen = <GameOverScreen />

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
