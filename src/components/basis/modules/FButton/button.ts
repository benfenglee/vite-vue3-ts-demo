import { defineComponent, h, render } from "vue";
import ButtonTypes from './buttonTypes'
const buttonProps = () => ({
  type:String
})
const props = buttonProps()
export default defineComponent({
  emits:['click','mousedown'],
  props,
  setup(props, { attrs, slots, emit, expose }){
    console.log(props);
    console.log(slots);
    console.log(attrs);
    return () => {
      return h('button', {}, 'xxxx')
    }
  },
})