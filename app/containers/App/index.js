import React from 'react'
import { StatusBar, View } from 'react-native'
import Styles from './styles'

const AppContainer = ({ children }) => (
  <View style={Styles.container}>
    <StatusBar hidden />
    {children}
  </View>
)

export default AppContainer
