import * as Form from '@radix-ui/react-form'
import React, { useState } from 'react'
import { AppButton, InputField } from '../../components'
import { useNavigate } from 'react-router-dom'
import { createOrganizationApi } from '../../api'
import { AxiosError } from 'axios'

export const OrganizationCreate = () => {
  const [orgName, setOrgName] = useState('')
  const [orgWebsite, setOrgWebsite] = useState('')
  const [orgEmail, setOrgEmail] = useState('')

  const [error, setError] = useState<any>()

  const navigate = useNavigate()

  const createOrganization = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await createOrganizationApi(orgName, orgWebsite, orgEmail)
    if (res instanceof AxiosError) {
      setError(res)
    } else {
      navigate(`/organizations/${res.data.id}`)
    }
  }
  // TODO add error handler
  return (
    <div className='w-[36rem]'>
      <Form.Root onSubmit={e => { createOrganization(e) }}>
        <div className='flex flex-col gap-1 mb-3'>
          <Form.Field name='name'>
            <InputField
              type='text'
              placeholder='Название организации'
              value={orgName}
              onChange={(e) => { setOrgName(e.target.value) }}
              isRequired={true}
              autofocus={true}
              variant='invisible-2xl' />
          </Form.Field>
          <Form.Field name='website'>
            <InputField
              type='text'
              placeholder='Сайт организации'
              value={orgWebsite}
              onChange={(e) => { setOrgWebsite(e.target.value) }}
              variant='invisible-standart' />
          </Form.Field>
          <Form.Field name='email'>
            <InputField
              type='text'
              placeholder='Эл. почта организации'
              value={orgEmail}
              onChange={(e) => { setOrgEmail(e.target.value) }}
              variant='invisible-standart' />
          </Form.Field>
        </div>
        <AppButton type='submit'>
          Добавить
        </AppButton>
      </Form.Root>
    </div>
  )
}
