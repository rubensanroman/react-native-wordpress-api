import { Permissions } from 'expo'

const PermissionsAskOneHelper = ({ friendlyName }) => {
  return Permissions.askAsync(Permissions.CAMERA)
}

export default PermissionsAskOneHelper
