import React from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import ScreensConfig from './config/Screens'
import ApiAuthService from './services/ApiAuth'

const Navigator = createBottomTabNavigator(ScreensConfig)

export default createAppContainer(Navigator)
