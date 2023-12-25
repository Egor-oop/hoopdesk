import React, { useState } from 'react'
import * as Form from '@radix-ui/react-form'
import { InputField } from './InputField'
import { AppButton } from '..'
import { useNavigate } from 'react-router-dom'
import { userLoginApi } from '../../api'
import { storage } from '../../utils'
import { AxiosError } from 'axios'

export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<any>()

  const navigate = useNavigate()

  const login = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await userLoginApi(username, password)
    if (res instanceof AxiosError) {
      setError(res)
    } else {
      storage.setToken(res.data.access, res.data.refresh)
      navigate(0)
    }
  }

  return (
    <>
      {error ? <p>{error.message}</p> : ''}
      <Form.Root onSubmit={e => { login(e) }}>
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
        <AppButton
          type='submit'>
          Войти
        </AppButton>
      </Form.Root>
    </>
  )
}
