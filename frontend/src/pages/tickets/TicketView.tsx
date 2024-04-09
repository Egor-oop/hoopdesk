import { useNavigate, useParams } from 'react-router-dom'
import { FC } from 'react'
import { TicketDialog, TicketDetails } from '../../components'

export const TicketView: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className='flex lg:flex-row flex-col-reverse h-full max-w-full '>
      <TicketDialog />
      <TicketDetails />      
    </div>
  )
}
