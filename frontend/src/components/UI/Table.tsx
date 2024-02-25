import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

type TTableProps = {
  data: TClient[] | TOrganization[]
  variant: 'organizations' | 'clients'
}

export const Table: FC<TTableProps> = ({ data, variant }) => {
  const navigate = useNavigate()
  const getTableHeaders = () => {
    return (
      <tr>
        {variant === 'organizations'
          ? ['ID', 'Имя', 'Сайт', 'Эл. почта'].map((key) => (
            <td className='p-2 font-semibold' key={key}>{key}</td>
          ))
          : ['ID', 'Имя', 'Эл. почта', 'Организация'].map((key) => (
            <td className='p-2 font-semibold' key={key}>{key}</td>
          ))
        }
      </tr>
    );
  };

  const getTableCells = () => {
    return data.map((el) => (
      <tr
        className='border-y border-gray-200 hover:bg-gray-50 hover:cursor-pointer'
        onClick={
          variant === 'organizations'
          ? () => {navigate(`/organizations/${el.id}`)}
          : () => {navigate(`/clients/${el.id}`)}
        }
        key={el.id}>
          {Object.values(el).map((value, index) => (
            <td className='p-2' key={index}>
              {value || '-'}
            </td>
          ))}
      </tr>
    ));
  };

  return (
    <table className='w-full'>
      <thead>{getTableHeaders()}</thead>
      <tbody>{getTableCells()}</tbody>
    </table>
  )
}
