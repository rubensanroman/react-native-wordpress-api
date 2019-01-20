import React from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import NavigatorConfig from './config/Navigator'
import ApiAuthService from './services/ApiAuth'

const Navigator = createBottomTabNavigator(NavigatorConfig)

export default createAppContainer(Navigator)
