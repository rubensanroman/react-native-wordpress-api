import React from 'react'
import { withNavigation } from 'react-navigation'
import CameraContainer from '../../containers/Camera'
import CameraPhotoEditComponent from '../../components/CameraPhotoEdit'

class CameraPhotoEditScreen extends React.Component {
  retakeClickHandler () {
    console.log('retake! boton!')
    this.props.navigation.navigate('CAMERA_PHOTO_TAKE')
  }

  continueClickHandler () {
    console.log('continue! boton!')
    this.props.navigation.navigate('CAMERA_PHOTO_TAKE')
  }

  render () {
    const photo = this.props.navigation.getParam('photo', '')

    return (
      <CameraContainer>
        <CameraPhotoEditComponent
          photo={photo}
          retakeClickHandlerFunc={this.retakeClickHandler.bind(this)}
          continueClickHandlerFunc={this.continueClickHandler.bind(this)}
        />
      </CameraContainer>
    )
  }
}

export default CameraPhotoEditScreen
