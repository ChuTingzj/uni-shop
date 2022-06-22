import {
  reactive
} from 'vue'
export let goods_info = reactive({
  value: {}
})
export function useGoodsDetail() {
  // 定义请求商品详情数据的方法
  const getGoodsDetail = async (goods_id) => {
    const {
      data: res
    } = await uni.$http.get('/api/public/v1/goods/detail', {
      goods_id
    })
    if (res.meta.status !== 200) return uni.$showMsg()
    // 使用字符串的 replace() 方法，将 webp 的后缀名替换为 jpg 的后缀名
    res.message.goods_introduce = res.message.goods_introduce.replace(/<img /g, '<img style="display:block;" ')
      .replace(/webp/g, 'jpg')
    goods_info.value = res.message
  }
  // 实现轮播图的预览效果
  const preview = (i) => {
    // 调用 uni.previewImage() 方法预览图片
    uni.previewImage({
      // 预览时，默认显示图片的索引
      current: i,
      // 所有图片 url 地址的数组
      urls: goods_info.value.pics.map(x => x.pics_big)
    })
  }
  return {
    getGoodsDetail,
    preview
  }
}
