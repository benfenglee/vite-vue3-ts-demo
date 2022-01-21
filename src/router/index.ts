import * as VueRouter from 'vue-router'
import { routes } from './config'
const router = VueRouter.createRouter({
  // history: VueRouter.createWebHashHistory(),
  history: VueRouter.createWebHistory(),

  routes

})
router.beforeEach((to, from, next) => {
  document.title = '云平台|' + to.meta.title
  next()
})
export default router