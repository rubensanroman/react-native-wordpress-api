import React from 'react'
import ApiConfig from '../config/Api'

const ApiGetOneByIdHelper = (itemsPath, itemId, successCallback, errorCallback) => {
  return fetch(ApiConfig.URL + ApiConfig.BASE_PATH + itemsPath + '/' + itemId)
    .then((response) => response.json())
    .then(successCallback)
    .catch(errorCallback)
}

export default ApiGetOneByIdHelper
