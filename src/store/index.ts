import { createStore } from 'vuex'
import screen from './modules/screen'
export default createStore({
  state: {
    count:0
  },
  getters: {},
  actions: {},
  mutations: {
    SET_COUNT(state){
      state.count ++
    }
  },
  // vuex模块化
  modules: {
    screen
  },
})