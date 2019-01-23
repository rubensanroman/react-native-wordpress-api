import React from 'react'
import { StatusBar, View } from 'react-native'
import Styles from './styles'

const CameraContainer = ({ children, StepsComponent, ActionsComponent }) => (
  <View style={Styles.container}>
    <StatusBar hidden />
    <View style={Styles.header}>
      <stepsComponent />
    </View>
    <View style={Styles.main}>
      {children}
    </View>
    <View style={Styles.footer}>
      <actionsComponent />
    </View>
  </View>
)

export default CameraContainer
