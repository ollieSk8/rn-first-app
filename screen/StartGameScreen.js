import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/color'
function StartGameScreen({ onConfirm }) {
  const [enterNumber, setEnterNumber] = useState('')
  //bind inputText
  const onChangeNumber = (text) => {
    setEnterNumber(text)
  }
  //reset number
  const resetNumberHandler = () => {
    setEnterNumber('')
  }
  //confirm number
  const confirmNumberHandler = () => {
    const InputNumber = parseInt(enterNumber)
    if (isNaN(InputNumber) || InputNumber <= 0 || InputNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'The Number has to be Number between 1 and 99',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: resetNumberHandler,
          },
        ],
      )
    }
    onConfirm(InputNumber)
  }
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enterNumber}
          onChangeText={onChangeNumber}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmNumberHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { wdith: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    width: 50,
    height: 50,
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
})
export default StartGameScreen
