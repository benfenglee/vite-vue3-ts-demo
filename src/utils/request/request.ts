import axios from 'axios'
import err from './error'
import { postSysLoginUrl } from '@/api/login'
import { getStore } from '../storage'
import config from './config'
const http = axios.create(config)
http.interceptors.request.use((config: any) => {
  if (config.url !== postSysLoginUrl) {
    config.headers['tenant-id'] = getStore('tenantId')
    config.headers['X-Access-Token'] = getStore('token')
  }
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



