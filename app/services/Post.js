import ApiConfig from '../config/Api'
import ApiGetCollectionHelper from '../helpers/ApiGetCollection'
import ApiGetOneByIdHelper from '../helpers/ApiGetOneById'
import ApiCreateHelper from '../helpers/ApiCreate'

const PostService = {
  getAll: function (successCallbackFunc, errorCallbackFunc) {
    return ApiGetCollectionHelper(ApiConfig.POSTS_PATH, successCallbackFunc, errorCallbackFunc)
  },

  getOneById: function (postId, successCallbackFunc, errorCallbackFunc) {
    return ApiGetOneByIdHelper(ApiConfig.POSTS_PATH, postId, successCallbackFunc, errorCallbackFunc)
  },

  create: function (postBody, successCallbackFunc, errorCallbackFunc) {
    return ApiCreateHelper(ApiConfig.POSTS_PATH, postBody, successCallbackFunc, errorCallbackFunc)
  }
}

export default PostService
