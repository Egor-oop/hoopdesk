import { useNavigate } from "react-router-dom"
import { AppButton } from "../../components"
import { storage } from "../../utils"

export const TaskList = () => {
  const navigate = useNavigate()
  const logout = () => {
    storage.clearToken()
    navigate(0)
  }
  return (
    <AppButton onClick={logout}>Выйти из аккаунта</AppButton>
  )
}
