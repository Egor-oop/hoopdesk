import { storage } from '../utils'

export const useAuth = () => {
  if (storage.getToken().access) return true
  return false
}