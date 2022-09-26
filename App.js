import { StyleSheet, Text, View } from 'react-native'
import NavigateBox from './components/NavigateBox'
export default function App() {
  return (
    <View style={styles.container}>
      <NavigateBox top={280} right={60} />
      <NavigateBox top={280} right={180} />
      <NavigateBox top={400} right={60} />
      <NavigateBox top={400} right={180} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
})
