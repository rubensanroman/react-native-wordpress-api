import React from 'react'
import axios from 'axios'
import ApiConfig from '../config/Api'

const ApiGetAllHelper = (itemsPath, successCallback, errorCallback) => {
  return axios.get(ApiConfig.URL + ApiConfig.BASE_PATH + itemsPath)
    .then(successCallback)
    .catch(errorCallback)
}

export default ApiGetAllHelper
