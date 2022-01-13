import { postSysLogin } from "@/api/login";
import { setStore } from '../../utils/storage'
interface Login {
  username: string,
  password: string,
  force: boolean
}
const state = {
  roleCode: 'String',
  toKen: 'String',
}
const getters = {}
const actions = {
  postSysLogin(context: any, data: Login) {
    return new Promise((resolve, reject) => {
      postSysLogin(data).then((res: any) => {
        const result = res.data.result
        context.commit('SET_LOGIN', result)
        resolve(res)
      }).catch((err: any) => reject(err))
    })
  }
}
const mutations = {
  SET_LOGIN(state: any, data: any) {
    console.log(state);
    state.toKen = data
  }

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}