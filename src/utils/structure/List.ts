class ListNode {
  data: any
  // 节点的指向 (下一个)
  next: any
  constructor(data: any) {
    this.data = data
    this.next = null
  }
}
export class List {
  // items: Array<ListNode>
  // current: any
  head: any
  size: number
  constructor() {
    this.head = null
    this.size = 0
  }
  append(el: any) {
    let node = new ListNode(el)
    let current = null
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      // 从第一个列表开始寻找找到最后一个
      while (current.next) {
        current = current.next
      }
      // 为最后一个添加上节点
      current.next = node
    }
    this.size++
  }
  insert(position: number, el: any) {
    if (position < 0) {
      console.error('insert position must be > 0');
      return null
    }
    if (position > this.size) {
      console.error('insert position lt\'s too big');
      return null
    }
    const node = new ListNode(el)
    let current = this.head
    if (position === 0) {
      this.head = node
      node.next = current
    } else {
      let previous = null
      let index = 1
      while (index < position) {
        previous = current
        current = current.next
        index++
      }
      node.next = current
      previous.next = node
    }
    this.size++
    return true
  }
}