import { Text, StyleSheet } from 'react-native'
function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}
const styles = StyleSheet.create({
  instructionText: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'open-sans',
  },
})
export default InstructionText
