import { Text } from '@radix-ui/themes'
import { Avatar } from '../Avatar'
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
        className='block px-3 py-2 rounded-t-md font-medium hover:bg-gray-100'
        to='/profile'
      >
        {/* <Avatar fallback={`${firstName.charAt(0)}${lastName.charAt(0)}`} /> */}
        <span className='block text-xl'>{firstName} {lastName}</span>
        <span className='text-slate-600'>{username}</span>
      </Link>
      <hr />
    </div>
  )
}
