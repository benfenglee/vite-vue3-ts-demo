import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index.ts'
import store from '@/store/index.ts'
import F from './components/basis/index'
// import Antd from 'ant-design-vue'
import "@/utils/common.ts"
import CIcon from '@components/CIcon.vue'
import 'animate.css'
createApp(App)
  // .use(Antd)
  .use(store)
  .use(router)
  .use(F)
  .component('c-icon', CIcon)
  .mount('#app')
