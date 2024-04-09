import { FC, useEffect, useState } from 'react'
import { AppButton, DateTimeField, InputField, SelectField } from '..'

interface ITicketCardProps {
  ticket: TTicket | null
  updateTicket: (updatedTicket: TTicketRequest) => void
}

export const TicketCard: FC<ITicketCardProps> = ({ ticket, updateTicket }) => {
  const [deadline, setDeadline] = useState<string | null>(null)
  const [priority, setPriority] = useState<number | null>(null)
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    if (ticket?.deadline) setDeadline(new Date(ticket.deadline)
      .toISOString().slice(0, 16))
    if (ticket?.priority) setPriority(ticket.priority)
    if (ticket?.is_active) setIsActive(ticket.is_active)
  }, [ticket])

  const priorityOptions = [
    { label: 'Высокий', value: 1 },
    { label: 'Средний', value: 2 },
    { label: 'Низкий', value: 3 }]

  const handleUpdate = () => {
    console.log(`deadline: ${deadline}\npriority: ${priority}\nisActive: ${isActive}`)
  }

  return (
    <div>
      {ticket
        ?
        <>
          <div className='flex flex-col gap-1 mb-3'>
            <InputField
              type='text'
              placeholder='Название'
              value={ticket.title}
              onChange={(e) => { }}
              variant='invisible-2xl'
              disabled />
            <div className='flex justify-between gap-8'>
              <DateTimeField
                value={deadline}
                onChange={e =>
                  setDeadline(new Date(e.target.value)
                    .toISOString().slice(0, 16))
                }
              />
              <button
                className='text-base font-medium hover:cursor-pointer hover:underline'
                onClick={() => setDeadline(null)}
                type='button'>Очистить</button>
            </div>
            <SelectField
              value={priority}
              options={priorityOptions}
              onChange={(e) => { setPriority(parseInt(e.target.value)) }}
            />
            <div className='flex gap-2 '>
              <span className='font-medium'>Активен: </span>
              <input
                className='w-4'
                type="checkbox"
                checked={isActive}
                onChange={() => setIsActive(!isActive)}
              />
            </div>
          </div>
          <div className='flex gap-1'>
            <AppButton onClick={handleUpdate} type='button'>
              Сохранить
            </AppButton>
          </div>
        </>
        : null}
    </div>
  )
}
