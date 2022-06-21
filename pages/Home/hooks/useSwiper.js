import {
  reactive
} from 'vue'
import {
  onLoad
} from '@dcloudio/uni-app'

export default function useSwiper() {
  let swiperList = reactive({
    value: []
  })
  onLoad(() => {
    // 2. 在小程序页面刚加载的时候，调用获取轮播图数据的方法
    getSwiperList()
  })
  // 3. 获取轮播图数据的方法
  const getSwiperList = async () => {
    // 3.1 发起请求
    const {
      data: res
    } = await uni.$http.get('/api/public/v1/home/swiperdata')
    // 3.2 请求失败
    if (res.meta.status !== 200) return uni.$showMsg()
    // 3.3 请求成功，为 data 中的数据赋值
    swiperList.value = res.message
  }
  return {
    swiperList
  }
}
