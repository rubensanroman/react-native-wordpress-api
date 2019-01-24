import React from 'react'
import { StatusBar, View } from 'react-native'
import Styles from './styles'

const CameraContainer = ({ children, headerComponent, footerComponent }) => (
  <View style={Styles.container}>
    <StatusBar hidden />
    <View style={Styles.header}>
      {headerComponent}
    </View>
    <View style={Styles.main}>
      {children}
    </View>
    <View style={Styles.footer}>
      {footerComponent}
    </View>
  </View>
)

export default CameraContainer
