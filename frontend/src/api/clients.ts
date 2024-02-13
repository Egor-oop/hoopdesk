import { axiosApi } from "../lib"

export const getClientsApi = async () => {
  const req = axiosApi.get('/api/clients/')
  return req
}

export const getClientApi = async (id: number | string) => {
  const req = await axiosApi.get(`/api/clients/${id}/`)
  
  return req
}
