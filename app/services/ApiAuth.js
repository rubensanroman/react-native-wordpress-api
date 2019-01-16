import React from 'react'
import WpCredentialsConfig from '../config/WpCredentials'
import ApiGetAuthTokenHelper from '../helpers/ApiGetAuthToken'

const ApiAuthService = {
  getAuthToken: function () {
    ApiGetAuthTokenHelper(WpCredentialsConfig.admin, this.callbackSuccessFunc, this.callbackErrorFunc)
  },

  callbackSuccessFunc: function (response) {
    if (response.token !== undefined) {
      WpCredentialsConfig.authToken = response.token
    }
  },

  callbackErrorFunc: function (error) {
    console.error(error)
  }
}

export default ApiAuthService
