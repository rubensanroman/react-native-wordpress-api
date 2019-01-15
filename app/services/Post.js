import ApiConfig from '../config/Api'
import ApiGetCollectionHelper from '../helpers/ApiGetCollection'

const PostService = {
  getAll: function () {
    return ApiGetCollectionHelper(ApiConfig.POSTS_PATH)
  }
}

export default PostService
