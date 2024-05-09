import { useNavigate, useParams } from 'react-router-dom'
import { FC, useEffect } from 'react'
import { TicketDialog, TicketDetails } from '../../components'

export const TicketView: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id === undefined) {
      navigate(-1)
    }
  }, [])

  return (
    <div className='flex lg:flex-row flex-col-reverse h-full max-w-full '>
      {id !== undefined ? <>
        <TicketDialog ticketId={Number(id)} />
        <TicketDetails />
      </> : ''
      }
    </div>
  )
}
