import { AppButton } from '../components'
import { storage } from '../utils'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
  const navigate = useNavigate()

  const logout = () => {
    storage.clearToken()
    navigate(0)
  }

  return (
    <AppButton onClick={logout}>Выйти из аккаунта</AppButton>
  )
}
