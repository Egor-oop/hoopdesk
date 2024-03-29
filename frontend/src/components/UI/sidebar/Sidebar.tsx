import { Box } from '@radix-ui/themes'
import { SidebarLink } from './SidebarLink'
import { SidebarProfile } from './SidebarProfile'
import { useEffect, useState } from 'react'
import { userMeApi } from '../../../api'

export const Sidebar = () => {
  const [userData, setUserData] = useState<TUserData>()

  const links = [
    { name: 'Панель управления', href: '/' },
    { name: 'Задачи', href: '/tickets' },
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
    <Box className='flex flex-col flex-shrink-0 flex-grow-0 w-64 p-3 gap-2 bg-white fixed'>
      <SidebarProfile
        username={userData?.username}
        firstName={userData?.first_name}
        lastName={userData?.last_name}
      />
      <Box className='flex flex-col'>
        {links.map(link => (
          <SidebarLink key={link.name} name={link.name} href={link.href} />
        ))}
      </Box>
    </Box>
  )
}
