// 存储屏幕信息
const state = {
  // 屏幕大小
  screenWidth: 0,
  screenHeight: 0
}
const getters = {
  screenWidth: (state: { screenWidth: any }) => state.screenWidth,
  screenHeight: (state: { screenHeight: any }) => state.screenHeight,
}
const actions = {
  setWidth(context: any, data: number) {
    context.commit('SET_WIDTH', data)
  },
  setHeight(context: any, data: number) {
    context.commit('SET_HEIGHT', data)
  }
}
const mutations = {
  SET_WIDTH(state: any, data: number) {
    state.screenWidth = data
  },
  SET_HEIGHT(state: any, data: number) {
    state.screenHeight = data
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}