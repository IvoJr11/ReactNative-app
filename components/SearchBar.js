import { useContext, useEffect, useState } from "react"
import { View, StyleSheet, TextInput, Keyboard } from "react-native"
import ThemeContext from "../hooks/themeContext"
import Ionicon from "react-native-vector-icons/Ionicons"


export default function SearchBar() {
  const theme = useContext(ThemeContext)
  const [text, setText] = useState('')
  const [focus, isFocus] = useState(false)

  const handleFocus = () => {
    isFocus(!focus)
  }

  const handleDismiss = () => {
    Keyboard.dismiss()
    setText('')
    isFocus(!focus)
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginTop: 10,
        width: focus ? '70%' : '80%',
        backgroundColor: theme.pinBackground,
        alignSelf: 'center',
        alignItems: 'center'
      }}
    >
      {
        focus ?
        ''
        :
        <Ionicon name='search' size={20} color='gray' style={{ marginRight: 4 }} />
      }
      <TextInput
        style={{
          width:'100%',
          color: theme.textPrimary,
        }}
        placeholderTextColor='gray'
        placeholder='Search'
        value={text}
        onChangeText={setText}
        onFocus={handleFocus}
        clearButtonMode='while-editing'
      />
      {
        focus ?
        <Ionicon onPress={handleDismiss} name='close' size={20} color='gray' style={{position: 'absolute', right: -25}} />
        : ''
      }
    </View>
  )
}
