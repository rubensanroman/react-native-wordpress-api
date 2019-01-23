import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Styles from './styles'

const CameraPhotoEditComponent = ({ photo, retakeClickHandlerFunc, continueClickHandlerFunc }) => (
  <View style={Styles.container}>
    <View style={Styles.main}>
      <Image source={{ uri: photo }} style={Styles.image} />
    </View>
    <View style={Styles.footer}>
      <TouchableOpacity
        onPress={retakeClickHandlerFunc}
        style={Styles.button}
      >
        <Ionicons
          name='md-camera'
          size={40}
          style={Styles.buttonIcon}
        />
        <Text>Retake</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={continueClickHandlerFunc}
        style={Styles.button, Styles.buttonContine}
      >
        <Ionicons
          name='md-checkmark'
          size={40}
          style={Styles.buttonIcon}
        />
        <Text style={Styles.buttonText, Styles.buttonText}>Save & Continue</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default CameraPhotoEditComponent
