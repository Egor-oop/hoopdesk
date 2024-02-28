import { RouteObject, createBrowserRouter, Navigate } from 'react-router-dom'
import {
  Login,
  Profile,
  TaskList,
  Clients,
  Settings,
  ClientDetails,
  Organizations,
  OrganizationDetails,
  OrganizationCreate,
  ClientCreate
} from '../pages'
import { useAuth } from '../lib'
import App from '../App'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to={'/login'} />
  }
]
const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <TaskList />
      },
      {
        path: '/tickets',
        element: <TaskList />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/clients',
        element: <Clients />,
      },
      {
        path: '/clients/:id',
        element: <ClientDetails />
      },
      {
        path: '/clients/new',
        element: <ClientCreate />
      },
      {
        path: '/organizations',
        element: <Organizations />,
      },
      {
        path: '/organizations/:id',
        element: <OrganizationDetails />
      },
      {
        path: '/organizations/new',
        element: <OrganizationCreate />
      },
      {
        path: '/settings',
        element: <Settings />
      },
    ]
  },
  {
    path: '*',
    element: <Navigate to={'/'} />
  }
]

export const getRouter = () => {
  const user = useAuth()
  return createBrowserRouter(user ? protectedRoutes : publicRoutes)
}