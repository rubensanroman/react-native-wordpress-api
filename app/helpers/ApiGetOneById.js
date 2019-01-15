import React from 'react'
import ApiConfig from '../config/Api'

const ApiGetOneByIdHelper = (itemPath, itemId) => {
  fetch(ApiConfig.URL + ApiConfig.BASE_PATH + itemPath + '/' + itemId)
    .then((response) => response.json())
    .then((responseJson) => { return responseJson })
    .catch((error) => { console.error(error) })
}

export default ApiGetOneByIdHelper
