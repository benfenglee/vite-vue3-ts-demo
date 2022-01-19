import { getDictList, getDictRefleshCache } from '@/api/dict'
const state = {}
const getters = {}
const actions = {
  getDictList: (context: any, data: any) => {
    return getDictList(data)
  },
  getDictRefleshCache: (context: any, data: any) => {
    return getDictRefleshCache(data)
  }
}
const mutations = {}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
