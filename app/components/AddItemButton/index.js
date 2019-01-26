import React from 'react'
import { TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Styles from './styles'

const AddItemButtonComponent = ({ onPressHandlerFunc }) => (
  <TouchableHighlight
    onPress={onPressHandlerFunc}
    style={Styles.addItemButton}
  >
    <Ionicons
      name='md-camera'
      size={40}
      style={Styles.icon}
    />
  </TouchableHighlight>
)

export default AddItemButtonComponent
