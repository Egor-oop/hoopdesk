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
      className='bg-gray-900 text-slate-50 px-5 py-3 rounded-sm text-sm font-medium
      hover:bg-gray-800 active:bg-gray-950 hover:cursor-pointer'
      onSubmit={onSubmit}
      onClick={onClick}
      type={type || 'button'}>
      {children}
    </button>
  )
}
