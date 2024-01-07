import { axiosApi, decodeToken } from "../lib"

export const getUserInfoApi = () => {
  const userId = decodeToken().user_id
  return axiosApi.get(`/api/users/${userId}/`)
}