import { useEffect, useState } from "react"
import { AppButton, Pagination, TicketsTable } from "../../components"
import { getTicketsApi } from "../../api"

export const Tickets = () => {
  const [tickets, setTickets] = useState<TTicket[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    getTicketsApi(currentPage)
      .then(res => {
        if (res.data.results[0]) {
          setCount(res.data.count)
          setTickets(res.data.results)
        }
      })
      .catch(err => err)
  }, [currentPage])

  return (
    <div>
      {loading ? 'Загрузка' :
        <>
          {tickets
            ? <>
              <TicketsTable tickets={tickets} />
              <div className='flex justify-between items-end'>
                <Pagination
                  length={count}
                  current={currentPage}
                  setCurrent={setCurrentPage}
                />
              </div>
            </>
            :
            <div className='text-center mr-64'>
              <p className='text-2xl mt-20 mb-4'>Задач не существует</p>
            </div>}
        </>
      }
    </div>
  )
}
