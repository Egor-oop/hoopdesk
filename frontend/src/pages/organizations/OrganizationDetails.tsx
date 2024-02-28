import { useNavigate, useParams } from 'react-router-dom'
import { getOrganizationApi } from '../../api'
import { useEffect, useState } from 'react'
import { OrganizationCard } from '../../components'

export const OrganizationDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [website, setWebsite] = useState('')
  const [email, setEmail] = useState('')

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getOrganizationApi(id!)
      .then(res => {
        setName(res.data?.name ?? '')
        setWebsite(res.data?.website ?? '')
        setEmail(res.data?.email ?? '')
      })
      .catch(() => navigate('/'))
    setLoading(false)
  }, [])

  return (
    <>
      {loading
        ? 'Загрузка'
        : <OrganizationCard id={id!} name={name} website={website} email={email} />}
    </>
  )
}
