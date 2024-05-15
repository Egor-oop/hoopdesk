import { useDispatch } from 'react-redux'
import { AppButton } from '../components'
import { storage } from '../utils'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../state/user/userSlice'

export const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    storage.clearToken()
    dispatch(logoutUser())
    navigate(0)
  }

  return (
    <AppButton onClick={logout}>Выйти из аккаунта</AppButton>
  )
}
