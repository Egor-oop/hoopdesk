import { FC, ReactNode } from 'react'

type TAppButtonProps = {
  children: ReactNode
  variant?: 'standart' | 'secondary',
  type?: 'submit' | 'reset' | 'button'
  onSubmit?: () => void
  onClick?: () => void
}

export const AppButton: FC<TAppButtonProps> = ({ children, variant, type, onSubmit, onClick }) => {
  return (
    <button
      className={
        `px-5 py-3 rounded-sm text-sm font-medium hover:cursor-pointer hover:underline ` +
        `${variant === 'standart' || variant === undefined ? 'bg-gray-900 text-slate-50 hover:bg-gray-800 active:bg-gray-950 ' : ''}` +
        `${variant === 'secondary' ? 'bg-opacity-0 text-gray-900 hover:bg-gray-100 active:bg-gray-200 ' : ''}`
      }
      onSubmit={onSubmit}
      onClick={onClick}
      type={type || 'button'}>
      {children}
    </button>
  )
}
