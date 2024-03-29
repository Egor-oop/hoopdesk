import { axiosApi } from "../lib"

export const getClientsApi = async (
  page: number,
  orgName: boolean = false
) => {
  const req = axiosApi.get(`/api/clients/?page=${page}&ordering=-updated_at&orgname=${orgName}/`)
  return req
}

export const getClientApi = async (id: number | string) => {
  const req = await axiosApi.get(`/api/clients/${id}/`)
  return req
}

export const createClientApi = async (
  full_name: string,
  email: string,
  organization: number | null
) => {
  const req = await axiosApi.post(
    '/api/clients/',
    {full_name, email, organization}
  )
  return req
}

export const editClientApi = async (
  id: string | number,
  full_name: string,
  email: string,
  organization: number | null
) => {
  const req = await axiosApi.put(
    `/api/clients/${id}/`,
    { full_name, email, organization }
  )
  return req
}

export const deleteClientApi = async (id: string | number) => {
  const req = await axiosApi.delete(`/api/clients/${id}/`)
  return req
}