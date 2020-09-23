/**
 *格式化时间
 *yyyy-MM-dd hh:mm:ss
 */
/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} fmt // 放入你需要转换的时间格式
 * @returns {string}
 */
export function formatDate(time, fmt) {
  if (time === undefined || '') {
    return
  }
  const date = new Date(time * 1000)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
/*
 * 正则匹配字符串中的连续11位数字，替换中间5位为*号，输出常见的隐匿手机号的格式
 */
export function hidePhone(phone) {
  return String(phone).replace(/(\d{3})\d{5}(\d{3})/, '$1*****$2')
}
