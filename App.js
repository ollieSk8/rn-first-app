import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import StartGameScreen from './screen/StartGameScreen'
import GameScreen from './screen/GameScreen'
import GameOverScreen from './screen/GameOverScreen'
export default function App() {
  const [numberPicked, setNumberPicked] = useState()
  const [isGameOver, setIsGameOver] = useState(true)
  const toJumpPage = (number) => {
    setNumberPicked(number)
    setIsGameOver(false)
  }
  const onGameOverHandler = () => {
    setIsGameOver(true)
  }
  let screen = <StartGameScreen onConfirm={toJumpPage} />
  if (numberPicked) {
    screen = (
      <GameScreen userNumber={numberPicked} onGameOver={onGameOverHandler} />
    )
  }
  if (isGameOver && numberPicked) {
    screen = <GameOverScreen></GameOverScreen>
  }
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
