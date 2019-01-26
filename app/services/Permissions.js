import PermissionsAskOneHelper from '../helpers/PermissionsAskOne'

const PermissionsService = {
  askOne: function (featureName) {
    return PermissionsAskOneHelper(featureName)
  }
}

export default PermissionsService
