import { FC, useEffect, useState } from 'react'
import * as Form from '@radix-ui/react-form'

import { InputField } from '../UI/InputField'
import { AppButton } from '..'
import { deleteOrganizationApi, editOrganizationApi } from '../../api'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

export type TOrganizationCard = {
  id: number | string
  name: string
  website: string
  email: string
}

export const OrganizationCard: FC<TOrganizationCard> = ({
  id, name, website, email
}) => {
  const [orgName, setOrgName] = useState('')
  const [orgWebsite, setOrgWebsite] = useState('')
  const [orgEmail, setOrgEmail] = useState('')

  const [error, setError] = useState<any>()

  const navigate = useNavigate()

  useEffect(() => {
    setOrgName(name)
    setOrgWebsite(website)
    setOrgEmail(email)
  }, [name, website, email])

  // TODO: Error handler or smth like this

  const updateOrganization = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await editOrganizationApi(id, orgName, orgWebsite, orgEmail)
    if (res instanceof AxiosError) {
      setError(res)
    } else {
      navigate(0)
    }
  }

  const deleteOrganization = async () => {
    const res = await deleteOrganizationApi(id)
    if (res instanceof AxiosError) {
      setError(res)
    } else {
      navigate('/organizations')
    }
  }

  return (
    <div className='w-[36rem]'>
      <Form.Root onSubmit={e => { updateOrganization(e) }}>
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
        <div className='flex gap-1'>
          <AppButton type='submit'>
            Сохранить
          </AppButton>
          <AppButton type='button' onClick={deleteOrganization} variant='secondary'>
            Удалить
          </AppButton>
        </div>
      </Form.Root>
    </div>
  )
}
