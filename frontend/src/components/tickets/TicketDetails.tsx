import { useNavigate, useParams } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import { editTicketApi, getTicketApi } from '../../api'
import { TicketCard } from './TicketCard'

export const TicketDetails: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [ticket, setTicket] = useState<TTicket | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>('')

  useEffect(() => {
    setLoading(true)
    getTicketApi(id!)
      .then(res => {
        setTicket(res.data)
      })
      .catch(() => navigate('/'))
    setLoading(false)
  }, [])

  const updateTicket = async (
    updatedTicket: TTicketRequest
  ) => {
    await editTicketApi(id!,
      updatedTicket.priority,
      updatedTicket.deadline,
      updatedTicket.is_active,
      updatedTicket.reliable
    )
      .then(res => {
        console.log('Successfuly updated: ', res.data)
      })
      .catch(err => {
        if (err) {
          console.error(err.message)
          setError(err.message)
        }
      })

  }

  return (
    <div className='flex-auto'>
      {loading
        ? 'Загрузка'
        : <TicketCard ticket={ticket} updateTicket={updateTicket} />}
    </div>
  )
}
