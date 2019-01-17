import React from 'react'
import axios from 'axios'
import ApiConfig from '../config/Api'
import WpCredentialsConfig from '../config/WpCredentials'

const ApiGetAuthTokenHelper = (wpCredentials, successCallback, errorCallback) => {
  return axios.post(ApiConfig.URL + ApiConfig.JWT_AUTH_PATH,
    JSON.stringify(WpCredentialsConfig.admin),
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
