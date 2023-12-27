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
  response => { return response },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = storage.getToken().refresh
      const newTokens = await axiosApi.post('/api/token/refresh/', {refresh: refreshToken})
      storage.setToken(newTokens.data.access, newTokens.data.refresh)
      axiosApi.defaults.headers.common['Authorization'] = `Bearer ${newTokens.data.refresh}`
      console.log(newTokens)
      return axiosApi(originalRequest)
    }
    return Promise.reject(error)
  }
)

// axiosApi.interceptors.response.use(
//   response => response,
//   error => {
//     const originalRequest = error.config
//     const refreshToken = storage.getToken().refresh

//     if (error.response.status === 401 && refreshToken) {
//       debugger
//       axiosApi.post('/api/token/refresh/', { refresh: refreshToken })
//         .then(response => {
//           storage.setToken(response.data.access, response.data.refresh)
//           originalRequest.headers.Authorization = `Bearer ${response.data.access}`
//           console.log(originalRequest)
//           return axiosApi(originalRequest)
//             .then(response => response)
//             .catch(error => error)
//         })
//         .catch(error => {
//           return error
//         })
//     }
//     return Promise.reject(error);
//   }
// )
