import { Permissions } from 'expo'

const CameraService = {
  initialize: function (screen) {
    screen.state.hasCameraPermission = false

    this.askForPermission(screen)
  },

  askForPermission: function (screen) {
    Permissions.askAsync(Permissions.CAMERA)
      .then(() => screen.setState({ hasCameraPermission: true }))
  },

  hasPermission: function (screen) {
    return screen.state.hasCameraPermission
  },

  takePhoto: function (screen) {
    if (screen.camera) {
      return screen.camera.takePictureAsync()
        .then(response => response.uri)
    } else {
      console.log('no camera!')
    }
  }
}

export default CameraService
