import React from 'react'
import ApiConfig from '../config/Api'
import WpCredentialsConfig from '../config/WpCredentials'
import ApiRequestHelper from './ApiRequest'

const ApiCreateOneHelper = (itemsPath, itemData, successCallbackFunc, errorCallbackFunc) => {
  return ApiRequestHelper(ApiConfig.URL + ApiConfig.BASE_PATH + itemsPath, 'post', itemData, WpCredentialsConfig.authToken, successCallbackFunc, errorCallbackFunc)
}

export default ApiCreateOneHelper
