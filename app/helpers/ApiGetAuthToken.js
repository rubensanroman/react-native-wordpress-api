import React from 'react'
import ApiConfig from '../config/Api'
import ApiRequestHelper from './ApiRequest'

const ApiGetAuthTokenHelper = (wpCredentials, successCallbackFunc, errorCallbackFunc) => {
  return ApiRequestHelper(ApiConfig.URL + ApiConfig.JWT_AUTH_PATH, 'post', wpCredentials, '', successCallbackFunc, errorCallbackFunc)
}

export default ApiGetAuthTokenHelper
