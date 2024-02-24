import { useEffect, useState } from 'react'
import { AppButton, Table } from '../../components'
import { getOrganizationsApi } from '../../api'
import { useNavigate } from 'react-router-dom'

export const Organizations = () => {
  const [organizations, setOrganizations] = useState<TOrganization[] | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

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
      <AppButton type='button' onClick={() => navigate('new')}>
        Добавить
      </AppButton>
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
