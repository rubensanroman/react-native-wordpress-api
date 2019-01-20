import React from 'react'
import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'
import CameraScreen from '../screens/Camera'

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
  CAMERA: {
    screen: CameraScreen,
    navigationOptions: {
      tabBarVisible: false
    }
  }
}
