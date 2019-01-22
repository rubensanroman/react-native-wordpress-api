import React from 'react'
import { Permissions } from 'expo'

CameraAskForPermissionHelper = () => {
  return Permissions.askAsync(Permissions.CAMERA)
}

export default CameraAskForPermissionHelper
