import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from './screens/Home'
import AboutScreen from './screens/About'
import ContactScreen from './screens/Contact'

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-home' size={32} color={tintColor} />
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-contact' size={32} color={tintColor} />
    }
  },
  Contact: {
    screen: ContactScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-mail' size={32} color={tintColor} />
    }
  }
})

export default createAppContainer(TabNavigator)
