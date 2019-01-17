import ApiConfig from '../config/Api'
import ApiGetAllHelper from '../helpers/ApiGetAll'
import ApiGetOneByIdHelper from '../helpers/ApiGetOneById'
import ApiCreateOneHelper from '../helpers/ApiCreateOne'

const PostService = {
  getAll: function (successCallbackFunc, errorCallbackFunc) {
    return ApiGetAllHelper(ApiConfig.POSTS_PATH, successCallbackFunc, errorCallbackFunc)
  },

  getOneById: function (postId, successCallbackFunc, errorCallbackFunc) {
    return ApiGetOneByIdHelper(ApiConfig.POSTS_PATH, postId, successCallbackFunc, errorCallbackFunc)
  },

  createOne: function (postData, successCallbackFunc, errorCallbackFunc) {
    return ApiCreateOneHelper(ApiConfig.POSTS_PATH, postData, successCallbackFunc, errorCallbackFunc)
  }
}

export default PostService
