import { FC } from 'react'
import { date } from '../../utils'
import { useSelector } from 'react-redux'
import { selectUser } from '../../state/user/userSlice'

interface IMessageProps {
  content: string
  created_at: string
  from_client: number | null
  ticket: TTicket
}

export const Message: FC<IMessageProps> = ({
  content, created_at, from_client, ticket
}) => {
  const user = useSelector(selectUser)
  return (
    <div>
      <div className='flex justify-between'>
        <p className='font-medium'>{from_client ? ticket.client.full_name : `Вы (${user?.first_name})`}</p>
        <p>{date.convertDate(created_at)}</p>
      </div>
      <p>{content}</p>
    </div>
  )
}
