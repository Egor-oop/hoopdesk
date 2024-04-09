import { axiosApi } from "../lib"

export const getTicketsApi = async (
  page: number = 1,
  ordering: string = '-updated_at'
) => {
  const req = await axiosApi.get(
    `/api/tickets/?page=${page}&ordering=${ordering}`
  )
  return req
}

export const getTicketApi = async (id: string | number) => {
  const req = await axiosApi.get(`/api/tickets/${id}/`)
  return req
}

export const editTicketApi = async (
  // TODO: Optimize thise method to make a request only with provided arguments
  id: string | number,
  priority: number,
  deadline: string | null,
  is_active: boolean,
  reliable: number | null
) => {
  const req = await axiosApi.put(
    `/api/tickets/${id}/`,
    { priority, deadline, is_active, reliable }
  )
  return req
}

export const deleteTicketApi = async (id: string | number) => {
  const req = await axiosApi.delete(`/api/tickets/${id}/`)
  return req
}
