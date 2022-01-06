import { useStore } from 'vuex'
export default function () {
  const store = useStore()
  store.dispatch('screen/setWidth', window.innerWidth)
  store.dispatch('screen/setHeight', window.innerHeight)
  const lodStore = localStorage.getItem('store_Storage')
  // 检查缓存有没有数据，如果有则取出
  if(lodStore){
    store.replaceState(JSON.parse(lodStore))
    localStorage.removeItem('store_Storage')
  }
  // 刷新前 存储store的数据
  window.addEventListener("beforeunload", function (e) {
    const newStore = JSON.stringify(store.state)
    localStorage.setItem('store_Storage',newStore)
  });
}