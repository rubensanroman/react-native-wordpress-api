const CameraPhotoTakeOneHelper = (screen) => {
  return screen.camera && screen.camera.takePictureAsync()
}

export default CameraPhotoTakeOneHelper
