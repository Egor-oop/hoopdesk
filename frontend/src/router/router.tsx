import { RouteObject, createBrowserRouter, Navigate } from 'react-router-dom'
import { Login, TaskList } from '../pages'
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