/**
 * 先进先出 FIFO
 */
export class Queue {
  items: Array<any>
  constructor() {
    this.items = []
  }
  push(item: any) {
    this.items.push(item)
  }
  pop() {
    if (this.isEmpty()) {
      return null
    }
    return this.items[0]
  }
  isEmpty() {
    return this.items.length === 0
  }
  peek() {
    return this.items[this.items.length - 1]
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
export class _Queue {
  items: _Items
  len: number
  constructor() {
    this.len = 0
    this.items = {}
  }
  push(item: any) {
    this.items[this.len] = item
    this.len++
  }
  pop() {
    if (this.isEmpty()) {
      return null
    }
    let count = 0
    let result = this.items[count]
    // 所有元素向前一个一位，最后一个删除
    while (count < this.len) {
      count++
      this.items[count - 1] = this.items[count]
    }
    this.len--
    delete this.items[this.len]
    return result
  }
  isEmpty() {
    return this.len === 0
  }
  peek() {
    return this.items[this.len]
  }
  size() {
    return this.len
  }
}