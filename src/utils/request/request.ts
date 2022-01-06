import axios from 'axios'
import err from './error'
const apiBaseUrl = ''
const http = axios.create({
  baseURL: apiBaseUrl,
  timeout: 1000
})
http.interceptors.request.use((config) => {
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



