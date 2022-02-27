
// 从第二个字符开始大写字母转为_(小写字母) 例: ABc => a_bc
function caselc(str: string): string {
  /**
   * 时间复杂度
   * O(^n)
   * */
  let s = "";
  str
    .split("")
    .forEach((el, i) =>
      /[A-Z]/.test(el)
        ? i === 0
          ? (s += el.toLowerCase())
          : (s += "_" + el.toLowerCase())
        : (s += el)
    );
  return s;
}
// 判断是否IE<11浏览器
function isIE() {
  return navigator.userAgent.indexOf('compatible') > -1 && navigator.userAgent.indexOf('MSIE') > -1
}
function isIE11() {
  return navigator.userAgent.indexOf('Trident') > -1 && navigator.userAgent.indexOf('rv:11.0') > -1
}

// 判断是否IE的Edge浏览器
function isEdge() {
  return navigator.userAgent.indexOf('Edge') > -1 && !isIE()
}

function getIEVersion() {
  const userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
  if (isIE()) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(userAgent)
    const fIEVersion = parseFloat(RegExp['$1'])
    if (fIEVersion === 7 || fIEVersion === 8 || fIEVersion === 9 || fIEVersion === 10) {
      return fIEVersion
    } else {
      return 6// IE版本<7
    }
  } else if (isEdge()) {
    return 'edge'
  } else if (isIE11()) {
    return 11
  } else {
    return -1
  }
}

// 简易深拷贝 如果碰到 undefined 或者 函数 则会缺失
function simpleDeepCopy(copy: any) {
  return JSON.parse(JSON.stringify(copy))
}
// 复杂深拷贝
function complexDeepCopy(copy: any) {
  var result
  // 判断目标是什么类型 （包含）
  if (typeof copy === 'object') {
    if (copy === null) {
      result = null
    } else if (Array.isArray(copy)) {
      result = []
      for (let i = 0; i < copy.length; i++) {
        const el = copy[i]
        result.push(complexDeepCopy(el))
      }
    } else if (copy.constructor === RegExp) {
      result = copy
    } else {
      result = {}
      for (const k in copy) {
        if (Object.hasOwnProperty.call(copy, k)) {
          const el = copy[k]
          result[k] = complexDeepCopy(el)
        }
      }
    }
  } else {
    result = copy
  }
  return result
}
export default {
  isIE,
  isIE11,
  isEdge,
  getIEVersion,
  simpleDeepCopy,
  complexDeepCopy
}