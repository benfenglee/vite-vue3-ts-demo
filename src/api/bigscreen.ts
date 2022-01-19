import { apiGet, apiPost, apiPut, apiDelete } from '@/utils/request'
export const getAlarmanalysisBuildStatisticsUrl = '/api/v1/les/alarmAnalysis/buildStatistics'
export const getAlarmanalysisBuildStatistics = (params: any) => apiGet(getAlarmanalysisBuildStatisticsUrl, params)
  // / les / alarmAnalysis / buildStatistics