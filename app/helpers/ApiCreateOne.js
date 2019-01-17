import React from 'react'
import { AsyncStorage } from 'react-native'
import ApiConfig from '../config/Api'
import WpCredentialsConfig from '../config/WpCredentials'
import ApiRequestHelper from './ApiRequest'

const ApiCreateOneHelper = (itemsPath, itemData, successCallbackFunc, errorCallbackFunc) => {
  return AsyncStorage.getItem('authToken').then(authToken => {
    ApiRequestHelper(ApiConfig.URL + ApiConfig.BASE_PATH + itemsPath, 'post', itemData, authToken, successCallbackFunc, errorCallbackFunc)
  })
}

export default ApiCreateOneHelper
