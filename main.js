import {
  createApp
} from 'vue'
import App from './App'
import {
  $http
} from '@escook/request-miniprogram'
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
}
// 请求完成之后做一些事情
$http.afterRequest = function() {
  uni.hideLoading()
}
App.mpType = 'app'
const app = createApp(App)
app.config.productionTip = false
app.mount()
