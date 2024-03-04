import { axiosApi } from '../lib'

export const getOrganizationsApi = async (
  nopage: boolean = false,
  page: number = 1
) => {
  const req = await axiosApi.get(
    `/api/organizations/?page=${page}&${nopage ? 'nopage' : ''}&ordering=-updated_at/`
    )
  return req
}

export const getOrganizationApi = async (id: string | number) => {
  const req = await axiosApi.get(`/api/organizations/${id}/`)
  return req
}

export const createOrganizationApi = async (
  name: string,
  website: string,
  email: string
) => {
  const req = await axiosApi.post(
    '/api/organizations/',
    {name, website, email}
  )
  return req
}

export const editOrganizationApi = async (
  id: string | number,
  name: string,
  website: string,
  email: string
) => {
  const req = await axiosApi.put(
    `/api/organizations/${id}/`,
    { name, website, email }
  )
  return req
}

export const deleteOrganizationApi = async (id: string | number) => {
  const req = await axiosApi.delete(`/api/organizations/${id}/`)
  return req
}
