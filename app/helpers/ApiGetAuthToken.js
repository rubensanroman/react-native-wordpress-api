import React from 'react'
import axios from 'axios'
import ApiConfig from '../config/Api'

const ApiGetAuthTokenHelper = (wpCredentials, successCallback, errorCallback) => {
  return axios.post(ApiConfig.URL + ApiConfig.JWT_AUTH_PATH,
    wpCredentials,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(successCallback)
    .catch(errorCallback)
}

export default ApiGetAuthTokenHelper
