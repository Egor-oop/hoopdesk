import { useEffect, useState } from 'react'
import { AppButton, ClientTable, Pagination } from '../../components'
import { getClientsApi } from '../../api'
import { useNavigate } from 'react-router-dom'

export const Clients = () => {
  const [clients, setClients] = useState<TClient[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState<number>(0)
  const navigate = useNavigate()

  useEffect(() => {
    getClientsApi(currentPage, true)
      .then(res => {
        if (res.data.results[0]) {
          setCount(res.data.count)
          setClients(res.data.results)
        }
      })
      .catch(err => err)
    setLoading(false)
  }, [currentPage])

  return (
    <div>
      {loading ? 'Загрузка' :
        <>
          {clients
            ? <>
              <ClientTable clients={clients} />
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
            : <p>Клиентов не существует</p>}
        </>
      }
    </div>
  )
}
