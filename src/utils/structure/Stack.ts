/**
 * @Stack FILO先进后出
 */
// 使用数组构建栈
class Stack {
  items: Array<any>
  constructor() {
    this.items = []
  }
  push(item: any) {
    this.items.push(item)
  }
  pop() {
    if (this.isEmpty()) {
      console.error('Stack ls empty');
      return null
    }
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  toString() {
    let str = ''
    for (const item of this.items) {
      if (/object|function/.test(typeof item)) {
        str += JSON.stringify(item)
      } else {
        str += item
      }
    }
    return str
  }
}
// 使用对象构建栈
class _Stack {
  items: _Items
  len: number
  constructor() {
    this.items = {}
    this.len = 0
  }
  push(item: any) {
    this.items[this.len] = item
  }
  pop() {
    if (this.isEmpty()) {
      return null
    }
    const result = this.items[this.len]
    delete this.items[this.len]
    this.len--
    return result
  }
  isEmpty() {
    return this.len === 0
  }
  size() {
    return this.len
  }
  peek() {
    return this.items[this.len]
  }
  toString() {
    let str = ''
    for (const k in this.items) {
      if (Object.prototype.hasOwnProperty.call(this.items, k)) {
        const el = this.items[k];
        if (/object|function/.test(typeof el)) {
          str += JSON.stringify(el)
        } else {
          str += el
        }
      }
    }
    return str
  }
}