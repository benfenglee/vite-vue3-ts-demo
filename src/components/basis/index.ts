
// 注册本文件夹下所有vue文件为组件
const files = import.meta.globEager('./modules/**/*.ts')
const modules:any = {}
for (const key in files) {
  const key2= key.split('/').slice(-2,-1)[0].replace('.ts','')
  modules[key2] = files[key].default
}
export default {
  install(vue:any){
    for (const key in modules) {
      if (Object.prototype.hasOwnProperty.call(modules, key)) {
        const el = modules[key];
        vue.component(key,el)
      }
    }
  }
}