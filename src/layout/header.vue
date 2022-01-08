<script lang="ts" setup>
import { useStore } from 'vuex'
const store = useStore()
const screenHeader = store.getters['screen/screenHeader']
import Logo from './component/Logo.vue'
import HaderOption from './component/Option.vue'
</script>
<template>
  <div class="header flex align-center justify-between" :style="{ height: screenHeader + 'px' }">
    <Logo />
    <HaderOption class="left-auto"></HaderOption>
    <c-icon icon="❎"></c-icon>
  </div>
</template>
<style lang="scss" scoped>
.header {
  box-shadow: 0 0 1px rgb(105, 105, 105);
  background-color: rgb(199, 230, 255);
  padding: 0 20px;
  padding-right: 40px;
  border-right: 1px solid red;
}
.left-auto {
  margin-left: auto;
}
</style>