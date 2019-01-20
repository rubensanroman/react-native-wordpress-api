import React from 'react'
import ApiConfig from '../config/Api'
import ApiRequestHelper from './ApiRequest'

const ApiGetAllHelper = (itemsPath, successCallbackFunc, errorCallbackFunc) => {
  return ApiRequestHelper(ApiConfig.URL + ApiConfig.ENDPOINTS.BASE + itemsPath, 'get', '', '', successCallbackFunc, errorCallbackFunc)
}

export default ApiGetAllHelper
