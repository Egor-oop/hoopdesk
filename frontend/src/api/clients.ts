import { axiosApi } from "../lib"

export const getClientsApi = async () => {
  const req = axiosApi.get('/api/clients/')
  return req
}
