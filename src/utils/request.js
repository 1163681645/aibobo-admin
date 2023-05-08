import axios from 'axios'
import store from '@/store'
// import { Message } from 'element-ui'
import router from '@/router'
import { getTimeStamp } from '@/utils/auth'
const Timeout = 3600
const request = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: 'https://aibobo.10wei.top',
  timeout: 5000
})
// 请求拦截器
request.interceptors.request.use(config => {
  if (store.getters.token) {
    if (IsCheckTimeOut()) {
      store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('token超时'))
    }
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  return config
}, error => { return Promise.reject(error) })
// 响应拦截器
request.interceptors.response.use(response => {
  // const res = response.data
  return response.data
  // if (res.code === 1) {
  //   return response.res.data
  // } else {
  //   Message.error(res.message)
  //   return Promise.reject(new Error(res.message))
  // }
}, (error) => {
  // if (error.response && error.response.data && error.response.data.code === 10002) {
  //   // 后端告诉前端 代码等于10002 代表token超时
  //   store.dispatch('user/logout') // 登出操作
  //   router.push('login') // 跳转到登录也
  // } else {
  //   Message.error(error.message)
  // }
  return Promise.reject(error)
})
function IsCheckTimeOut() {
  var currentTime = Date.now()
  var timeStamp = getTimeStamp()
  return (currentTime - timeStamp) / 1000 > Timeout
}

export default request
