import { useEffect, useState } from 'react'
import { Table } from '../../components'
import { getClientsApi } from '../../api'

export const Clients = () => {
  const [clients, setClients] = useState<TClient[] | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getClientsApi(true)
      .then(res => {
        if (res.data[0]) setClients(res.data)
      })
      .catch(err => err)
    setLoading(false)
  }, [])

  return (
    <div>
      {loading ? 'Загрузка' :
        <>
          {clients
            ? <Table data={clients} variant='clients' />
            : <p>Пользователей не существует</p>}
        </>
      }
    </div>
  )
}
