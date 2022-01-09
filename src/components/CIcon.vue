<script lang="ts" setup>
defineProps<{
  icon: string
}>()
</script>
<template>
  <span>{{ icon }}</span>
</template>
<style lang="scss" scoped>
span {
  display: block;
}
</style>