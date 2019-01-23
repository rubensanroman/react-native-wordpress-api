import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import Styles from './styles'

const CameraContainer = ({ children }) => (
  <View style={Styles.container}>
    <StatusBar hidden />
    <View style={Styles.header}>
      <Text>Camera Header</Text>
    </View>
    <View style={Styles.main}>
      {children}
    </View>
  </View>
)

export default CameraContainer
