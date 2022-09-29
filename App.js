import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import Home from './screens/Home'
import Notes from './screens/Notes'

export default function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  }

  const Stack = createStackNavigator()
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={initialRouterName='Home'}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Notes' component={Notes} />
      </Stack.Navigator>
    </NavigationContainer>
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
