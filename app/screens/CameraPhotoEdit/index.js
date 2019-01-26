import React from 'react'
import { Animated, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import CameraContainer from '../../containers/Camera'
import CameraPhotoEditComponent from '../../components/CameraPhotoEdit'
import CameraPhotoEditActionButtonsComponent from '../../components/CameraPhotoEdit/ActionButtons'
import CameraPhotoStepsComponent from '../../components/CameraPhotoSteps'

class CameraPhotoEditScreen extends React.Component {
  constructor (props) {
    super(props)
  }

  doFakeFlashAnimation () {
    Animated.timing(
      this.animation, {
        toValue: 0,
        duration: 700
      }
    ).start()
  }

  handleOnPressContinue () {
    this.props.navigation.navigate('CAMERA_PHOTO_PUBLISH')
  }

  handleOnPressRetake () {
    this.props.navigation.navigate('CAMERA_PHOTO_TAKE')
  }

  render () {
    let photo = this.props.navigation.getParam('photo', '')

    this.animation = new Animated.Value(1)
    this.doFakeFlashAnimation()

    return (
      <CameraContainer
        style={{ opacity: this.animation }}
        headerComponent={<CameraPhotoStepsComponent active={1} />}
        footerComponent={
          <CameraPhotoEditActionButtonsComponent
            onPressContinueHandler={this.handleOnPressContinue.bind(this)}
            onPressRetakeHandler={this.handleOnPressRetake.bind(this)}
          />
        }
      >
        <Animated.View style={{
          backgroundColor: 'white',
          bottom: 0,
          left: 0,
          opacity: this.animation,
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 3000
        }} />
        <CameraPhotoEditComponent photo={photo} />
      </CameraContainer>
    )
  }
}

export default CameraPhotoEditScreen
