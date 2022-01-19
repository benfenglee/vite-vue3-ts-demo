import { useStore } from 'vuex'
export default () => {
  const store = useStore()
  const refrechCache = () => {
    store.dispatch('dict/getDictRefleshCache').then(() => {
      store.dispatch('login/getDictQueryAllDictItems')
    })
  }
  return { refrechCache }
}