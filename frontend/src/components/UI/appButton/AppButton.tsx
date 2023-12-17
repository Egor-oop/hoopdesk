import { FC, ReactNode } from 'react'

type TAppButtonProps = {
  children: ReactNode
  type: 'submit' | 'reset' | 'button'
}

export const AppButton: FC<TAppButtonProps> = ({ children, type }) => {
  return (
    <button
      className='bg-indigo-700 text-slate-50 px-5 py-3 rounded-lg text-sm font-medium hover:bg-indigo-600 active:bg-indigo-800 hover:cursor-pointer'
      type={type}>
      {children}
    </button>
  )
}
