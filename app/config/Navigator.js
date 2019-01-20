import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from '../screens/Home'
import AboutScreen from '../screens/About'
import ContactScreen from '../screens/Contact'
import LoginScreen from '../screens/Login'

module.exports = {
  LOGIN: {
    screen: LoginScreen,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  HOME: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  ABOUT: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-contact' size={32} color={tintColor} />
    }
  },
  CONTACT: {
    screen: ContactScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-mail' size={32} color={tintColor} />
    }
  }
}
