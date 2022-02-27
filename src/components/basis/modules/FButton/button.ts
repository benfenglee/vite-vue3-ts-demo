import { defineComponent, h, render } from "vue";
import "./index.scss"
// console.log(style);

// import { tuple } from '../../utils/utils'
// const ButtonTypes1 = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
type targetTypes = '_blank' | '_self' | '_parent' | '_top'
// import ButtonTypes from './buttonTypes'
// const targetTypes = () => ({
//   _blank: String,
//   _self: String,
//   _parent: String,
//   _top: String
// })
const buttonProps = () => ({
  type: String,
  disabled: Boolean,
  loading: Boolean,
  href: String,
  target: String
})
// '_blank' || '_self' || '_parent' || '_top' 
const props = buttonProps()
export default defineComponent({
  emits: ['click', 'mousedown'],
  props,
  setup(props, { attrs, slots, emit, expose }) {
    // console.log(props.href);
    const handleClick = (event: Event) => {
      if (props.loading || props.disabled) {
        event.preventDefault();
        return;
      }
      emit('click', event);
      if (props.href) {
        if (props.target) {
          window.open(props.href, props.target)
        } else {
          location.href = props.href
        }
      }
    };
    return () => {
      return h('button', {
        type: props.type,
        // ...attrs,
        class: [
          'button'
        ],
        onClick: handleClick,
      }, slots)
    }
  },
})