import { Outlet } from 'react-router-dom'
import './App.css'
import { Sidebar } from './components'

function App() {
  return (
    <div className='text-slate-950'>
      <Sidebar />
      <main className='md:p-3 p-1 md:ml-64'>
        <div className='mx-auto w-auto block'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default App
