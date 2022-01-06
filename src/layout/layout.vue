<script lang="ts" setup>
import {useStore} from 'vuex'
import { ref,computed } from 'vue'
const store = useStore()
const screenWidth = computed(()=> store.getters['screen/screenWidth'])
const screenHeight = computed(()=> store.getters['screen/screenHeight'])


</script>
<template>
  <header class="header">
    {{screenWidth}}
    {{screenHeight}}
    <slot name="header"></slot>
  </header>
  <main class="main">
    <div class="menu">
      <slot name="menu">菜单</slot>
    </div>
    <div class="main-body">
      <slot></slot>
    </div>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>
<style lang="scss" scoped>
.header {
  height: 7vh;
  border-bottom: 1px solid red;
}
.main{
  display: flex;
  // border: 1px solid red;
  height: 100%;
  // justify
  .menu{
    flex: 2;
  }
  .main-body{
    flex: 8;
    border-left: 1px solid red;
  }
}
</style>