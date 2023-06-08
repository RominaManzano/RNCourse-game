import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const handlePickNumber = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  const screen = userNumber ? <GameScreen /> : <StartGameScreen onPickNumber={handlePickNumber} />;

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={['#4E0329', '#DDB52F']}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
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
