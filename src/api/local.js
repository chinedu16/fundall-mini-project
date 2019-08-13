import axios from 'axios'

function saveData (userDetails) {
  localStorage.setItem('USER_TOKEN', userDetails.access_token)
  localStorage.setItem('USER_AVATAR', userDetails.avatar)
  localStorage.setItem('USER_EMAIL', userDetails.email)
  localStorage.setItem('USER_FIRSTNAME', userDetails.firstname)
  localStorage.setItem('USER_LASTNAME', userDetails.lastname)
  localStorage.setItem('USER_TARGET', userDetails.monthly_target)
  axios.defaults.headers.common['Authorization'] = `bearer ${userDetails.access_token}` ;
}

export default {
  saveData
}