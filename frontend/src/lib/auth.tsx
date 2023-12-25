// import { userMeApi } from '../api'
import { storage } from '../utils'

export const useAuth = () => {
  // TODO: make with userMeApi
  if (storage.getToken().access) return true
  return false
}