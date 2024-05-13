import React, { FC } from 'react'
import { date } from '../../utils'

interface IMessageProps {
  content: string
  created_at: string
  from_client: number | null
  from_employee: number | null
  ticket: TTicket
}

export const Message: FC<IMessageProps> = ({
  content, created_at, from_client, from_employee, ticket
}) => {
  return (
    <div>
      <div className='flex justify-between'>
        <p className='font-medium'>{from_client ? ticket.client.full_name : 'Вы'}</p>
        <p>{date.convertDate(created_at)}</p>
      </div>
      <p>{content}</p>
    </div>
  )
}
