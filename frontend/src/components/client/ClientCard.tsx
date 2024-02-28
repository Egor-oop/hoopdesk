import * as Form from '@radix-ui/react-form'
import { FC, useEffect, useState } from 'react'
import { AppButton, InputField, SelectField } from '..'
import { deleteClientApi, editClientApi, getOrganizationsApi } from '../../api'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

type TClientCardProps = {
  id: number | string
  fullname: string
  email: string
  organization: number | null
}

export const ClientCard: FC<TClientCardProps> = ({ id, fullname, email, organization }) => {
  const [clientOrg, setClientOrg] = useState<number | null>(null)
  const [organizations, setOrganizations] = useState<TOrganization[]>([])

  // TODO: Error handler or smth like this
  const [error, setError] = useState<any>()

  const navigate = useNavigate()

  useEffect(() => {
    setClientOrg(organization)
  }, [organization])


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

  const updateClient = async (e: React.FormEvent) => {
    // TODO try to try and catch errors to avoid errors in console
    e.preventDefault()
    console.log(id)
    const res = await editClientApi(id, email, clientOrg)
    if (res instanceof AxiosError) {
      setError(res)
    } else {
      navigate(0)
    }
  }

  const deleteClient = async () => {
    const res = await deleteClientApi(id)
    if (res instanceof AxiosError) {
      setError(res)
    } else {
      navigate('/clients')
    }
  }

  return (
    <div className='w-[36rem]'>
      <Form.Root onSubmit={e => updateClient(e)}>
        <div className='flex flex-col gap-1 mb-3'>
          <Form.Field name='fullname'>
            <InputField
              type='text'
              placeholder='Имя'
              value={fullname}
              onChange={() => { }}
              isRequired={true}
              disabled
              variant='invisible-2xl' />
          </Form.Field>
          <Form.Field name='fullname'>
            <InputField
              type='text'
              placeholder='Эл. почта'
              value={email}
              onChange={() => { }}
              isRequired={true}
              disabled
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
        <div className='flex gap-1'>
          <AppButton type='submit'>
            Сохранить
          </AppButton>
          <AppButton type='button' onClick={deleteClient} variant='secondary'>
            Удалить
          </AppButton>
        </div>
      </Form.Root>
    </div>
  )
}
