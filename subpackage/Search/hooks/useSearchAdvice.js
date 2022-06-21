import {
  ref,
  reactive,
  computed
} from 'vue'
import debounce from '@/utils/debounce.js'
import {
  onLoad
} from '@dcloudio/uni-app'
export default function useSearchAdvice() {
  let kw = ref('')
  let searchResults = reactive({
    value: []
  })
  const historyList = reactive({
    value: ['a', 'app', 'apple']
  })
  onLoad(() => {
    historyList.value = JSON.parse(uni.getStorageSync('kw') || '[]')
  })
  let historys = computed(() => {
    return [...historyList.value].reverse()
  })
  const input = debounce((e) => {
    kw.value = e
    getSearchList()
  })
  // 点击跳转到商品列表页面
  const gotoGoodsList = (kw) => {
    uni.navigateTo({
      url: '/subpackage/GoodsList/GoodsList?query=' + kw
    })
  }
  // 清空搜索历史记录
  const cleanHistory = () => {
    // 清空 data 中保存的搜索历史
    historyList.value = []
    // 清空本地存储中记录的搜索历史
    uni.setStorageSync('kw', '[]')
  }
  // 根据搜索关键词，搜索商品建议列表
  const getSearchList = async () => {
    // 判断关键词是否为空
    if (kw.value === '') {
      searchResults.value = []
      return
    }
    // 发起请求，获取搜索建议列表
    const {
      data: res
    } = await uni.$http.get('/api/public/v1/goods/qsearch', {
      query: kw.value
    })
    if (res.meta.status !== 200) return uni.$showMsg()
    searchResults.value = res.message
    saveSearchHistory()
  }
  // 2. 保存搜索关键词的方法
  const saveSearchHistory = () => {
    historyList.value.push(kw.value)
    historyList.value = [...new Set(historyList.value)]
    // 调用 uni.setStorageSync(key, value) 将搜索历史记录持久化存储到本地
    uni.setStorageSync('kw', JSON.stringify(historyList.value))
  }
  const gotoDetail = (goods_id) => {
    uni.navigateTo({
      // 指定详情页面的 URL 地址，并传递 goods_id 参数
      url: '/subpackage/GoodsDetail/GoodsDetail?goods_id=' + goods_id
    })
  }
  return {
    kw,
    searchResults,
    input,
    gotoDetail,
    historys,
    cleanHistory,
    gotoGoodsList
  }
}
