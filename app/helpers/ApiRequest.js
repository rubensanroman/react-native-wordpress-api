import React from 'react'
import axios from 'axios'

const ApiRequestHelper = (url, method, data, token, successCallbackFunc, errorCallbackFunc) => {
  let config = {}

  config.url = url
  config.method = method

  if (config.method === 'post') {
    config.data = data
    config.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    if (token !== '') config.headers['Authorization'] = 'Bearer ' + token
  }

  return axios(config)
    .then(successCallbackFunc)
    .catch(errorCallbackFunc)
}

export default ApiRequestHelper
