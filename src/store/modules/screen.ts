// 存储屏幕信息
const state = {
  // 屏幕大小
  screenWidth: 0,
  screenHeight: 0,
  // 存储菜单栏的宽度
  menuWidth: 0
}
const getters = {
  screenWidth: (state: { screenWidth: number }) => state.screenWidth,
  screenHeight: (state: { screenHeight: number }) => state.screenHeight,
  menuWidth: (state: { menuWidth: number }) => state.menuWidth,
  // 返回顶部的高度
  screenHeader: (state: { screenHeight: number }) => state.screenHeight / 14
}
const actions = {
  setWidth(context: any, data: number) { context.commit('SET_WIDTH', data) },
  setHeight(context: any, data: number) { context.commit('SET_HEIGHT', data) },
  setMenu(context: any, data: number) { context.commit('SET_MENU', data) }
}
const mutations = {
  SET_WIDTH(state: any, data: number) { state.screenWidth = data },
  SET_HEIGHT(state: any, data: number) { state.screenHeight = data },
  SET_MENU(state: any, data: number) { state.menuWidth = data },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}