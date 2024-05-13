import { FC, useEffect, useState } from 'react'
import { getMailMessages, sendMailMessage } from '../../api'
import { InputField } from '..'
import { AppButton } from '..'
import { Message } from './Message'

interface ITicketDialogProps {
  ticketId: number
}

export const TicketDialog: FC<ITicketDialogProps> = ({ ticketId }) => {
  const [messages, setMessages] = useState<TMailMessage[]>([])
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  const [message, setMessage] = useState('')

  useEffect(() => {
    const ws = new WebSocket(`ws://0.0.0.0:8000/ws/chat/${ticketId}/`)
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data)
      if (data.ticket === ticketId) {
        getNewMessages()
      }
    }
  }, [ticketId])

  useEffect(() => {
    getMessages()
  }, [page])

  const getNewMessages = () => {
    getMailMessages(ticketId)
      .then(res => {
        setMessages(prevMessages => [
          ...res.data.results.filter(
            (msg: TMailMessage) => !prevMessages.find(m => m.id === msg.id)
          ),
          ...prevMessages,
        ])
      })
      .catch(err => {
        console.error(err)
      })
  }

  const getMessages = () => {
    getMailMessages(ticketId, page)
      .then(res => {
        setMaxPage(Math.ceil(res.data.count / 15))
        setMessages(prevMessages => [
          ...prevMessages,
          ...res.data.results.filter(
            (msg: TMailMessage) => !prevMessages.find(m => m.id === msg.id)
          ),
        ])
      })
      .catch(err => {
        console.error(err)
      })
  }

  const handleScroll = (e: any) => {
    const { scrollTop, scrollHeight, offsetHeight } = e.target
    console.log(scrollTop, scrollHeight, offsetHeight)
    if (scrollTop + scrollHeight - 1 <= offsetHeight) {
      console.log("DAAAAAMN!!!!")
      if (page < maxPage) {
        setPage(prev => prev + 1)
      }
    }
  }

  const handleSendMessage = () => {
    sendMailMessage(ticketId, message)
      .then(res => {
        getNewMessages()
        setMessage('')
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div className='basis-7/12 flex gap-2 flex-col min-h-[97vh] max-h-[97vh]'>
      <div onScroll={handleScroll}
        className='flex overflow-y-scroll flex-1 flex-col-reverse gap-3 w-full pr-4'>
        {messages.map(message => (
          <Message
            key={message.id}
            content={message.content}
            created_at={message.created_at}
            from_client={message.from_client}
            from_employee={message.from_employee}
            ticket={message.ticket}
          />
        ))}
      </div>
      <div className='flex'>
        <InputField
          type='text'
          placeholder='Напишите сообщение'
          value={message}
          onChange={e => { setMessage(e.target.value) }}
          variant='standart' />
        <AppButton onClick={handleSendMessage} type='button'>Отправить</AppButton>
      </div>
    </div>
  )
}
