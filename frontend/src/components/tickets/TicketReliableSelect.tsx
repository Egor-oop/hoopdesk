import { FC, useEffect, useState } from 'react'
import { SelectField } from '../UI/SelectField'
import { getUsersApi } from '../../api'

interface ITicketReliableSelectProps {
  value: number | null,
  setReliable: (id: number | null) => void
}

export const TicketReliableSelect: FC<ITicketReliableSelectProps> = (
  { value, setReliable }
) => {
  const [options, setOptions] = useState<TSelectOption[]>(
    [{ value: null, label: 'Нет ответственного' }]
  )
  const [length, setLength] = useState(1)
  const [page, setPage] = useState(1)

  const max = Math.ceil(length / 15)

  useEffect(() => {
    if (page <= max) {
      fetchUsers()
    }
  }, [page])

  const fetchUsers = () => {
    getUsersApi(page)
      .then(res => {
        setLength(res.data.length)
        setOptions([
          ...options,
          ...res.data.results.map((user: TUserData) => ({
            value: user.id,
            label: user.first_name || user.email
          }))
        ])
        setPage(page + 1)
      })
      .catch(err => { console.log(err) })
  }

  return (
    <SelectField
      value={value}
      options={options}
      onChange={(e) => setReliable(parseInt(e.target.value) || null)}
    />
  )
}
