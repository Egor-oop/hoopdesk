import { storage } from '../utils'
import { JwtPayload, jwtDecode } from 'jwt-decode'

export const useAuth = () => {
  if (storage.getToken().access) return true
  return false
}

interface IJWT extends JwtPayload {user_id: number}

export const decodeToken = () => {
  return jwtDecode<IJWT>(storage.getToken().access!)
}
