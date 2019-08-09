
/*
ActionType, ActionInstance, Area, Country, EntityType,
EntityInstance, Lga, Screen, State, Territory, Visualization, Zone
create
view
list
update
delete

Auth
login

Location
create
view
list

Organization, User
create
setup
view
list
update
delete

*/
import axios from 'axios'

const baseUrl = 'https://marketapi.fieldinsight.net'

async function logIn (username, password) {
  const response = await axios.post(`${baseUrl}/login`, { username, password })
  return response
}

async function createActionType (actionTypeData) {
  const response = await axios.post(`${baseUrl}/actionType`, actionTypeData)
  return response
}

async function viewActionType (id) {
  const response = await axios.get(`${baseUrl}/actionType/${id}`)
  return response
}

async function listActionTypes () {
  const response = await axios.get(`${baseUrl}/actionType`)
  return response
}

async function updateActionType (id, data) {
  const response = await axios.put(`${baseUrl}/actionType/${id}`, data)
  return response
}

async function deleteActionType (id) {
  const response = await axios.delete(`${baseUrl}/actionType/${id}`)
  return response
}

async function createActionInstance (actionInstanceData) {
  const response = await axios.post(`${baseUrl}/actionInstance`, actionInstanceData)
  return response
}

async function viewActionInstance (id) {
  const response = await axios.get(`${baseUrl}/actionInstance/${id}`)
  return response
}

async function listActionInstances () {
  const response = await axios.get(`${baseUrl}/actionInstance`)
  return response
}

async function updateActionInstance (id, data) {
  const response = await axios.put(`${baseUrl}/actionInstance/${id}`, data)
  return response
}

async function deleteActionInstance (id) {
  const response = await axios.delete(`${baseUrl}/actionInstance/${id}`)
  return response
}

async function createArea (areaData) {
  const response = await axios.post(`${baseUrl}/area`, areaData)
  return response
}

async function viewArea (id) {
  const response = await axios.get(`${baseUrl}/area/${id}`)
  return response
}

async function listAreas () {
  const response = await axios.get(`${baseUrl}/area`)
  return response
}

async function updateArea (id, data) {
  const response = await axios.put(`${baseUrl}/area/${id}`, data)
  return response
}

async function deleteArea (id) {
  const response = await axios.delete(`${baseUrl}/area/${id}`)
  return response
}

async function createEntityType (entityTypeData) {
  const response = await axios.post(`${baseUrl}/entityType`, entityTypeData)
  return response
}

async function viewEntityType (id) {
  const response = await axios.get(`${baseUrl}/entityType/${id}`)
  return response
}

async function listEntityTypes () {
  const response = await axios.get(`${baseUrl}/entityType`)
  return response
}

async function updateEntityType (id, data) {
  const response = await axios.put(`${baseUrl}/entityType/${id}`, data)
  return response
}

async function deleteEntityType (id) {
  const response = await axios.delete(`${baseUrl}/entityType/${id}`)
  return response
}

async function createEntityInstance (entityInstanceData) {
  const response = await axios.post(`${baseUrl}/entityInstance`, entityInstanceData)
  return response
}

async function viewEntityInstance (id) {
  const response = await axios.get(`${baseUrl}/entityInstance/${id}`)
  return response
}

async function listEntityInstances () {
  const response = await axios.get(`${baseUrl}/entityInstance`)
  return response
}

async function updateEntityInstance (id, data) {
  const response = await axios.put(`${baseUrl}/entityInstance/${id}`, data)
  return response
}

async function deleteEntityInstance (id) {
  const response = await axios.delete(`${baseUrl}/entityInstance/${id}`)
  return response
}

async function createLga (lgaData) {
  const response = await axios.post(`${baseUrl}/lga`, lgaData)
  return response
}

async function viewLga (id) {
  const response = await axios.get(`${baseUrl}/lga/${id}`)
  return response
}

async function listLgas () {
  const response = await axios.get(`${baseUrl}/lga`)
  return response
}

async function updateLga (id, data) {
  const response = await axios.put(`${baseUrl}/lga/${id}`, data)
  return response
}

async function deleteLga (id) {
  const response = await axios.delete(`${baseUrl}/lga/${id}`)
  return response
}

async function createLocation (locationData) {
  const response = await axios.post(`${baseUrl}/location`, locationData)
  return response
}

async function viewLocation (id) {
  const response = await axios.get(`${baseUrl}/location/${id}`)
  return response
}

