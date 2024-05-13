import { FC } from "react"

interface IDateTimeFieldProps {
  value?: string | null
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
  autofocus?: boolean
  disabled?: boolean
  variant?: 'standart' | 'invisible-standart'
  isRequired?: boolean
}

export const DateTimeField: FC<IDateTimeFieldProps> = ({
  isRequired,
  value,
  autofocus,
  disabled,
  variant,
  onChange
}) => {
  return (
    <input
      className={`w-full block hover:bg-slate-50 focus:bg-slate-50 text-lg ` +
        `rounded-sm placeholder:text-zinc-300 focus:outline-none focus:border-slate-300 ` +
        // Standart
        `${variant === 'standart' ? 'py-2 px-2.5 border-zinc-300 border ' : ''}` +
        // Invisible standart
        `${variant === 'invisible-standart' ? 'py-1.5 px-1.5 focus:border-zinc-300 focus:border-b ' : ''}`}
      type='datetime-local'
      value={value ?? ''}
      required={isRequired}
      autoFocus={autofocus}
      disabled={disabled}
      onChange={onChange}
    />
  )
}
