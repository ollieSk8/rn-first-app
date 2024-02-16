import { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import CourseInput from './components/CourseInput'
import CourseList from './components/CourseList'
import { StatusBar } from 'expo-status-bar'
export default function App() {
  const [courseList, setCourseList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const showModalOpen = () => {
    setModalVisible(true)
  }

  const showModalHidden = () => {
    setModalVisible(false)
  }
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
    showModalHidden()
  }
  const onDeleteHandler = (id) => {
    setCourseList((list) => {
      return list.filter((item) => item.id !== id)
    })
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          color={'#5e0acc'}
          title="add goal course"
          onPress={showModalOpen}
        />
        <CourseInput
          onConfirm={onConfirmHandler}
          modalVisible={modalVisible}
          buttonCancelHander={showModalHidden}
        />
        <CourseList datas={courseList} onDelete={onDeleteHandler} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
})
