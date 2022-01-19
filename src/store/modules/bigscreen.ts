import { getAlarmanalysisBuildStatistics } from '@/api/bigscreen'
const actions = {
  getAlarmanalysisBuildStatistics(context: any, data: any) {
    return getAlarmanalysisBuildStatistics(data)
  }
}
export default {
  namespaced: true,
  actions
}