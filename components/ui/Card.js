import { View, StyleSheet } from 'react-native'
import Colors from '../../constants/color'
function Card({ children }) {
  return <View style={styles.card}>{children}</View>
}
const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
})
export default Card
