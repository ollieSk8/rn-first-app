import { useState, useEffect, useMemo } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}
let minBoundary = 1
let maxBoundary = 100
function GameScreen({ userNumber, onGameOver }) {
  const initalNumber = useMemo(
    () => generateRandomBetween(minBoundary, maxBoundary, userNumber),
    [userNumber],
  )
  const [guessNumber, setGuessNumber] = useState(initalNumber)

  useEffect(() => {
    if (guessNumber === userNumber) {
      onGameOver()
    }
  }, [guessNumber, userNumber, onGameOver])

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === 'lower' && guessNumber < userNumber) ||
      (direction === 'greater' && guessNumber > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ])
      return
    }

    if (direction === 'lower') {
      maxBoundary = guessNumber
    } else {
      minBoundary = guessNumber + 1
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      guessNumber,
    )
    setGuessNumber(newRndNumber)
  }
  return (
    <View style={styles.rootScreen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessNumber}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            +
          </PrimaryButton>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 24,
  },
})
export default GameScreen
