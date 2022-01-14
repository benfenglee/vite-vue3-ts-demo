// 基石
import { apiGet, apiPost, apiPut, apiDelete } from '@/utils/request'
// 获取字典
export const getDictQueryAllDictItemsUrl = '/api/v1/sys/dict/queryAllDictItems'
export const getDictQueryAllDictItems = (params: any) => apiGet(getDictQueryAllDictItemsUrl, params)