import React from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import NavigatorConfig from './config/Navigator'

const Navigator = createBottomTabNavigator(NavigatorConfig)

export default createAppContainer(Navigator)
