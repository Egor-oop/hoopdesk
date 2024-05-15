import { axiosApi } from "../lib"

export const userLoginApi = async (username: string, password: string) => {
  return await axiosApi.post('/api/login/', {
    username: username,
    password: password
  })
}

export const userRegisterApi = (
  username: string,
  password: string,
  password2: string,
  email: string,
  firstName: string,
  lastName: string
) => {
  // TODO: catch promise
  return axiosApi.post('/api/register/', {
    username: username,
    password: password,
    password2: password2,
    email: email,
    first_name: firstName,
    last_name: lastName
  })
}

export const userMeApi = () => {
  const req = axiosApi.get('/api/me/')
  return req
}
