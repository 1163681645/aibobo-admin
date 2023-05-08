import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
import { login, phone_login } from '@/api/user'

const state = {
  token: getToken(),
  userInfo: {}
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  },
  setUserInfo(state, result) {
    state.userInfo = result
  },
  removeUserInfo(state) {
    state.setUserInfo = {}
  }
}
const actions = {
  async login(context, data) {
    console.log(1111, data)
    // const res = await login(JSON.stringify(data))
    const res = await login(data)
    context.commit('setToken', res)
    setTimeStamp() // 设置当前的时间戳
  },
  // async getUserInfo(context) {
  //   const res = await getUserInfo()
  //   const baseInfo = await getUserDetailById(res.userId)
  //   const baseResult = { ...res, ...baseInfo }
  //   context.commit('setUserInfo', baseResult)
  //   return baseResult
  // },
  logout(context) {
    context.commit('removeToken')
    context.commit('removeUserInfo')
  }
}
const phone_actions = {
  async phone_login(context, data) {
    console.log(data)
    const res = await phone_login(data)
    context.commit('settToken', res)
    setTimeStamp()
  },
  logout(context) {
    context.commit('removeToken')
    context.commit('removeUserInfo')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  phone_actions
}
