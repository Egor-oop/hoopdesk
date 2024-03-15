import { useEffect, useState } from 'react'
import { AppButton, OrganizationTable, Pagination } from '../../components'
import { getOrganizationsApi } from '../../api'
import { useNavigate } from 'react-router-dom'

export const Organizations = () => {
  const [organizations, setOrganizations] = useState<TOrganization[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState<number>(0)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    getOrganizationsApi()
      .then(res => {
        if (res.data.results[0]) {
          setCount(res.data.count)
          setOrganizations(res.data.results)
        }
      })
      .catch(err => err)
    setLoading(false)
  }, [])

  return (
    <div>
      {loading ? 'Загрузка' :
        <>
          {organizations
            ? <>
              <OrganizationTable organizations={organizations} />
              <div className='flex justify-between items-end'>
                <Pagination
                  length={count}
                  current={currentPage}
                  setCurrent={setCurrentPage}
                />
                <AppButton type='button' onClick={() => navigate('new')}>
                  Добавить
                </AppButton>
              </div>
            </>
            :
            <div className='flex justify-between items-end'>
              <p className='text-2xl'>Организаций не существует</p>
              <AppButton type='button' onClick={() => navigate('new')}>
                Добавить
              </AppButton>
            </div>}
        </>
      }
    </div>
  )
}
