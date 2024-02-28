import * as Form from '@radix-ui/react-form'
import React, { useEffect, useState } from 'react'
import { AppButton, InputField, SelectField } from '../../components'
import { useNavigate } from 'react-router-dom'
import { createClientApi, getOrganizationsApi } from '../../api'
import { AxiosError } from 'axios'

export const ClientCreate = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [clientOrg, setClientOrg] = useState<number | null>(null)

  const [organizations, setOrganizations] = useState<TOrganization[]>([])

  const [error, setError] = useState<any>()

  const navigate = useNavigate()

  useEffect(() => {
    getOrganizationsApi()
      .then(res => {
        setOrganizations(res.data)
      })
      .catch(err => err)
  }, [])

  const options: TSelectOption[] = [
    { value: null, label: 'Нет организации' },
    ...organizations.map(org => ({
      value: org?.id,
      label: org?.name
    }))
  ]

  const createClient = async (e: React.FormEvent) => {
    e.preventDefault()
    debugger
    const res = await createClientApi(fullname, email, clientOrg)
    if (res instanceof AxiosError) {
      setError(res)
    } else {
      navigate(`/clients/${res.data.id}`)
    }
  }
  // TODO add error handler
  return (
    <div className='w-[36rem]'>
      <Form.Root onSubmit={e => createClient(e)}>
        <div className='flex flex-col gap-1 mb-3'>
          <Form.Field name='fullname'>
            <InputField
              type='text'
              placeholder='Имя'
              value={fullname}
              onChange={e => setFullname(e.target.value)}
              isRequired={true}
              variant='invisible-2xl' />
          </Form.Field>
          <Form.Field name='fullname'>
            <InputField
              type='text'
              placeholder='Эл. почта'
              value={email}
              onChange={e => setEmail(e.target.value)}
              isRequired={true}
              variant='invisible-standart' />
          </Form.Field>
          <Form.Field name='organization'>
            <SelectField
              value={clientOrg}
              options={options}
              onChange={e => setClientOrg(parseInt(e.target.value) || null)}
              variant='invisible-standart'
            />
          </Form.Field>
        </div>
        <AppButton type='submit'>
          Создать
        </AppButton>
      </Form.Root>
    </div>
  )
}
