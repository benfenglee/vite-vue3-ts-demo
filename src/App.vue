<script setup lang="ts">
window.document.documentElement.setAttribute( "data-theme", 'blue');

</script>

<template>
<router-view></router-view>
</template>

<style lang="scss">
@import url("@assets/css/reset.css");
@import url("@assets/css/scroll.css");
@import url("@assets/css/common.css");
/* 从新定义app的宽高 */
#app{
  width: 100vw;
  height: 100vh;
  overflow:hidden;
  //  字体颜色
  @include font_color("font_color1");
  //  边框颜色
  @include border_color("border_color1");
  //  背景颜色
  @include background_color("background_color1");
}
</style>
