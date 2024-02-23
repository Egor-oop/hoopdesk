import React, { FC } from 'react'

type TInputFieldProps = {
  type: 'text' | 'password' | 'email'
  placeholder: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
  autofocus?: boolean
  disabled?: boolean
  variant?: 'standart' | 'invisible-2xl' | 'invisible-standart'
  isRequired?: boolean
}

export const InputField: FC<TInputFieldProps> = ({
  type,
  placeholder,
  isRequired,
  value,
  autofocus,
  disabled,
  variant,
  onChange
}) => {
  return (
    <input
      className={`w-full block hover:bg-slate-50 focus:bg-slate-50 ` +
      `rounded-sm placeholder:text-zinc-300 focus:outline-none focus:border-slate-300 ` +
      // Standart
      `${variant === 'standart' ? 'py-2 px-2.5 border-zinc-300 border ' : ''}` +
      // Invisible standart
      `${variant === 'invisible-standart' ? 'py-1.5 px-1.5 focus:border-zinc-300 focus:border-b ' : ''}` +
      // Invisible 2xl
      `${variant === 'invisible-2xl' ? 'py-1.5 px-1.5 focus:border-zinc-300 focus:border-b text-2xl font-medium ' : ''}` +
      // Is disabled
      `${disabled ? 'hover:cursor-not-allowed' : ''}`}
      type={type}
      disabled={disabled ?? false}
      placeholder={placeholder}
      required={isRequired ?? false}
      value={value}
      onChange={onChange}
      autoFocus={autofocus}/>
  )
}
