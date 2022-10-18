import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import Home from './screens/Home'
import Notes from './screens/Notes'

export default function App() {

  const theme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(14, 18, 26)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    }
  }

  const Stack = createStackNavigator()
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={initialRouterName='Home'}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Notes' component={Notes} />
      </Stack.Navigator>
      <StatusBar></StatusBar>
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
