import { createStore } from 'vuex'
import screen from './modules/screen'
import login from './modules/login'
export default createStore({
  state: {},
  getters: {},
  actions: {},
  mutations: {
  },
  // vuex模块化
  modules: {
    screen,
    login
  },
})