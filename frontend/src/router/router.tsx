import { RouteObject, createBrowserRouter, Navigate } from "react-router-dom"
import { Login, TaskList } from '../pages'

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
    element: <TaskList />
  },
  {
    path: '*',
    element: <Navigate to={'/'} />
  }
]

export const getRouter = () => {
  const user = 'asdf' // TODO: create useAuth()
  return createBrowserRouter(user ? protectedRoutes : publicRoutes)
}