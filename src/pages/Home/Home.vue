<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const screenHeight = computed(() => store.getters['screen/screenHeight'])
const screenWidth = computed(() => store.getters['screen/screenWidth'])
</script>
<template>
  {{ screenHeight }}
  <div>{{ screenWidth }}</div>
</template>

<style lang="scss" scoped>
</style>