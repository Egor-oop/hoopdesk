import React, { FC } from 'react'

type TSelectFieldProps = {
  value: number | string | null
  options: TSelectOption[]
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void
  autofocus?: boolean
  disabled?: boolean
  variant?: 'standart' | 'invisible-standart'
}

export const SelectField: FC<TSelectFieldProps> = ({
  value,
  options,
  onChange,
  disabled,
  autofocus,
  variant
}) => {
  return (
    <select
      className={`w-full block hover:bg-slate-50 focus:bg-slate-50 ` +
        `rounded-sm placeholder:text-zinc-300 focus:outline-none focus:border-slate-300 ` +
        // Standart
        `${variant === 'standart' || variant === undefined ? 'py-2 px-2.5 border-zinc-300 border ' : ''}` +
        // Invisible standart
        `${variant === 'invisible-standart' ? 'py-1.5 px-1.5 focus:border-zinc-300 focus:border-b ' : ''}` +
        // Is disabled
        `${disabled ? 'bg-white hover:cursor-not-allowed' : ''}`}
      value={value || undefined}
      onChange={onChange}
      disabled={disabled}
      autoFocus={autofocus}
    >
      {options.map(option => (
        <option key={option.value} value={option.value || undefined}>{option.label}</option>
      ))}
    </select>
  )
}
