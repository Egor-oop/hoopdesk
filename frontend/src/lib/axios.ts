import Axios from 'axios'
import { API_URL } from '../config'
import { storage } from '../utils'

export const axios = Axios.create({ baseURL: API_URL })

axios.interceptors.request.use(
  config => {
    const accessToken = storage.getToken().access
    config.headers.Authorization = `Bearer ${accessToken}`
    return config;
  },
  error => {
    Promise.reject(error)
  }
)
