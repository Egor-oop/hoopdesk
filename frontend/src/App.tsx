import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { getRouter } from './router/router.tsx'

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={getRouter()} />
    </Suspense>
  )
}

export default App
