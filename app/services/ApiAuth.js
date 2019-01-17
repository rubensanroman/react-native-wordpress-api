import React from 'react'
import { AsyncStorage } from 'react-native'
import WpCredentialsConfig from '../config/WpCredentials'
import ApiGetAuthTokenHelper from '../helpers/ApiGetAuthToken'

const ApiAuthService = {
  getAuthToken: function () {
    ApiGetAuthTokenHelper(WpCredentialsConfig.admin, this.callbackSuccessFunc, this.callbackErrorFunc)
  },

  callbackSuccessFunc: function (response) {
    AsyncStorage.setItem('authToken', response.data.token)
  },

  callbackErrorFunc: function (error) {
    console.error(error)
  }
}

export default ApiAuthService
