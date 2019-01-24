import ApiConfig from '../config/Api'
import ApiGetAllHelper from '../helpers/ApiGetAll'
import ApiGetOneByIdHelper from '../helpers/ApiGetOneById'
import ApiCreateOneHelper from '../helpers/ApiCreateOne'

const UserService = {
  getAll: function (successCallbackFunc, errorCallbackFunc) {
    return ApiGetAllHelper(ApiConfig.ENDPOINTS.USERS, successCallbackFunc, errorCallbackFunc)
  },

  getOneById: function (userId, successCallbackFunc, errorCallbackFunc) {
    return ApiGetOneByIdHelper(ApiConfig.ENDPOINTS.USERS, userId, successCallbackFunc, errorCallbackFunc)
  },

  createOne: function (userData, successCallbackFunc, errorCallbackFunc) {
    return ApiCreateOneHelper(ApiConfig.ENDPOINTS.USERS, userData, successCallbackFunc, errorCallbackFunc)
  }
}

export default UserService
