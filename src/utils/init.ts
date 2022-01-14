import { getDictQueryAllDictItems } from '@/api/init'
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()

function init() {
  getDictQueryAllDictItems().then((res: any) => {
    const store = useStore()
    console.log(store);
  })
}
export default init