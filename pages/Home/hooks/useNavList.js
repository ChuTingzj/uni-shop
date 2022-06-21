import {
  reactive
} from 'vue'
import {
  onLoad
} from '@dcloudio/uni-app'

export default function useNavList() {
  let navList = reactive({
    value: []
  })
  onLoad(() => {
    getNavList()
  })
  const getNavList = async () => {
    const {
      data: res
    } = await uni.$http.get('/api/public/v1/home/catitems')
    if (res.meta.status !== 200) return uni.$showMsg()
    navList.value = res.message
  }
  const navClickHandler = (item) => {
    // 判断点击的是哪个 nav
    if (item.name === '分类') {
      uni.switchTab({
        url: '/pages/Cate/Cate'
      })
    }
  }
  return {
    navList,
    navClickHandler
  }
}
