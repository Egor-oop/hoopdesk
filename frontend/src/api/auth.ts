import { axiosApi } from "../lib"

export const userLoginApi = (username: string, password: string) => {
  axiosApi.post('/api/login/', {
    username: username,
    password: password
  })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error)
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
  axiosApi.post('/api/register/', {
    username: username,
    password: password,
    password2: password2,
    email: email,
    first_name: firstName,
    last_name: lastName
  })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error)
    })
}