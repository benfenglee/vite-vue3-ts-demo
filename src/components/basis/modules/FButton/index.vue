<script lang="ts" setup>
const prop = defineProps()
console.log(prop);

</script>
<template>
<button>
  <slot/>
</button>
  <!-- <button type="primary">按钮组件1</button>s
  <button>按钮组件2</button>
  <button type="danger">按钮组件3</button>
  <button type="dashed">按钮组件4</button>
  <button type="link">按钮组件5</button> -->
</template>
<style lang="scss" scoped>
@import "./index.scss";
</style>