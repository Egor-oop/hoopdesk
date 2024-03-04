import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

type TClientTable = {
  clients: TClient[]
}

export const ClientTable: FC<TClientTable> = ({ clients }) => {
  const navigate = useNavigate()

  return (
    <table className='w-full'>
      <thead>
        <tr>
          {['ID', 'Имя', 'Организация', 'Эл. почта'].map((key) => (
            <td className='p-2 font-semibold' key={key}>{key}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {clients.map(client => (
          <tr
            className='border-y border-gray-200 hover:bg-gray-50 hover:cursor-pointer'
            onClick={() => { navigate(`/clients/${client.id}`) }}
            key={client.id}
          >
            <td className='p-2'>{client.id || '-'}</td>
            <td className='p-2'>{client.full_name || '-'}</td>
            <td className='p-2'>{client.organization_name || '-'}</td>
            <td className='p-2'>{client.email || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>

  )
}
