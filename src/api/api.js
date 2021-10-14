import * as axios from 'axios'

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'cf03206a-2a52-4a49-879d-252bca708e1c'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  unfollow(usersId) {
    return instance.delete(`follow/${usersId}`)
      .then(response => response.data)
  },
  follow(usersId) {
    return instance.post(`follow/${usersId}`)
      .then(response => response.data)
  },
  getProfile(userId) {
    console.warn('This shit is old? lets use new one: profileAPI')
    return profileAPI.getProfile(userId)
    /*return instance.get(`profile/${userId}`)  // teacher used all response, not cut it
      .then(response => response.data)*/
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)  // teacher used all response, not cut it
      /*.then(response => response.data)*/
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
    /*.then(response => response.data)*/
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status })
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  }
}

/*export const userProfileAPI = {  // added to usersAPI
  getAuthUserData(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data)
  }
}*/

/*export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  .then(response => response.data)
}*/

/*export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
  .then(response => response.data)
}*/