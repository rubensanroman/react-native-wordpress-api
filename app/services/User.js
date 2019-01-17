import ApiConfig from '../config/Api'
import ApiGetAllHelper from '../helpers/ApiGetAll'
import ApiGetOneByIdHelper from '../helpers/ApiGetOneById'
import ApiCreateOneHelper from '../helpers/ApiCreateOne'

const UserService = {
  getAll: function (successCallbackFunc, errorCallbackFunc) {
    return ApiGetAllHelper(ApiConfig.USERS_PATH, successCallbackFunc, errorCallbackFunc)
  },

  getOneById: function (userId, successCallbackFunc, errorCallbackFunc) {
    return ApiGetOneByIdHelper(ApiConfig.USERS_PATH, userId, successCallbackFunc, errorCallbackFunc)
  },

  createOne: function (userData, successCallbackFunc, errorCallbackFunc) {
    return ApiCreateOneHelper(ApiConfig.USERS_PATH, userData, successCallbackFunc, errorCallbackFunc)
  }
}

export default UserService
