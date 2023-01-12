import { useColorScheme } from 'react-native'
// import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home'
import { themes } from './theme'
import ThemeContext from './hooks/themeContext'
import PinScreen from './screens/PinScreen'
import SearchScreen from './screens/SearchScreen'
import Ionicon from "react-native-vector-icons/Ionicons"

const initialRouterName = 'Home'

const icon = (name, color, size) => {
  return <Ionicon name={name} color={color} size={size} />
}

export default function App() {
  // const Stack = createStackNavigator()
  const Tab = createBottomTabNavigator()
  const colorScheme = useColorScheme()

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colorScheme === 'dark' ? 'rgb(14, 18, 26)' : '#ECEDF1',
      border: 'transparent',
      text: colorScheme === 'dark' ? 'white' : 'black',
      card: colorScheme === 'dark' ? '#171C26' : '#ECEDF1',
      primary: colorScheme === 'dark' ? 'white' : 'black'
    }
  }

  return (
    <ThemeContext.Provider value={themes(colorScheme)}>
      <NavigationContainer theme={theme}>
        <Tab.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerTitleAlign: 'center'
          }}
        >
          <Tab.Screen options={{
            title: 'Browse',
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => icon('home', color, size)
          }}
            name='Home'
            component={Home}
          />
          <Tab.Screen options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => icon('search', color, size)  
          }}
            name='Search'
            component={SearchScreen}
          />
          <Tab.Screen options={{tabBarItemStyle: {display: 'none'} , tabBarShowLabel: false}} name='PinScreen' component={PinScreen} />
        </Tab.Navigator>
        <StatusBar></StatusBar>
      </NavigationContainer>
    </ThemeContext.Provider>
  )
}