async function listLocations () {
  const response = await axios.get(`${baseUrl}/location`)
  return response
}

async function createOrganization (organizationData) {
  const response = await axios.post(`${baseUrl}/organization`, organizationData)
  return response
}

async function viewOrganization (id) {
  const response = await axios.get(`${baseUrl}/organization/${id}`)
  return response
}

async function listOrganizations () {
  const response = await axios.get(`${baseUrl}/organization`)
  return response
}

async function updateOrganization (id, data) {
  const response = await axios.put(`${baseUrl}/organization/${id}`, data)
  return response
}

async function deleteOrganization (id) {
  const response = await axios.delete(`${baseUrl}/organization/${id}`)
  return response
}

async function createState (stateData) {
  const response = await axios.post(`${baseUrl}/state`, stateData)
  return response
}

async function viewState (id) {
  const response = await axios.get(`${baseUrl}/state/${id}`)
  return response
}

async function listStates () {
  const response = await axios.get(`${baseUrl}/state`)
  return response
}

async function updateState (id, data) {
  const response = await axios.put(`${baseUrl}/state/${id}`, data)
  return response
}

async function deleteState (id) {
  const response = await axios.delete(`${baseUrl}/state/${id}`)
  return response
}

async function createTerritory (territoryData) {
  const response = await axios.post(`${baseUrl}/territory`, territoryData)
  return response
}

async function viewTerritory (id) {
  const response = await axios.get(`${baseUrl}/territory/${id}`)
  return response
}

async function listTerritories () {
  const response = await axios.get(`${baseUrl}/territory`)
  return response
}

async function updateTerritory (id, data) {
  const response = await axios.put(`${baseUrl}/territory/${id}`, data)
  return response
}

async function deleteTerritory (id) {
  const response = await axios.delete(`${baseUrl}/territory/${id}`)
  return response
}

async function createUser (userData) {
  const response = await axios.post(`${baseUrl}/user`, userData)
  return response
}

async function getUserSetup (id) {
  const response = await axios.get(`${baseUrl}/user/setup/${id}`)
  return response
}

async function viewUser (id) {
  const response = await axios.get(`${baseUrl}/user/${id}`)
  return response
}

async function listUsers () {
  const response = await axios.get(`${baseUrl}/user`)
  return response
}

async function updateUser (id, data) {
  const response = await axios.put(`${baseUrl}/user/${id}`, data)
  return response
}

async function deleteUser (id) {
  const response = await axios.delete(`${baseUrl}/user/${id}`)
  return response
}

async function createZone (zoneData) {
  const response = await axios.post(`${baseUrl}/zone`, zoneData)
  return response
}

async function viewZone (id) {
  const response = await axios.get(`${baseUrl}/zone/${id}`)
  return response
}

async function listZones () {
  const response = await axios.get(`${baseUrl}/zone`)
  return response
}

async function updateZone (id, data) {
  const response = await axios.put(`${baseUrl}/zone/${id}`, data)
  return response
}

async function deleteZone (id) {
  const response = await axios.delete(`${baseUrl}/zone/${id}`)
  return response
}

export default {
  // loadEntities,
  logIn,

  createActionType,
  viewActionType,
  listActionTypes,
  updateActionType,
  deleteActionType,

  createActionInstance,
  viewActionInstance,
  listActionInstances,
  updateActionInstance,
  deleteActionInstance,

  createArea,
  viewArea,
  listAreas,
  updateArea,
  deleteArea,

  createEntityInstance,
  viewEntityInstance,
  listEntityInstances,
  updateEntityInstance,
  deleteEntityInstance,

  createEntityType,
  viewEntityType,
  listEntityTypes,
  updateEntityType,
  deleteEntityType,

  createLga,
  viewLga,
  listLgas,
  updateLga,
  deleteLga,

  createLocation,
  viewLocation,
  listLocations,

  createOrganization,
  viewOrganization,
  listOrganizations,
  updateOrganization,
  deleteOrganization,

  createState,
  viewState,
  listStates,
  updateState,
  deleteState,

  createTerritory,
  viewTerritory,
  listTerritories,
  updateTerritory,
  deleteTerritory,

  createUser,
  getUserSetup,
  viewUser,
  listUsers,
  updateUser,
  deleteUser,

  createZone,
  viewZone,
  listZones,
  updateZone,
  deleteZone

}