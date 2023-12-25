import { axiosApi } from "../lib"

export const userLoginApi = async (username: string, password: string) => {
  const req = await axiosApi.post('/api/login/', {
    username: username,
    password: password
  }).catch(err => {
    return err
  })
  return req
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
  // TODO: catch promise
  return axiosApi.get('/api/me/')
}
