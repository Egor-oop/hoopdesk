import Axios from 'axios'
import { API_URL } from '../config'
import { storage } from '../utils'

export const axiosApi = Axios.create({ baseURL: API_URL })

axiosApi.interceptors.request.use(
  config => {
    const accessToken = storage.getToken().access
    config.headers.Authorization = `Bearer ${accessToken}`
    return config;
  },
  error => {
    Promise.reject(error)
  }
)

axiosApi.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config
    const refreshToken = storage.getToken().refresh

    if (error.response.status === 401 && refreshToken) {
      axiosApi.post('/api/token/refresh/')
        .then(response => {
          storage.setToken(response.data.access, response.data.refresh)
          originalRequest.headers.Authorization = `Bearer ${response.data.access}`
          axiosApi(originalRequest)
            .then(response => {
              return response.data
            })
            .catch(error => {
              return error
            })
        })
    }
  }
)
