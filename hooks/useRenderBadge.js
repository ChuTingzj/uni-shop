import {
  useCartStore
} from '@/store/cart.js'
import {
  onShow
} from '@dcloudio/uni-app'
export default function useRenderBage() {
  const cartStore = useCartStore()
  onShow(() => {
    setBadge()
  })
  const setBadge = () => {
    // 调用 uni.setTabBarBadge() 方法，为购物车设置右上角的徽标
    uni.setTabBarBadge({
      index: 2, // 索引
      text: cartStore.total + '' // 注意：text 的值必须是字符串，不能是数字
    })
  }
  return {
    setBadge
  }
}
