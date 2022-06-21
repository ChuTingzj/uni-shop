import {
  ref,
  reactive
} from 'vue'
import {
  onLoad
} from '@dcloudio/uni-app'

export default function useCateList() {
  let wh = ref(0)
  let active = ref(0)
  let scrollTop = ref(0)
  let cateList = reactive({
    value: []
  })
  let cateLevel2 = reactive({
    value: []
  })
  onLoad(() => {
    // 获取当前系统的信息
    const sysInfo = uni.getSystemInfoSync()
    // 为 wh 窗口可用高度动态赋值
    wh.value = sysInfo.windowHeight - 50
    // 调用获取分类列表数据的方法
    getCateList()
  })
  const getCateList = async () => {
    // 发起请求
    const {
      data: res
    } = await uni.$http.get('/api/public/v1/categories')
    // 判断是否获取失败
    if (res.meta.status !== 200) return uni.$showMsg()
    // 转存数据
    cateList.value = res.message
    // 为二级分类赋值
    cateLevel2.value = res.message[0].children
  }
  const activeChanged = (index) => {
    active.value = index
    // 为二级分类列表重新赋值
    cateLevel2.value = cateList.value[index].children
    scrollTop.value = scrollTop.value ? 0 : 1
  }
  const gotoGoodsList = (item) => {
    uni.navigateTo({
      url: '/subpkg/goods_list/goods_list?cid=' + item.cat_id
    })
  }
  return {
    wh,
    active,
    scrollTop,
    cateList,
    cateLevel2,
    activeChanged,
    gotoGoodsList
  }
}
