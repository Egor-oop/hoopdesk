import { FC, useEffect, useState } from 'react'
import { AppButton, DateTimeField, InputField, SelectField } from '..'
import { TicketReliableSelect } from './TicketReliableSelect'

interface ITicketCardProps {
  ticket: TTicket | null
  updateTicket: (updatedTicket: TTicketRequest) => void
}

export const TicketCard: FC<ITicketCardProps> = ({ ticket, updateTicket }) => {
  const [priority, setPriority] = useState<number | null>(null)
  const [deadline, setDeadline] = useState<string | null>(null)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [reliable, setReliable] = useState<number | null>(null)

  useEffect(() => {
    if (ticket?.deadline) setDeadline(new Date(ticket.deadline)
      .toISOString().slice(0, 16))
    if (ticket?.priority) setPriority(ticket.priority)
    if (ticket?.is_active) setIsActive(ticket.is_active)
    if (ticket?.reliable) setReliable(ticket.reliable.id)
  }, [ticket])

  const priorityOptions = [
    { label: 'Высокий', value: 1 },
    { label: 'Средний', value: 2 },
    { label: 'Низкий', value: 3 }]

  const handleUpdate = () => {
    const updatedData = {
      priority: priority!,
      is_active: isActive,
      deadline,
      reliable
    }
    updateTicket(updatedData)
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
            <div className='flex gap-2 '>
              <span className='font-medium'>Активна: </span>
              <input
                className='w-4'
                type="checkbox"
                checked={isActive}
                onChange={() => setIsActive(!isActive)}
              />
            </div>
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
            <TicketReliableSelect
              value={reliable || null}
              setReliable={setReliable}
            />
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
