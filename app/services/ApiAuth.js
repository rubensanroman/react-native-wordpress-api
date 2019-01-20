import React from 'react'
import ApiGetAuthTokenHelper from '../helpers/ApiGetAuthToken'

const ApiAuthService = {
  getAuthToken: function (wpCredentials, callbackSuccessFunc, callbackErrorFunc) {
    return ApiGetAuthTokenHelper(wpCredentials, callbackSuccessFunc, callbackErrorFunc)
  }
}

export default ApiAuthService
