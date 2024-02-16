import React, { useState } from 'react'
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native'
const CourseInput = (props) => {
  const [goalCourse, setGoalCourse] = useState('')
  const goalCourseChange = (text) => {
    setGoalCourse(text)
  }

  const buttonEnterHander = () => {
    if (goalCourse.trim() !== '') {
      props.onConfirm(goalCourse)
    }
    setGoalCourse('')
  }
  const buttonCancel = () => {
    props.buttonCancelHander()
    setGoalCourse('')
  }
  return (
    <Modal visible={props.modalVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="enter a course here"
          value={goalCourse}
          onChangeText={goalCourseChange}
        />
        <View style={styles.btnGroup}>
          <View style={styles.button}>
            <Button
              title="add Course"
              onPress={buttonEnterHander}
              color={'#5e0acc'}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={buttonCancel} color={'#5e0acc'} />
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    padding: 16,
  },
  inputText: {
    height: 40,
    lineHeight: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  btnGroup: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 130,
    marginHorizontal: 8,
  },
})
export default CourseInput
