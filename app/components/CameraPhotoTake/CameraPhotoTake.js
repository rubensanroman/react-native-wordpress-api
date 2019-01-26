import React from 'react'
import { Camera } from 'expo'
import Styles from './styles'

const CameraPhotoTakeComponent = ({ screen, type }) => (
  <Camera
    ref={(ref) => { screen.camera = ref }}
    style={Styles.camera}
    type={type === 'front' ? Camera.Constants.Type.front : Camera.Constants.Type.back}
  />
)

export default CameraPhotoTakeComponent
