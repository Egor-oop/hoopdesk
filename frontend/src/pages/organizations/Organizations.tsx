import { useEffect, useState } from 'react'
import { Table } from '../../components'
import { getOrganizationsApi } from '../../api'

export const Organizations = () => {
  const [organizations, setOrganizations] = useState<TOrganization[]>([{
    id: 0,
    name: 'string',
    website: 'string | number | null',
    email: 'string'
  }])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getOrganizationsApi()
      .then(res => {
        setOrganizations(res.data)
      })
      .catch(err => err)
    setLoading(false)
  }, [])

  return (
    <div>
      {loading ? 'Загрузка' :
        <>
          {organizations[0].id === 0
            ? <p>Организаций не существует</p>
            : <Table data={organizations} variant='organizations' />}
        </>
      }
    </div>
  )
}
