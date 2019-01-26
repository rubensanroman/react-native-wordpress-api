import React from 'react'
import { Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import CameraService from '../../services/Camera'
import PermissionsService from '../../services/Permissions'
import CameraContainer from '../../containers/Camera'
import CameraPhotoTakeComponent from '../../components/CameraPhotoTake'
import CameraPhotoTakeActionButtonsComponent from '../../components/CameraPhotoTake/ActionButtons'
import CameraPhotoStepsComponent from '../../components/CameraPhotoSteps'

class CameraPhotoTakeScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      cameraHasPermission: false,
      isLoading: false
    }
  }

  async componentDidMount () {
    await PermissionsService.askOne('camera')

    this.setState({ cameraHasPermission: true })
  }

  async handleOnPressPhotoTake () {
    this.setState({ isLoading: true })

    let photo = await CameraService.photoTakeOne(this)
    this.props.navigation.navigate('CAMERA_PHOTO_EDIT', { photo })

    this.setState({ isLoading: false })
  }

  render () {
    return (
      <CameraContainer
        headerComponent={<CameraPhotoStepsComponent active={0} />}
        footerComponent={<CameraPhotoTakeActionButtonsComponent onPressPhotoTakeHandler={this.handleOnPressPhotoTake.bind(this)} />}
      >
        { this.state.cameraHasPermission ? (
          <CameraPhotoTakeComponent
            screen={this}
            type='front'
          />
        ) : (
          <Text>No has dado permiso para usar la cámara</Text>
        )}
      </CameraContainer>
    )
  }
}

export default CameraPhotoTakeScreen
