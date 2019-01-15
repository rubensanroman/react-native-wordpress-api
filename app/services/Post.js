import ApiConfig from '../config/Api'
import ApiGetCollectionHelper from '../helpers/ApiGetCollection'

const PostService = {
  getAll: function (successCallbackFunc, errorCallbackFunc) {
    return ApiGetCollectionHelper(ApiConfig.POSTS_PATH, successCallbackFunc, errorCallbackFunc)
  }
}

export default PostService
