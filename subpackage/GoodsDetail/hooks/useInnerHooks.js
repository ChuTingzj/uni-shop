import {
  watch,
  reactive
} from 'vue'
import {
  onLoad
} from '@dcloudio/uni-app'
import {
  useCartStore
} from '@/store/cart.js'
import {options} from './useStaticData.js'
import {
  useGoodsDetail
} from './useGoodsDetail.js'
export const cartStore = useCartStore()
export function useInnerHooks() {
  const {
    getGoodsDetail
  } = useGoodsDetail()
  watch(() => cartStore.total, (newValue, oldValue) => {
    // 2. 通过数组的 find() 方法，找到购物车按钮的配置对象
    const findResult = options.find((x) => x.text === '购物车')
    if (findResult) {
      // 3. 动态为购物车按钮的 info 属性赋值
      findResult.info = newValue
    }
  }, {
    immediate: true
  })
  onLoad((options) => {
    // 获取商品 Id
    const goods_id = options.goods_id
    // 调用请求商品详情数据的方法
    getGoodsDetail(goods_id)
  })
}
