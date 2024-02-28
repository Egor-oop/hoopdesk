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
  organization: null | string | number
}

type TOrganization = {
  id: number
  name: string
  website: string
  email: string
}

type TSelectOption = {
  label: string
  value: string | number | null
}
