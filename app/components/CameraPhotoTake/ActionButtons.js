import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Styles from './styles'

const CameraPhotoTakeActionButtonsComponent = ({ onPressPhotoTakeHandler }) => (
  <TouchableOpacity
    onPress={onPressPhotoTakeHandler}
    style={Styles.buttonContainer}
  >
    <Ionicons
      name='md-radio-button-on'
      style={Styles.buttonIcon}
    />
  </TouchableOpacity>
)

export default CameraPhotoTakeActionButtonsComponent
