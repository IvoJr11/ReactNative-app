import { useContext } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import GetImageRatio from '../hooks/useImageRatio'
import ThemeContext from '../hooks/themeContext'
import { useNavigation } from '@react-navigation/native'

export default function Pin({image, title}) {
  const navigator = useNavigation()
  const theme = useContext(ThemeContext)
  const ratio = GetImageRatio(image)

  const handlePress = () => {
    navigator.navigate('PinScreen')
  }

  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePress} style={[styles.note, {backgroundColor: theme.pinBackground}]}>
      <Image source={{uri: image}} style={[styles.image, {aspectRatio: ratio}]} />
      <Text style={[styles.title, {color: theme.textPrimary}]} numberOfLines={3}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  note: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  image: {
    width: '100%',
    borderRadius: 15
  },
  title: {
    color: '#fff',
    fontSize: 12, 
    marginTop: 10,
    marginLeft: 5
  }
})