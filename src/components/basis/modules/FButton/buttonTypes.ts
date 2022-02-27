
import {tuple} from '../../utils/utils'
const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
export type ButtonType = typeof ButtonTypes[number]
class ButtonProps {
  type?:String
  size?:String
  style?:[String,Object,Array<string|object>]
}
// export default ButtonProps
export default () => ({})
// const buttonProps = () => ({
//   type:String,
//   size:String,
//   disabled:Boolean,
//   icon:any,
//   // type:Proptype
// })