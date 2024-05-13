import { axiosApi } from '../lib'

export const getUsersApi = async (
  page: number
) => {
  return await axiosApi.get(`/api/users/?page=${page}`)
}