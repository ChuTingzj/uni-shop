import {
  onPullDownRefresh
} from '@dcloudio/uni-app'
import throttle from '@/utils/throttle.js'
import {total,queryObj,getGoodsList} from './useGoodsList.js'
export default function usePullDown() {
  // 下拉刷新的事件
  onPullDownRefresh(throttle(() => {
    // 判断是否还有下一页数据
    if (queryObj.pagenum * queryObj.pagesize >= total.value) return uni.$showMsg('数据加载完毕！')
    // 让页码值自增 +1
    queryObj.pagenum += 1
    // 重新获取列表数据
    getGoodsList(true)
  }))
}
