
interface Date{
  format(fmt: string):string,
  dayhms(ms:string|number):string
}
Date.prototype.format = function(fmt):string {
  var o:any = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'H+': this.getHours(), // 24小时制
    'h+': this.getHours() % 12 === 0 ? 12 : this.getHours() % 12, // 12小时制
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds(), // 毫秒
    't': this.getHours() < 12 ? 'am' : 'pm',
    'TE': this.getHours() < 12 ? 'AM' : 'PM',
    'TC': this.getHours() < 12 ? '上午' : '下午'
  }
  if (/(y+)/.test(fmt)) {
    const str = fmt.match(/(y+)/) || []
    fmt = fmt.replace(str[0], (this.getFullYear() + '').substr(4 - str[0].length))
  }
  for (var k in o) {
    const exp = new RegExp('(' + k + ')')
    if (exp.test(fmt)) {
      const str = exp.exec(fmt) || []
      fmt = fmt.replace(str[0], (str[0].length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
// 将传入毫秒数 毫秒数转为 天 小时 分 秒 例：3000 转为 3秒
Date.prototype.dayhms = function(ms:number) {
  var str = ''
  var days = parseInt(String(ms / (1000 * 60 * 60 * 24)))
  var hours = parseInt(String((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  var minutes = parseInt(String((ms % (1000 * 60 * 60)) / (1000 * 60)))
  var seconds = (ms % (1000 * 60)) / 1000
  if (days > 0) {
    return days + ' 天 ' + hours + ' 小时 ' + minutes + ' 分钟 ' + seconds + ' 秒 '
  } else {
    if (hours > 0) {
      return hours + ' 小时 ' + minutes + ' 分钟 ' + seconds + ' 秒 '
    } else {
      if (minutes > 0) {
        return minutes + ' 分钟 ' + seconds + ' 秒 '
      } else {
        return seconds + ' 秒 '
      }
    }
  }
}