import request from '@/utils/request'

// 账号登陆接口
export function login(data) {
  return request({
    url: '/webapi/User/webPassLogin',
    method: 'POST',
    data
  })
}

// 手机号验证码登陆
export function phone_login(data) {
  return request({
    url: '/webapi/User/userSmsLogin',
    method: 'POST',
    data
  })
}

// 获取手机验证码
export function getSMSCode(data) {
  return request({
    url: '/webapi/User/getSMSCode',
    method: 'POST',
    data
  })
}

// export function login(data) {
//   return request({
//     url: '/sys/login',
//     method: 'POST',
//     data
//   })
// }

