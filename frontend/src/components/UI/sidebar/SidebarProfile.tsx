import { FC } from 'react'
import { Link } from 'react-router-dom'

type TSidebarProfileProps = {
  username: string | undefined
  firstName: string | undefined
  lastName: string | undefined
}

export const SidebarProfile: FC<TSidebarProfileProps> = ({
  username, firstName, lastName
}) => {
  return (
    <div>
      <Link
        className='block px-2 py-1 rounded-t-sm font-medium hover:bg-gray-100'
        to='/profile'
      >
        <span className='block text-xl'>{firstName} {lastName}</span>
        <span className='text-slate-600'>{username}</span>
      </Link>
      <hr />
    </div>
  )
}
