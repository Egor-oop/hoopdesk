import { Box } from '@radix-ui/themes'
import { SidebarLink } from './SidebarLink'
import { SidebarProfile } from './SidebarProfile'
import { useEffect, useState } from 'react'
import { userMeApi } from '../../../api'
import { useNavigate } from 'react-router-dom'

export const Sidebar = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState<TUserData>()

  const links = [
    { name: 'Панель управления', href: '/' },
    { name: 'Заявки', href: '/tickets' },
    { name: 'Клиенты', href: '/clients' },
    { name: 'Организации', href: '/organizations' },
    { name: 'Настройки', href: '/settings' },
  ]

  useEffect(() => {
    userMeApi()
      .then(res => {
        setUserData(res.data)
      })
      .catch(err => err)
  }, [])

  return (
    <div className='md:flex hidden flex-col flex-shrink-0 flex-grow-0 w-64 p-3 gap-2 bg-white fixed'>
      <SidebarProfile
        username={userData?.username}
        firstName={userData?.first_name}
        lastName={userData?.last_name}
      />
      <div className='flex flex-col'>
        {links.map(link => (
          <SidebarLink key={link.name} name={link.name} href={link.href} />
        ))}
      </div>
      {history.state.idx !== 0 ?
        <button
          className='block px-2 py-2 rounded-sm font-medium hover:bg-gray-100'
          onClick={() => navigate(-1)}>&larr;</button>
        : null
      }
    </div>
  )
}
