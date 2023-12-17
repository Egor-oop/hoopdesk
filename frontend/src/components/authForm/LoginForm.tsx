import { useState } from 'react'
import * as Form from '@radix-ui/react-form'
import { InputField } from './InputField'
import { AppButton } from '..'

export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Form.Root>
      <InputField
        type='text'
        label='Имя пользователя'
        placeholder='kirillivanov'
        isRequired={true}
        name='username'
        value={username}
        onChange={(e) => { setUsername(e.target.value) }} />
      <InputField
        type='password'
        label='Пароль'
        placeholder='********'
        isRequired={true}
        name='password'
        value={password}
        onChange={(e) => { setPassword(e.target.value) }} />
      <AppButton type='submit'>Войти</AppButton>
    </Form.Root>
  )
}
