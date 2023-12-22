import { FC, ReactNode } from 'react'

type TAppButtonProps = {
  children: ReactNode
  type?: 'submit' | 'reset' | 'button'
  onSubmit?: () => void
  onClick?: () => void
}

export const AppButton: FC<TAppButtonProps> = ({ children, type, onSubmit, onClick }) => {
  return (
    <button
      className='bg-indigo-700 text-slate-50 px-5 py-3 rounded-lg text-sm font-medium hover:bg-indigo-600 active:bg-indigo-800 hover:cursor-pointer'
      onSubmit={onSubmit}
      onClick={onClick}
      type={type || 'button'}>
      {children}
    </button>
  )
}
