import React from 'react'
import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'
import CameraPhotoTakeScreen from '../screens/CameraPhotoTake'
import CameraPhotoEditScreen from '../screens/CameraPhotoEdit'

module.exports = {
  CAMERA_PHOTO_TAKE: {
    screen: CameraPhotoTakeScreen,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  CAMERA_PHOTO_EDIT: {
    screen: CameraPhotoEditScreen,
    navigationOptions: {
      tabBarVisible: false
    }
  },
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
  }
}
