import { useEffect, useState } from 'react'
import { Table } from '../../components'
import { getClientsApi } from '../../api'

export const Clients = () => {
  const [clients, setClients] = useState<TClient[]>([{
    id: 0,
    full_name: 'string',
    email: 'string',
    organization: 'string | number | null'
  }])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getClientsApi()
      .then(res => {
        setClients(res.data)
      })
      .catch(err => err)
    setLoading(false)
  }, [])

  return (
    <div>
      {loading ? 'Загрузка' :
        <>
          {clients[0].id === 0
          //TODO remake this like in Organizations.tsx
            ? <p>Пользователей не существует</p>
            : <Table data={clients} variant='clients' />}
        </>
      }
    </div>
  )
}
