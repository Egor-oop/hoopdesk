import { userLoginApi, userMeApi } from './auth'
import { getUserInfoApi } from './profile'
import {
  getClientsApi,
  getClientApi,
  createClientApi,
  editClientApi,
  deleteClientApi
} from './clients'
import {
  getOrganizationsApi,
  getOrganizationApi,
  createOrganizationApi,
  editOrganizationApi,
  deleteOrganizationApi
} from './organizations'
import {
  getTicketsApi,
  getTicketApi,
  editTicketApi,
  deleteTicketApi
} from './tickets'
import { getUsersApi } from './users'

export {
  // auth
  userLoginApi,
  userMeApi,
  getUserInfoApi,
  // clients
  getClientsApi,
  getClientApi,
  createClientApi,
  editClientApi,
  deleteClientApi,
  // organizations
  getOrganizationsApi,
  getOrganizationApi,
  createOrganizationApi,
  editOrganizationApi,
  deleteOrganizationApi,
  // tickets
  getTicketsApi,
  getTicketApi,
  editTicketApi,
  deleteTicketApi,
  // users
  getUsersApi,
}