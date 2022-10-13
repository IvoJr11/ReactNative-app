import { useNavigation } from '@react-navigation/native'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import NavigateBox from '../components/NavigateBox'

export default function Home() {

  const navigator = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.boxes}>
        <NavigateBox handlePress={() => navigator.navigate('Notes')} />
        <NavigateBox />
        <NavigateBox />
        <NavigateBox />
      </View>
      {/* <NavigateBox top={280} right={60} handlePress={() => navigator.navigate('Notes')} />
      <NavigateBox top={280} right={180} />
      <NavigateBox top={400} right={60} />
      <NavigateBox top={400} right={180} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height
  },
  boxes: {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 'auto',
    height: 'auto'
  }
})