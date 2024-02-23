import { useEffect, useState } from 'react'
import { Table } from '../../components'
import { getOrganizationsApi } from '../../api'

export const Organizations = () => {
  const [organizations, setOrganizations] = useState<TOrganization[] | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getOrganizationsApi()
      .then(res => {
        if (res.data[0]) setOrganizations(res.data)
      })
      .catch(err => err)
    setLoading(false)
  }, [])

  return (
    <div>
      {loading ? 'Загрузка' :
        <>
          {organizations
            ? <Table data={organizations} variant='organizations' />
            : <p>Организаций не существует</p>}
        </>
      }
    </div>
  )
}
