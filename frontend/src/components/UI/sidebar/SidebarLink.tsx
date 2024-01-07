import { FC } from 'react'
import { Link } from 'react-router-dom'

type TSidebarLinkProps = {
  name: string
  href: string
}

export const SidebarLink: FC<TSidebarLinkProps> = ({ name, href }) => {
  return (
    <Link className='block px-3 py-2 rounded-md font-medium hover:bg-gray-100' to={href}>
      {name}
    </Link>
  )
}
