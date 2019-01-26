import CameraPhotoTakeOneHelper from '../helpers/CameraPhotoTakeOne'

const CameraService = {
  photoTakeOne: function (screen) {
    return CameraPhotoTakeOneHelper(screen)
  }
}

export default CameraService
