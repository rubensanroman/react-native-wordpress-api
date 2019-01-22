import ApiConfig from '../config/Api'
import ApiGetAllHelper from '../helpers/ApiGetAll'
import ApiGetOneByIdHelper from '../helpers/ApiGetOneById'
import ApiCreateOneHelper from '../helpers/ApiCreateOne'

const MediaService = {
  getAll: function (successCallbackFunc, errorCallbackFunc) {
    return ApiGetAllHelper(ApiConfig.ENDPOINTS.MEDIA, successCallbackFunc, errorCallbackFunc)
  },

  getOneById: function (mediaId, successCallbackFunc, errorCallbackFunc) {
    return ApiGetOneByIdHelper(ApiConfig.ENDPOINTS.MEDIA, mediaId, successCallbackFunc, errorCallbackFunc)
  },

  createOne: function (mediaData, successCallbackFunc, errorCallbackFunc) {
    return ApiCreateOneHelper(ApiConfig.ENDPOINTS.MEDIA, mediaData, successCallbackFunc, errorCallbackFunc)
  }
}

export default MediaService
