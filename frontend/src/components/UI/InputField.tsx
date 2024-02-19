import React, { FC } from 'react'

type TInputFieldProps = {
  type: 'text' | 'password' | 'email'
  placeholder: string
  // name: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
  disabled?: boolean
  isRequired?: boolean
}

export const InputField: FC<TInputFieldProps> = ({
  type,
  placeholder,
  isRequired,
  value,
  disabled,
  onChange
}) => {
  return (
    <input
      className={`border border-zinc-300 py-2 px-2.5 w-full block ` +
      `rounded-smplaceholder:text-zinc-300 focus:outline-none focus:border-slate-300 ` +
      `${disabled ? 'hover:cursor-not-allowed' : ''}`}
      type={type}
      disabled={disabled ?? false}
      placeholder={placeholder}
      required={isRequired ?? false}
      value={value}
      onChange={onChange} />
  )
}
