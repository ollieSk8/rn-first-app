import { View, Image, Text, StyleSheet } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/color'
import PrimaryButton from '../components/ui/PrimaryButton'
const GameOverScreen = ({ roundsNumber, guessNumber, restartHandler }) => {
  return (
    <View style={styles.rootScreen}>
      <Title>Game is Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        ></Image>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{guessNumber}</Text>.
      </Text>
      <PrimaryButton onPress={restartHandler}>Start New Game</PrimaryButton>
    </View>
  )
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
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
})
export default GameOverScreen
