import {
  reactive
} from 'vue'
import {
  onLoad
} from '@dcloudio/uni-app'

export default function useFloorList() {
  let floorList = reactive({
    value: []
  })
  onLoad(() => {
    getFloorList()
  })
  const getFloorList = async () => {
    const {
      data: res
    } = await uni.$http.get('/api/public/v1/home/floordata')
    if (res.meta.status !== 200) return uni.$showMsg()
    // 通过双层 forEach 循环，处理 URL 地址
    res.message.forEach(floor => {
      floor.product_list.forEach(prod => {
        prod.url = '/subpackage/GoodsList/GoodsList?' + prod.navigator_url.split('?')[1]
      })
    })
    floorList.value = res.message
  }
  return {
    floorList
  }
}
