import React from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import ScreensConfig from './config/Screens'

const Navigator = createBottomTabNavigator(ScreensConfig)

export default createAppContainer(Navigator)
