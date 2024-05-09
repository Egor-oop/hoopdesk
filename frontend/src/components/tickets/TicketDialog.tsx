import { FC, useEffect } from 'react'

interface ITicketDialogProps {
  ticketId: number
}

export const TicketDialog: FC<ITicketDialogProps> = ({ ticketId }) => {
  useEffect(() => {
    const ws = new WebSocket(`ws://0.0.0.0:8000/ws/chat/${ticketId}/`)

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data)
      if (data.ticket === ticketId) {
        console.log(data)
      }
    }

  }, [])

  const getMessages = () => {
    
  }

  return (
    <div className='basis-7/12'>
      TicketDialog
    </div>
  )
}
