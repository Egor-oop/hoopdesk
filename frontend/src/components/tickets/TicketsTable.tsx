import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

type TTicketsTableProps = {
  tickets: TTicket[]
}

export const TicketsTable: FC<TTicketsTableProps> = ({ tickets }) => {
  const navigate = useNavigate()

  const convertDeadline = (deadline: string) => {
    const d = new Date(deadline)
    return `${d.getHours()}:${d.getMinutes()} ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
  }

  return (
    <table className='w-full'>
      {/* <AppToast /> */}
      <thead>
        <tr>
          {['ID', 'Название', 'Клиент', 'Статус', 'Дедлайн'].map((key) => (
            <td className='p-2 font-semibold' key={key}>{key}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {tickets.map(ticket => (
          <tr
            className='border-y border-gray-200 hover:bg-gray-50 hover:cursor-pointer'
            onClick={() => { navigate(`/tickets/${ticket.id}`) }}
            key={ticket.id}
          >
            <td className='p-2'>{ticket.id || '-'}</td>
            <td className='p-2 w-1/2'>{ticket.title || '-'}</td>
            <td className='p-2 w-3/12'>{ticket.client.full_name || '-'}</td>
            <td className='p-2 w-[13%]'>{ticket.is_active ? 'Активен' : 'Неактивен'}</td>
            <td className='p-2 w-[12%]'>
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
