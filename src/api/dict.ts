// 
import { apiGet, apiPost, apiPut, apiDelete } from '@/utils/request'
// 获取字典列表
export const getDictListUrl = '/sys/dict/list'
export const getDictList = (params: any) => apiGet(getDictListUrl, params)
// 获取全局字典
export const getDictQueryAllDictItemsUrl = '/sys/dict/queryAllDictItems'
export const getDictQueryAllDictItems = (params: any) => apiGet(getDictQueryAllDictItemsUrl, params)
// 刷新缓存
export const getDictRefleshCacheUrl = '/sys/dict/refleshCache'
export const getDictRefleshCache = (params: any) => apiGet(getDictRefleshCacheUrl, params)