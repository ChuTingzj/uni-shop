<template>
  <view>
    <view class="goods-list">
      <view @click="gotoDetail(goods)" v-for="(goods, i) in goodsList.value" :key="i">
        <my-goods :goods="goods"></my-goods>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    reactive,
    ref
  } from 'vue'
  import {useGoodsList,goodsList} from './hooks/useGoodsList.js'
  import usePullDown from './hooks/usePullDown.js'
  import useReachBottom from './hooks/useReachBottom.js'
  useGoodsList()
  usePullDown()
  useReachBottom()
  // 点击跳转到商品详情页面
  const gotoDetail = (item) => {
    uni.navigateTo({
      url: '/subpackage/GoodsDetail/GoodsDetail?goods_id=' + item.goods_id
    })
  }
 
</script>

<style lang="scss">

</style>
