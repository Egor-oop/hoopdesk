import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@radix-ui/themes/styles.css';
import { RouterProvider } from 'react-router-dom'
import { getRouter } from './router/router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={getRouter()} />
    </Suspense>
  </React.StrictMode>,
)
