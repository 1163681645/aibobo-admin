import Cookies from 'js-cookie'

const TokenKey = 'aibobo-token'
// const TokenKey = 'hrsaas-ihrm-token'
const timeKey = 'aibobo-time-key' // 设置一个独一无二的key
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
// 获取时间戳
export function getTimeStamp() {
  return Cookies.get(timeKey)
}
// 读取时间戳
export function setTimeStamp() {
  Cookies.set(timeKey, Date.now())
}
