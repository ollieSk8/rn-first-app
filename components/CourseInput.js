import React, { useState } from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'
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
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="enter a course here"
          value={goalCourse}
          onChangeText={(text) => goalCourseChange(text)}
        />
        <Button title="add Course" onPress={buttonEnterHander} />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputText: {
    width: '80%',
  },
})
export default CourseInput
