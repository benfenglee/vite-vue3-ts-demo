interface Array<T> {
  remove: (val: any) => Boolean
}
Array.prototype.indexOf = function (val: any): number {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === val) return i
  }
  return -1
}
Array.prototype.remove = function (val: any): Boolean {
  const i = this.indexOf(val)
  if (i > -1) {
    this.splice(i, 1)
    return true
  } else {
    return false
  }
}