<script setup lang="ts">
import { onMounted } from "vue";
import vuex_storage from "./utils/vuex_storage";
import init from "./utils/init";
onMounted(() => vuex_storage());
// 选择主题
window.document.documentElement.setAttribute("data-theme", "default");
// 进行一些初始化设置
init();
</script>

<template>
  <link
    rel="stylesheet"
    href="https://at.alicdn.com/t/font_3133183_jq38ukm9mpm.css?spm=a313x.7781069.1998910419.177&file=font_3133183_jq38ukm9mpm.css"
  />
  <router-view></router-view>
</template>

<style lang="scss">
@import url("@assets/css/reset.css");
@import url("@assets/css/scroll.css");
@import url("@assets/css/common.css");
/* 从新定义app的宽高 */
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  //  字体颜色
  @include font_color("font_color1");
  //  边框颜色
  @include border_color("border_color1");
  //  背景颜色
  @include background_color("background_color1");
}
</style>
