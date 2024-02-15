import React from 'react'
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

const ListItem = ({ title, id, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(id)}>
      <View style={styles.listContainer}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
const CourseList = (props) => {
  return (
    <FlatList
      data={props.datas}
      renderItem={(renderItem) => (
        <ListItem
          title={renderItem.item.value}
          id={renderItem.item.id}
          onDelete={props.onDelete}
        />
      )}
      keyExtractor={(item) => item.id}
    ></FlatList>
  )
}
const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    backgroundColor: '#ccc',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
})
export default CourseList
