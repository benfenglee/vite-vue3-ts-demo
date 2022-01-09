<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed, ref, onMounted } from 'vue'
const store = useStore()
const screenHeight = computed(() => store.getters['screen/screenHeight'])
const screenHeader = computed(() => store.getters['screen/screenHeader'])
const menuWidth = computed(() => store.getters['screen/menuWidth'])
import CHeader from './header.vue'
const menu = ref(null)
onMounted(() => store.dispatch('screen/setMenu', (menu.value as any).offsetWidth))
import Menu from './component/Menu.vue'
</script>
<template>
  <c-header />
  <main class="main" :style="{ height: screenHeight - screenHeader + 'px' }">
    <div class="menu" ref="menu">
      <Menu />
      {{ menuWidth }}
    </div>
    <div class="main-body">
      <router-view></router-view>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.main {
  display: flex;
  .menu {
    min-width: 200px;
    flex: 2;
    box-shadow: 1px 0 0px rgb(107, 107, 107, 0.2);
  }
  .main-body {
    flex: 12;
  }
}
</style>