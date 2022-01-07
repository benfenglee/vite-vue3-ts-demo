export const setStore = (name: string, value: any, time: number = (1000 * 60 * 60 * 24)) => {
  if (!global.window) return
  if (typeof name !== 'string') {
    return console.error('调用getStore,name请传入字符串');
  }
  const data = JSON.stringify(value)
  // 存入时间 (默认一天后失效)
  const now = new Date().getTime() + time
  // 存储时间
  const str = `time:${now};storageData:${data}`
  window.localStorage.setItem(name + '_storage', str)
}
export const getStore = (name: string) => {
  if (!global.window) return
  if (typeof name === 'string') {
    const _storage = window.localStorage.getItem(name + '_storage') || ''
    const storageIndex = _storage.indexOf("storageData")
    const _data = _storage.slice(storageIndex + "storageData".length + 1)
    const _now = _storage.slice(5, storageIndex)
    // 时间检测，如果已经过期了则返回null
    if (Number(_now) < new Date().getTime()) {
      delStore(name)
      return null
    }
    return JSON.parse(_data)
  }
  return console.error('调用getStore,name请传入字符串');
}
export const delStore = (name: string) => {
  if (!global.window) return
  if (typeof name === 'string') {
    window.localStorage.removeItem(name + '_storage')
  }
  return console.error('调用delStore,name请传入字符串');
}
export const clearStore = () => {
  if (!global.window) return
  window.localStorage.clear()
}