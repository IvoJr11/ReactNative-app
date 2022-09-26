import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

export default function NavigateBox({ right, top }) {
  return (
    <TouchableOpacity style={[style.container, {right: right, top: top}]} activeOpacity={1}>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>LOGO</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#000000',
    margin: 20,
    borderRadius: 15,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})