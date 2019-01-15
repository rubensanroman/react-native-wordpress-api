import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import NavigatorConfig from './config/Navigator'

const TabNavigator = createBottomTabNavigator(NavigatorConfig)

export default createAppContainer(TabNavigator)
