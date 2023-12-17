import { useState } from 'react'
import * as Form from '@radix-ui/react-form'
import { InputField } from './InputField'
import { AppButton } from '..'

export const SignupForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  
  return (
    <Form.Root>
      <div className='flex gap-2'>
        <InputField
          type='text'
          label='Имя'
          placeholder='Кирилл'
          isRequired={true}
          name='firstName'
          value={firstName}
          onChange={(e) => { setFirstName(e.target.value) }} />
        <InputField
          type='text'
          label='Фамилия'
          placeholder='Иванов'
          isRequired={true}
          name='lastName'
          value={lastName}
          onChange={(e) => { setLastName(e.target.value) }} />
      </div>
      <InputField
        type='text'
        label='Имя пользователя'
        placeholder='kirillivanov'
        isRequired={true}
        name='username'
        value={username}
        onChange={(e) => { setUsername(e.target.value) }} />
      <InputField
        type='email'
        label='Эл. почта'
        placeholder='kirill@primer.org'
        isRequired={true}
        name='email'
        value={email}
        onChange={(e) => { setEmail(e.target.value) }} />
      <InputField
        type='password'
        label='Пароль'
        placeholder='********'
        isRequired={true}
        name='password'
        value={password}
        onChange={(e) => { setPassword(e.target.value) }} />
      <InputField
        type='password'
        label='Повторите пароль'
        placeholder='********'
        isRequired={true}
        name='password2'
        value={password2}
        onChange={(e) => { setPassword2(e.target.value) }} />
      <AppButton type='submit'>Создать аккаунт</AppButton>
    </Form.Root>
  )
}
