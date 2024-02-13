import { useNavigate, useParams } from 'react-router-dom'
import { getClientApi } from '../../api'
import { useEffect, useState } from 'react'

export const ClientDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [client, setClient] = useState<TClient | null>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getClientApi(id!)
      .then(res => {
        setClient(res.data)
      })
      .catch(err => navigate('/'))
    setLoading(false)
  }, [])

  return (
    <div>
      {loading
        ? 'Загрузка'
        :  <p>{client?.full_name}</p>}
    </div>
  )
}
