import { axiosApi } from "../lib"

export const getMailMessages = async (
  ticketId: number,
  page: number = 1
) => {
  return await axiosApi.get(
    `/api/mailmessages/?ordering=-created_at&page=${page}&ticket=${ticketId}`
  )
}

export const sendMailMessage = async (
  ticket: number,
  content: string
) => {
  return await axiosApi.post('/api/send-message/', 
    {ticket, content}
  )
}