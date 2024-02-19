import { useNavigate, useParams } from 'react-router-dom'
import { getClientApi } from '../../api'
import { useEffect, useState } from 'react'
import { ClientCard } from '../../components'

export const ClientDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getClientApi(id!)
      .then(res => {
        setFullname(res.data?.full_name ?? '')
        setEmail(res.data?.email ?? '')
      })
      .catch(() => navigate('/'))
    setLoading(false)
  }, [])

  return (
    <>
      {loading
        ? 'Загрузка'
        : <ClientCard fullname={fullname} email={email} />}
    </>
  )
}
