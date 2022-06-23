import {
  defineStore
} from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      // 3. 读取本地的收货地址数据，初始化 address 对象
      address: JSON.parse(uni.getStorageSync('address') || '{}'),
      // 登录成功之后的 token 字符串
      token: uni.getStorageSync('token') || '',
      // 用户的基本信息
      userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}'),
      // 重定向的 object 对象 { openType, from }
      redirectInfo: null
    }
  },
  actions: {
    // 更新重定向的信息对象
    updateRedirectInfo(info) {
      this.redirectInfo = info
    },
    // 更新 token 字符串
    updateToken(token) {
      this.token = token
      // 通过 this.commit() 方法，调用 m_user 模块下的 saveTokenToStorage 方法，将 token 字符串持久化存储到本地
      this.saveTokenToStorage()
    },
    // 将 token 字符串持久化存储到本地
    saveTokenToStorage() {
      uni.setStorageSync('token', this.token)
    },
    // 更新收货地址
    updateAddress(address) {
      this.address = address
      this.saveAddressToStorage()
    },
    // 1. 定义将 address 持久化存储到本地 mutations 方法
    saveAddressToStorage() {
      uni.setStorageSync('address', JSON.stringify(this.address))
    },
    // 更新用户的基本信息
    updateUserInfo(userinfo) {
      this.userinfo = userinfo
      // 通过 this.commit() 方法，调用 m_user 模块下的 saveUserInfoToStorage 方法，将 userinfo 对象持久化存储到本地
      this.saveUserInfoToStorage()
    },
    // 将 userinfo 持久化存储到本地
    saveUserInfoToStorage() {
      uni.setStorageSync('userinfo', JSON.stringify(this.userinfo))
    }
  },
  getters: {
    // 收货详细地址的计算属性
    addstr() {
      if (!this.address.provinceName) return ''
      // 拼接 省，市，区，详细地址 的字符串并返回给用户
      return this.address.provinceName + this.address.cityName + this.address.countyName + this.address
        .detailInfo
    }
  }
})
