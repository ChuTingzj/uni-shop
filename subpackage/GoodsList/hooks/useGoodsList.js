import {
  reactive,
  ref
} from 'vue'
import {
  onLoad
} from '@dcloudio/uni-app'
export let total = ref(0)
export const queryObj = reactive({
  query: '',
  cid: '',
  pagenum: 1,
  pagesize: 10
})
export const goodsList = reactive({
  value: []
})
export function useGoodsList() {
  onLoad((options) => {
    // 将页面参数转存到 queryObj 对象中
    queryObj.query = options.query || ''
    queryObj.cid = options.cid || ''
    getGoodsList()
  })
}
// 获取商品列表数据的方法
export const getGoodsList = async (isPullDown) => {
  const {
    data: res
  } = await uni.$http.get('/api/public/v1/goods/search', queryObj)
  if (res.meta.status !== 200) return uni.$showMsg()
  if (isPullDown) {
    goodsList.value = [...res.message.goods, ...goodsList.value]
    uni.stopPullDownRefresh()
  } else {
    goodsList.value = [...goodsList.value, ...res.message.goods]
  }
  total.value = res.message.total
}
