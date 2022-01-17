import * as VueRouter from 'vue-router'
import { routes } from './config'
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes

})
router.beforeEach((to, from, next) => {
  document.title = '云平台|' + to.meta.title
  next()
})
export default router