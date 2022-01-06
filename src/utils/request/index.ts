import http from './request'
// 返回四种简介的调用
export const apiGet = (url: string, params?: null) => {
  return http({ url, method: 'GET', params })
}
export const apiPost = (url: string, params?: null) => {
  return http({ url, method: 'POST', data: params })
}
export const apiPut = (url: string, params?: null) => {
  return http({ url, method: 'GET', data: params })
}
export const apiDelete = (url: string, params?: null) => {
  return http({ url, method: 'GET', params })
}