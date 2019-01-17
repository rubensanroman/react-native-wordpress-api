import ApiConfig from '../config/Api'
import ApiGetAllHelper from '../helpers/ApiGetAll'
import ApiGetOneByIdHelper from '../helpers/ApiGetOneById'
import ApiCreateOneHelper from '../helpers/ApiCreateOne'

const PageService = {
  getAll: function (successCallbackFunc, errorCallbackFunc) {
    return ApiGetAllHelper(ApiConfig.PAGES_PATH, successCallbackFunc, errorCallbackFunc)
  },

  getOneById: function (pageId, successCallbackFunc, errorCallbackFunc) {
    return ApiGetOneByIdHelper(ApiConfig.PAGES_PATH, pageId, successCallbackFunc, errorCallbackFunc)
  },

  createOne: function (pageData, successCallbackFunc, errorCallbackFunc) {
    return ApiCreateOneHelper(ApiConfig.PAGES_PATH, pageData, successCallbackFunc, errorCallbackFunc)
  }
}

export default PageService
