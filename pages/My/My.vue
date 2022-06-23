<template>
  <view class="my-container">
    <!-- 用户未登录时，显示登录组件 -->
    <my-login v-if="!userStore.token"></my-login>

    <!-- 用户登录后，显示用户信息组件 -->
    <my-userinfo v-else></my-userinfo>
  </view>
</template>

<script setup>
  import useRenderBage from '@/hooks/useRenderBadge.js'
  import {
    useUserStore
  } from '@/store/user.js'
  useRenderBage()
  const userStore = useUserStore()
</script>

<style lang="scss">
.my-container {
  height: 100%;
}
</style>
