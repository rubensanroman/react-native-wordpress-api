import React from 'react'
import ApiAuthGetTokenHelper from '../helpers/ApiAuthGetToken'

const AuthService = {
  getToken: function (wpCredentials, callbackSuccessFunc, callbackErrorFunc) {
    return ApiAuthGetTokenHelper(wpCredentials, callbackSuccessFunc, callbackErrorFunc)
  }
}

export default AuthService
