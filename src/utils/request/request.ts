import axios from 'axios'
import err from './error'
const apiBaseUrl = ''
const http = axios.create({
  baseURL: apiBaseUrl,
  timeout: 30000
})
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzbm93Rmxha2VJZCI6Njc4NjcyNjM0NzQ5MTI0NjA4LCJleHAiOjE2NDIyNzcwMzAsInVzZXJJZCI6ImU5Y2EyM2Q2OGQ4ODRkNGViYjE5ZDA3ODg5NzI3ZGFlIiwidXNlcm5hbWUiOiJhZG1pbiJ9.QfrckdyR1C2MjbP-OKHM5jy7ou-OEjLYey_uqyG-0TY'
http.interceptors.request.use((config: any) => {
  config.headers['tenant-id'] = '3'
  config.headers['X-Access-Token'] = token
  // 在请求前干点什么
  return config
}, (err: any) => {
  return Promise.reject(err)
})
http.interceptors.response.use((response) => {
  // 对返回的结果做些什么
  return response
}, err)
export default http



