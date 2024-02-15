import { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import CourseInput from './components/CourseInput'
import CourseList from './components/CourseList'
export default function App() {
  const [courseList, setCourseList] = useState([])
  const onConfirmHandler = (goalCourse) => {
    setCourseList((list) => {
      return [
        ...list,
        {
          id: Math.random().toString(),
          value: goalCourse,
        },
      ]
    })
  }
  const onDeleteHandler = (id) => {
    setCourseList((list) => {
      return list.filter((item) => item.id !== id)
    })
  }
  return (
    <View style={styles.container}>
      <CourseInput onConfirm={onConfirmHandler} />
      <CourseList datas={courseList} onDelete={onDeleteHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#fff',
  },
})
