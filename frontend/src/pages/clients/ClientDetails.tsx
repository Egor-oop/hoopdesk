import { useNavigate, useParams } from 'react-router-dom'
import { getClientApi, getOrganizationsApi } from '../../api'
import { useEffect, useState } from 'react'
import { ClientCard } from '../../components'

export const ClientDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState<number | null>(null)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getClientApi(id!)
      .then(res => {
        setFullname(res.data?.full_name ?? '')
        setEmail(res.data?.email ?? '')
        setOrganization(res.data?.organization?.id)
      })
      .catch(() => navigate('/'))
    setLoading(false)
  }, [])

  return (
    <>
      {loading
        ? 'Загрузка'
        :
        <>
          {true
            ? <ClientCard id={id!} fullname={fullname} email={email} organization={organization} />
            : ''}
        </>}
    </>
  )
}
