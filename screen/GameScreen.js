import { useState, useEffect, useMemo } from 'react'
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from '../components/game/GuessLogItem'
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
  const [roundLog, setRoundLog] = useState([initalNumber])
  const guessRoundsListLength = roundLog.length
  useEffect(() => {
    if (guessNumber === userNumber) {
      onGameOver(guessRoundsListLength)
    }
  }, [guessNumber, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])
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
    setRoundLog((prevLog) => [newRndNumber, ...prevLog])
  }

  return (
    <View style={styles.rootScreen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessNumber}</NumberContainer>
      <Card>
        <InstructionText style={styles.InstructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.btnGroup}>
          <View style={styles.btn}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="remove" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.btn}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="add" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <FlatList
        data={roundLog}
        renderItem={(itemData) => (
          <GuessLogItem
            roundNumber={guessRoundsListLength - itemData.index}
            guess={itemData.item}
          >
            {itemData.item}
          </GuessLogItem>
        )}
        keyExtractor={(item) => item}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 24,
  },
  btnGroup: {
    flexDirection: 'row',
  },
  InstructionText: {
    marginBottom: 24,
  },
  btn: {
    flex: 1,
    marginVertical: 8,
  },
})
export default GameScreen
