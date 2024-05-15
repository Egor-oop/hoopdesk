import React, { useState } from 'react'
import * as Form from '@radix-ui/react-form'
import { InputField } from './InputField'
import { AppButton } from '..'
import { useNavigate } from 'react-router-dom'
import { userLoginApi } from '../../api'
import { storage } from '../../utils'

export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<any>()

  const navigate = useNavigate()

  const login = async (e: React.FormEvent) => {
    e.preventDefault()
    await userLoginApi(username, password)
      .then(res => {
        storage.setToken(res.data.access, res.data.refresh)
        navigate(0)
      })
      .catch(err => {
        setError(err.response.status)
      })
  }

  return (
    <>
      {error === 401 ?
        <div className='text-slate-50 bg-amber-500 border-amber-600 rounded-sm border-[1.5px] mb-3 flex justify-between'>
          <span className='p-2'>Имя пользователя или пароль неверены</span>
          <div className='hover:bg-amber-600 hover:cursor-pointer p-2'
            onClick={() => setError(null)}>
            x
          </div>
        </div>
        : ''}
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
