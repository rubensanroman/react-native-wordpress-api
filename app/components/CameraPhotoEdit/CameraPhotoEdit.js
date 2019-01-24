import React from 'react'
import { Image } from 'react-native'
import Styles from './styles'

const CameraPhotoEditComponent = ({ photo }) => (
  <Image
    source={{ uri: photo.uri }}
    style={Styles.image}
  />
)

export default CameraPhotoEditComponent
