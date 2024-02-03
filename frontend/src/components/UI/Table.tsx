import { FC } from 'react'

type TTableProps = {
  data: TClient[] | TOrganization[] | {}[]
  variant: 'organizations' | 'clients'
}

export const Table: FC<TTableProps> = ({ data, variant }) => {
  const getTableHeaders = () => {
    // const firstRowKeys = Object.keys(data[0]);
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
    return data.map((row, index) => (
      <tr className='border-y border-gray-200' key={index}>
        {Object.values(row).map((value, index) => (
          <td className='p-2' key={index}>
            {typeof value === 'object' ? JSON.stringify(value) : String(value)}
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
