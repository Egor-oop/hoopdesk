import * as Form from '@radix-ui/react-form'
import React, { FC } from 'react'

type TInputFieldProps = {
  label: string
  type: 'text' | 'password' | 'email'
  placeholder: string
  isRequired: boolean
  name: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
}

export const InputField: FC<TInputFieldProps> = ({
  label,
  type,
  placeholder,
  isRequired,
  name,
  value,
  onChange
}) => {
  return (
    <Form.Field className='mb-3 w-full' name={name}>
      <Form.Label className=''>{label}</Form.Label>
      <Form.Control asChild>
        <input
          className='border border-zinc-300 py-2 px-2.5 w-full block rounded-sm
         placeholder:text-zinc-300 focus:outline-none focus:border-slate-300'
          type={type}
          placeholder={placeholder}
          required={isRequired}
          value={value}
          onChange={onChange} />
      </Form.Control>
    </Form.Field>
  )
}
