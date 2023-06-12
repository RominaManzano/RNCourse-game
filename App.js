import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const handlePickNumber = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const handleGameOver = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  const handleStartNewGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let screen = <StartGameScreen onPickNumber={handlePickNumber} />;

  if (userNumber) screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;

  if (gameIsOver && userNumber) screen = (
    <GameOverScreen
      roundsNumber={guessRounds}
      userNumber={userNumber}
      onStartNewGame={handleStartNewGame}
    />
  );

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
