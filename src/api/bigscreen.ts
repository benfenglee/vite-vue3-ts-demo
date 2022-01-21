import { apiGet, apiPost, apiPut, apiDelete } from '@/utils/request'
export const getAlarmanalysisBuildStatisticsUrl = '/les/alarmAnalysis/buildStatistics'
export const getAlarmanalysisBuildStatistics = (params: any) => apiGet(getAlarmanalysisBuildStatisticsUrl, params)