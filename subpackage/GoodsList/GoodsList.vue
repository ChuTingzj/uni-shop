<template>
  <view>
    <view class="goods-list">
      <block v-for="(goods, i) in goodsList.value" :key="i">
        <view class="goods-item">
          <!-- 商品左侧图片区域 -->
          <view class="goods-item-left">
            <image :src="goods.goods_small_logo || defaultPic" class="goods-pic"></image>
          </view>
          <!-- 商品右侧信息区域 -->
          <view class="goods-item-right">
            <!-- 商品标题 -->
            <view class="goods-name">{{goods.goods_name}}</view>
            <view class="goods-info-box">
              <!-- 商品价格 -->
              <view class="goods-price">￥{{goods.goods_price}}</view>
            </view>
          </view>
        </view>
      </block>
    </view>
  </view>
</template>

<script setup>
  import {
    reactive,
    ref
  } from 'vue'
  import {
    onLoad
  } from '@dcloudio/uni-app'
  const queryObj = reactive({
    query: '',
    cid: '',
    pagenum: 1,
    pagesize: 10
  })
  const goodsList = reactive({
    value: []
  })
  let total = ref(0)
  const defaultPic = ref(
    'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
    )
  onLoad((options) => {
    // 将页面参数转存到 queryObj 对象中
    queryObj.query = options.query || ''
    queryObj.cid = options.cid || ''
    getGoodsList()
  })
  // 获取商品列表数据的方法
  const getGoodsList = async () => {
    // 发起请求
    const {
      data: res
    } = await uni.$http.get('/api/public/v1/goods/search', queryObj)
    if (res.meta.status !== 200) return uni.$showMsg()
    // 为数据赋值
    goodsList.value = res.message.goods
    total.value = res.message.total
  }
</script>

<style lang="scss">
  .goods-item {
    display: flex;
    padding: 10px 5px;
    border-bottom: 1px solid #f0f0f0;

    .goods-item-left {
      margin-right: 5px;

      .goods-pic {
        width: 100px;
        height: 100px;
        display: block;
      }
    }

    .goods-item-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .goods-name {
        font-size: 13px;
      }

      .goods-price {
        font-size: 16px;
        color: #c00000;
      }
    }
  }
</style>
