import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
// import store from '@/store/index'
// .use(store)
createApp(App)
.use(router).mount('#app')
