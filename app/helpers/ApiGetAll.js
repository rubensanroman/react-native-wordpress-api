import React from 'react'
import ApiConfig from '../config/Api'

const ApiGetAllHelper = (itemsPath, successCallback, errorCallback) => {
  return fetch(ApiConfig.URL + ApiConfig.BASE_PATH + itemsPath)
    .then((response) => response.json())
    .then(successCallback)
    .catch(errorCallback)
}

export default ApiGetAllHelper
