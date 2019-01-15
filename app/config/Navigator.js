import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from '../screens/Home'
import AboutScreen from '../screens/About'
import ContactScreen from '../screens/Contact'

module.exports = {
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
}
