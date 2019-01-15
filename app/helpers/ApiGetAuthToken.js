import React from 'react'
import ApiConfig from '../config/Api'

const ApiGetAuthTokenHelper = (wpCredentials, successCallback, errorCallback) => {
  return fetch(ApiConfig.URL + ApiConfig.JWT_AUTH_PATH, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(wpCredentials)
  })
    .then((response) => response.json())
    .then(successCallback)
    .catch(errorCallback)
}

export default ApiGetAuthTokenHelper
