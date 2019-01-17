import React from 'react'
import ApiConfig from '../config/Api'
import ApiRequestHelper from './ApiRequest'

const ApiGetOneByIdHelper = (itemsPath, itemId, successCallbackFunc, errorCallbackFunc) => {
  return ApiRequestHelper(ApiConfig.URL + ApiConfig.BASE_PATH + itemsPath + '/' + itemId, 'get', '', '', successCallbackFunc, errorCallbackFunc)
}

export default ApiGetOneByIdHelper
