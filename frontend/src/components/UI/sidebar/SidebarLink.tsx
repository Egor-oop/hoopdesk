import { FC } from 'react'
import { Link } from 'react-router-dom'

type TSidebarLinkProps = {
  name: string
  href: string
}

export const SidebarLink: FC<TSidebarLinkProps> = ({ name, href }) => {
  return (
    <Link className='block px-2 py-1 rounded-sm font-medium hover:bg-gray-100' to={href}>
      {name}
    </Link>
  )
}
