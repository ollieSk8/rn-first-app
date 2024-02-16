import React from 'react'
import { View, FlatList, StyleSheet, Text, Pressable } from 'react-native'

const ListItem = ({ title, id, onDelete }) => {
  return (
    <View style={styles.ListItem}>
      <Pressable
        onPress={() => onDelete(id)}
        android_ripple={{ color: '#dddddd' }}
      >
        <Text style={styles.ListItemText}>{title}</Text>
      </Pressable>
    </View>
  )
}
const CourseList = (props) => {
  return (
    <View style={styles.container}>
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
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  ListItem: {
    marginVertical: 10,
    backgroundColor: '#5e0acc',
    borderRadius: 10,
  },
  ListItemText: {
    color: '#fff',
    padding: 10,
  },
})
export default CourseList
