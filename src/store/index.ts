import { createStore } from 'vuex'
import screen from './modules/screen'
import login from './modules/login'
import assetsFile from './modules/assets'
import dict from './modules/dict'
import bigscreen from './modules/bigscreen'
export default createStore({
  state: {},
  getters: {},
  actions: {},
  mutations: {
  },
  // vuex模块化
  modules: {
    screen,
    login,
    assetsFile,
    dict,
    bigscreen
  },
})