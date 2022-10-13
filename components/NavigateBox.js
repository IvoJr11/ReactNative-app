import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

export default function NavigateBox({ handlePress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handlePress}  
    >
      <Text style={{color: '#fff', fontWeight: 'bold'}}>LOGO</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    margin: 20,
    borderRadius: 15,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})