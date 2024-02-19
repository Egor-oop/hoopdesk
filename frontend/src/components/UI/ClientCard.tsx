import { FC } from 'react'

type TClientCardProps = {
  fullname: string
  email: string
}

export const ClientCard: FC<TClientCardProps> = ({fullname, email}) => {
  return (
    <div>
      <span className='block text-2xl font-medium'>{fullname}</span>
      <span className='text-slate-600'>{email}</span>
    </div>
  )
}
