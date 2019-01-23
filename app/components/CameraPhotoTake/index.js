import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Camera } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import Styles from './styles'

const CameraPhotoTakeComponent = ({ screen, type, takePhotoFunc }) => (
  <View style={Styles.container}>
    <View style={Styles.main}>
      <Camera
        ref={(ref) => { screen.camera = ref }}
        style={Styles.camera}
        type={type === 'front' ? Camera.Constants.Type.front : Camera.Constants.Type.back}
      />
    </View>
    <View style={Styles.footer}>
      <TouchableOpacity
        onPress={takePhotoFunc}
        style={Styles.takePhotoButton}
      >
        <Ionicons
          name='md-radio-button-on'
          style={Styles.takePhotoIcon}
        />
      </TouchableOpacity>
    </View>
  </View>
)

export default CameraPhotoTakeComponent
