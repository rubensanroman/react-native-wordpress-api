import React from 'react'
import ApiConfig from '../config/Api'

const ApiGetOneByIdHelper = (itemPath, itemId, successCallback, errorCallback) => {
  return fetch(ApiConfig.URL + ApiConfig.BASE_PATH + itemPath + '/' + itemId)
    .then((response) => response.json())
    .then(successCallback)
    .catch(errorCallback)
}

export default ApiGetOneByIdHelper
