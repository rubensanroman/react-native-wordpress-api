import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Styles from './styles'

const CameraPhotoEditActionButtonsComponent = ({ onPressRetakeHandler, onPressContinueHandler }) => (
  <View style={Styles.buttonsContainer}>
    <TouchableOpacity
      onPress={onPressRetakeHandler}
      style={[Styles.button, Styles.buttonRetake]}
    >
      <Ionicons
        name='md-camera'
        style={Styles.buttonIcon}
      />
      <Text style={Styles.buttonLabel}>Retake</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={onPressContinueHandler}
      style={[Styles.button, Styles.buttonContinue]}
    >
      <Ionicons
        name='md-heart'
        style={Styles.buttonIcon}
      />
      <Text style={Styles.buttonLabel}>Love it</Text>
    </TouchableOpacity>
  </View>
)

export default CameraPhotoEditActionButtonsComponent
