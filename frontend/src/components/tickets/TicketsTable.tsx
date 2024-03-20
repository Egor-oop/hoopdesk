import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type TTicketsTableProps = {
  tickets: TTicket[]
}

export const TicketsTable: FC<TTicketsTableProps> = ({ tickets }) => {
  const navigate = useNavigate()

  const convertDeadline = (deadline: string) => {
    const d = new Date(deadline)
    
    return `${d.getHours()}:${d.getMinutes()} ${d.getFullYear()}/${d.getDate()}/${d.getMonth()}`
  }

  return (
    <table className='w-full'>
      <thead>
        <tr>
          {['ID', 'Название', 'Клиент', 'Дэдлайн'].map((key) => (
            <td className='p-2 font-semibold' key={key}>{key}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {tickets.map(ticket => (
          <tr
            className='border-y border-gray-200 hover:bg-gray-50 hover:cursor-pointer'
            onClick={() => { navigate(`/organizations/${ticket.id}`) }}
            key={ticket.id}
          >
            <td className='p-2'>{ticket.id || '-'}</td>
            <td className='p-2'>{ticket.title || '-'}</td>
            <td className='p-2'>{ticket.client.full_name || '-'}</td>
            <td className='p-2'>
              {ticket.deadline ?
                convertDeadline(ticket.deadline) : '-'
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  )
}
