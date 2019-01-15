import React from 'react'
import ApiConfig from '../config/Api'
import WpCredentialsConfig from '../config/WpCredentials'

const ApiCreateHelper = (itemsPath, itemBody, successCallback, errorCallback) => {
  return fetch(ApiConfig.URL + ApiConfig.BASE_PATH + itemsPath, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + WpCredentialsConfig.authToken
    },
    body: JSON.stringify(itemBody)
  })
    .then((response) => response.json())
    .then(successCallback)
    .catch(errorCallback)
}

export default ApiCreateHelper
