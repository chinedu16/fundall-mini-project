
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

const baseUrl = ' https://test.fundall.io'
const AUTH_TOKEN = localStorage.getItem('USER_TOKE')
axios.defaults.headers.common['Authorization'] = `bearer ${AUTH_TOKEN}` ;
axios.defaults.headers.post['Content-Type'] = ' application/json';

async function logIn (data) {
  const response = await axios.post(`${baseUrl}/api/v1/login`, data)
  return response
}

async function register (data) {
  const response = await axios.post(`${baseUrl}/api/v1/register`, data)
  return response
}

async function getExpenses (jwt_token) {
  const response = await axios.get(`${baseUrl}/api/v1/base/expenses`, {
    headers: {
      Authorization: `Bearer ${jwt_token}`
    }
  })
  return response
}

async function profile (jwt_token) {
  const response = await axios.get(`${baseUrl}/api/v1/base/profile`, {
    headers: {
      Authorization: `Bearer ${jwt_token}`
    }
  })
  return response
}

async function addExpenses (data, jwt_token) {
  const response = await axios.post(`${baseUrl}/api/v1/base/expense`, data , {
    headers: {
      Authorization: `Bearer ${jwt_token}`
    }
  })
  return response
}

async function updateTarget (data, jwt_token) {
  const response = await axios.post(`${baseUrl}/api/v1/base/monthly-target`, data , {
    headers: {
      Authorization: `Bearer ${jwt_token}`
    }
  })
  return response
}

async function updateAvatar (formData, jwt_token) {
  const response = await axios.post(`${baseUrl}/api/v1/base/avatar`, {avatar: formData } , {
    headers: {
      'Authorization': `Bearer ${jwt_token}`,
      'Content-Type': 'multipart/form-data'
    }
  })
  return response
}

async function nextPage (id, jwt_token) {
  const response = await axios.get(`${baseUrl}/api/v1/base/expenses?page=${id}`, {
    headers: {
      Authorization: `Bearer ${jwt_token}`
    }
  })
  return response
}

async function viewActionType (id) {
  const response = await axios.get(`${baseUrl}/actionType/${id}`)
  return response
}

export default {
  // loadEntities,
  logIn,
  register,
  profile,

  getExpenses,
  addExpenses,
  viewActionType,
  updateTarget,
  updateAvatar,

  nextPage
}