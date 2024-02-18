import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useState, useEffect, useCallback } from 'react'
import StartGameScreen from './screen/StartGameScreen'
import GameScreen from './screen/GameScreen'
import GameOverScreen from './screen/GameOverScreen'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
SplashScreen.preventAutoHideAsync()
export default function App() {
  const [numberPicked, setNumberPicked] = useState()
  const [isGameOver, setIsGameOver] = useState(true)
  const [appIsReady, setAppIsReady] = useState(false)

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

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        })
      } catch (e) {
        //console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <LinearGradient
      colors={['#4e0329', '#ddb52f']}
      style={styles.rootScreen}
      onLayout={onLayoutRootView}
    >
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
