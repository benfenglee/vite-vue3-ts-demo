<script lang="ts" setup>
import { useStore } from 'vuex'
const store = useStore()
const screenHeader = store.getters['screen/screenHeader']
</script>
<template>
  <div class="header" :style="{ height: screenHeader + 'px' }">
  
  </div>
</template>
<style lang="scss" scoped>
.header {
  box-shadow: 0 0 1px rgb(105, 105, 105);
}
</style>