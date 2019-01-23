import React from 'react'
import { Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import CameraService from '../../services/Camera'
import CameraContainer from '../../containers/Camera'
import CameraPhotoTakeComponent from '../../components/Camera/PhotoTake'

class CameraPhotoTakeScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    CameraService.initialize(this)
  }

  async takePhoto () {
    let photo = await CameraService.takePhoto(this)

    this.props.navigation.navigate('CAMERA_PHOTO_EDIT', { photo })
  }

  refresh () {
    console.log('volvió!')
  }

  render () {
    if (CameraService.hasPermission(this)) {
      return (
        <CameraContainer>
          <CameraPhotoTakeComponent
            screen={this}
            type='front'
            takePhotoFunc={this.takePhoto.bind(this)}
          />
        </CameraContainer>
      )
    } else {
      return <Text>No has dado permiso para usar la cámara</Text>
    }
  }
}

export default CameraPhotoTakeScreen
