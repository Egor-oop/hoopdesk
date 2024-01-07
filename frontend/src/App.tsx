import { Outlet } from 'react-router-dom'
import './App.css'
import { Sidebar } from './components'

function App() {
  return (
    <div className='text-slate-950'>
      <Sidebar />
      <main className='p-3 ml-64'>
        <div className='mx-auto w-auto block'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default App
