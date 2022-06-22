import {
  cartStore
} from './useInnerHooks'
import {
  goods_info
} from './useGoodsDetail.js'

export default function useButtonClick() {
  
  // 左侧按钮的点击事件处理函数
  const onClick = (e) => {
    if (e.content.text === '购物车') {
      // 切换到购物车页面
      uni.switchTab({
        url: '/pages/Cart/Cart'
      })
    }
  }
  // 右侧按钮的点击事件处理函数
  const buttonClick = (e) => {
    // 1. 判断是否点击了 加入购物车 按钮
    if (e.content.text === '加入购物车') {
      // 2. 组织一个商品的信息对象
      const goods = {
        goods_id: goods_info.value.goods_id, // 商品的Id
        goods_name: goods_info.value.goods_name, // 商品的名称
        goods_price: goods_info.value.goods_price, // 商品的价格
        goods_count: 1, // 商品的数量
        goods_small_logo: goods_info.value.goods_small_logo, // 商品的图片
        goods_state: true // 商品的勾选状态
      }
      // 3. 通过  addToCart 方法，把商品信息对象存储到购物车中
      cartStore.addToCart(goods)
    }
  }
  return {
    onClick,
    buttonClick
  }
}
