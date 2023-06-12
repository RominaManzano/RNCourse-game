import { View, Image, StyleSheet, Text } from 'react-native';

import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

const GameOverScreen = () => (
  <View style={styles.rootContainer}>
    <Title>GAME OVER!</Title>

    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require('../assets/images/success.png')}
      />
    </View>

    <View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>X</Text> runs to guess the number <Text style={styles.highlight}>Y</Text>.
      </Text>
    </View>

    <PrimaryButton>
      Start New Game
    </PrimaryButton>
  </View>
);

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 360,
    height: 360,
    borderRadius: 180,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
