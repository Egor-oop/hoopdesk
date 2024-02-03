import { useEffect, useState } from 'react'
import { Table } from '../components'
import { getClientsApi } from '../api'

export const Clients = () => {
  const [clients, setClients] = useState<TClient[] | {}[]>([{}])

  useEffect(() => {
    getClientsApi()
      .then(res => {
        setClients(res.data)
      })
      .catch(err => err)
  }, [])

  return (
    <div>
      <Table data={clients} variant='clients' />
    </div>
  )
}
