import React from 'react'
import { Table } from '../components'

export const Clients = () => {
  const lst = [{
    id: 1234,
  name: 'string',
  website: 'string',
  email: 'string',}
  ]
  return (
    <div>
      <Table data={lst} variant='clients' />
    </div>
  )
}
