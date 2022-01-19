import { postSysLogin } from "@/api/login";
import { getDictQueryAllDictItems } from '@/api/dict'
import { setStore, getStore } from '../../utils/storage'
interface Login {
  username: string,
  password: string,
  force: boolean
}
interface State {
  roleCode: String,
  token: String,
  powerIdentity: Boolean,
  userInfo: Object,
  departs: Array<any>,
  tenantId: number | null,
  dict: Object
}
const state: State = {
  roleCode: '',
  token: '',
  powerIdentity: false,
  userInfo: {},
  departs: [],
  tenantId: null,
  dict: {}
}
const getters = {
  roleCode: (state: State) => state.roleCode,
  token: (state: State) => state.token,
  powerIdentity: (state: State) => state.powerIdentity,
  userInfo: (state: State) => state.userInfo,
  departs: (state: State) => state.departs,
  tenantId: (state: State) => state.tenantId,
  dict: (state: State) => {
    if (JSON.stringify(state.dict) === "{}") {
      return getStore('dict')
    }
    return state.dict
  }
}
const actions = {
  // 登录
  postSysLogin(context: any, data: Login) {
    return new Promise((resolve, reject) => {
      postSysLogin(data).then((res: any) => {
        const result = res.data.result
        context.commit('SET_LOGIN', result)
        resolve(res)
      }).catch((err: any) => reject(err))
    })
  },
  // 获取字典
  getDictQueryAllDictItems(context: any, data: any) {
    return new Promise((resolve, reject) => {
      getDictQueryAllDictItems(data).then((res: any) => {
        context.commit('SET_DICT', res.data.result)
        resolve(res)
      }).catch((err: any) => reject(err))
    })
  }
}
const mutations = {
  SET_LOGIN(state: any, data: any) {
    const { roleCode, token, powerIdentity, userInfo, departs } = data
    state.roleCode = roleCode
    state.token = token
    state.powerIdentity = powerIdentity
    state.userInfo = userInfo
    state.departs = departs
    state.tenantId = userInfo.relTenantIds.split(',')[0]
    // 存储token 与 tenantId
    setStore('token', token)
    setStore('tenantId', state.tenantId)
  },
  // 存储字典
  SET_DICT(state: any, dict: any) {
    setStore('dict', dict)
    state.dict = dict
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}