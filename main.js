import {
  createApp
} from 'vue'
import App from './App'
import {
  $http
} from '@escook/request-miniprogram'
import {
  createPinia
} from 'pinia'
uni.$http = $http
uni.$showMsg = function(title = '数据加载失败', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none'
  })
}
// 配置请求根路径
$http.baseUrl = 'https://api-ugo-web.itheima.net'
// 请求开始之前做一些事情
$http.beforeRequest = function(options) {
  uni.showLoading({
    title: '数据加载中...',
  })
  // 判断请求的是否为有权限的 API 接口
  if (options.url.indexOf('/my/') !== -1) {
    // 为请求头添加身份认证字段
    options.header = {
      // 字段的值可以直接从 vuex 中进行获取
      Authorization: userStore.token,
    }
  }
}
// 请求完成之后做一些事情
$http.afterRequest = function() {
  uni.hideLoading()
}
App.mpType = 'app'
const app = createApp(App)
app.use(createPinia())
import {useUserStore} from '@/store/user.js'
const userStore = useUserStore()
app.config.productionTip = false
app.mount()
