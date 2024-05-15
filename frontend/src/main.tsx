import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@radix-ui/themes/styles.css';
import { RouterProvider } from 'react-router-dom'
import { getRouter } from './router/router.tsx'
import { Provider } from 'react-redux'
import { store } from './state/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={getRouter()} />
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
