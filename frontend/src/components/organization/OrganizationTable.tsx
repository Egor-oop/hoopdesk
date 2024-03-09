import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

type TOrganizationTable = {
  organizations: TOrganization[]
}

export const OrganizationTable: FC<TOrganizationTable> = ({ organizations }) => {
  const navigate = useNavigate()

  return (
    <table className='w-full'>
      <thead>
        <tr>
          {['ID', 'Название', 'Сайт', 'Эл. почта'].map((key) => (
            <td className='p-2 font-semibold' key={key}>{key}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {organizations.map(client => (
          <tr
            className='border-y border-gray-200 hover:bg-gray-50 hover:cursor-pointer'
            onClick={() => { navigate(`/organizations/${client.id}`) }}
            key={client.id}
          >
            <td className='p-2'>{client.id || '-'}</td>
            <td className='p-2'>{client.name || '-'}</td>
            <td className='p-2'>{client.website || '-'}</td>
            <td className='p-2'>{client.email || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>

  )
}
