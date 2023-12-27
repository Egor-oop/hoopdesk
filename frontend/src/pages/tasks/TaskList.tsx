import { useNavigate } from "react-router-dom"
import { AppButton } from "../../components"
import { storage } from "../../utils"
import { userMeApi } from "../../api"
import { useEffect, useState } from "react"

type TUserData = {
  id: number
  first_name: string
  last_name: string
  username: string
  email: string
}

export const TaskList = () => {
  const [userData, setUserData] = useState<TUserData>()
  const navigate = useNavigate()

  const logout = () => {
    storage.clearToken()
    navigate(0)
  }

  useEffect(() => {
    userMeApi()
      .then(res => {
        setUserData(res.data)
      })
      .catch(err => err)
  }, [])

  return (
    <>
      {userData ? <p>{userData?.username}</p> : ''}
      <AppButton onClick={logout}>Выйти из аккаунта</AppButton>
    </>
  )
}
