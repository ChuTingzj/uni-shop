import {
  defineStore
} from 'pinia'
export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cart: JSON.parse(uni.getStorageSync('cart') || '[]')
    }
  },
  getters: {
    // 统计购物车中商品的总数量
    total: (state) => {
      let c = 0
      // 循环统计商品的数量，累加到变量 c 中
      state.cart.forEach(goods => c += goods.goods_count)
      return c
    }
  },
  actions: {
    addToCart(goods) {
      // 根据提交的商品的Id，查询购物车中是否存在这件商品
      // 如果不存在，则 findResult 为 undefined；否则，为查找到的商品信息对象
      const findResult = this.cart.find((x) => x.goods_id === goods.goods_id)
      if (!findResult) {
        // 如果购物车中没有这件商品，则直接 push
        this.cart.push(goods)
      } else {
        // 如果购物车中有这件商品，则只更新数量即可
        findResult.goods_count++
      }
      this.saveToStorage()
    },
    // 将购物车中的数据持久化存储到本地
    saveToStorage() {
      uni.setStorageSync('cart', JSON.stringify(this.cart))
    },
    // 更新购物车中商品的勾选状态
    updateGoodsState(goods) {
      // 根据 goods_id 查询购物车中对应商品的信息对象
      const findResult = this.cart.find(x => x.goods_id === goods.goods_id)
      // 有对应的商品信息对象
      if (findResult) {
        // 更新对应商品的勾选状态
        findResult.goods_state = goods.goods_state
        // 持久化存储到本地
        this.saveToStorage()
      }
    },
    // 更新购物车中商品的数量
    updateGoodsCount(goods) {
      // 根据 goods_id 查询购物车中对应商品的信息对象
      const findResult = this.cart.find(x => x.goods_id === goods.goods_id)

      if (findResult) {
        // 更新对应商品的数量
        findResult.goods_count = goods.goods_count
        // 持久化存储到本地
        this.saveToStorage()
      }
    },
    // 根据 Id 从购物车中删除对应的商品信息
    removeGoodsById(goods_id) {
      // 调用数组的 filter 方法进行过滤
      this.cart = this.cart.filter(x => x.goods_id !== goods_id)
      // 持久化存储到本地
      this.saveToStorage()
    }
  }
})
