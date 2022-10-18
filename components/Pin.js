import { Text, View, Image, StyleSheet } from 'react-native'
import GetImageRatio from '../hooks/useImageRatio'

export default function Pin({image, title}) {

  const ratio = GetImageRatio(image)

  return (
    <View style={styles.note}>
      <Image source={{uri: image}} style={[styles.image, {aspectRatio: ratio}]} />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  note: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#171C26',
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
    fontSize: 18, 
    fontWeight: 'bold',
    marginTop: 10
  }
})