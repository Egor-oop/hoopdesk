type TUserData = {
  id: number
  first_name: string
  last_name: string
  username: string
  email: string
  is_staff: boolean
  is_active: boolean
}

type TClient = {
  id: number
  full_name: string
  email: string
  organization?: null | string | number
  organization_name?: string
}

type TOrganization = {
  id: number
  name: string
  website: string
  email: string
}

type TTicket = {
  id: number
  title: string
  reliable: TUserData | null
  client: TClient
  priority: number
  deadline: string | null
  is_active: boolean
}

type TTicketRequest = {
  priority: number,
  deadline: string | null,
  is_active: boolean,
  reliable: number | null
}

type TSelectOption = {
  label: string
  value: any
}
