<script setup lang="ts">
import { onMounted } from "vue";
import vuex_storage from "./utils/vuex_storage";
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import { ConfigProvider } from "ant-design-vue";
// 存储Vuex值
onMounted(() => vuex_storage());
// 选择主题
window.document.documentElement.setAttribute("data-theme", "default");
</script>

<template>
  <link
    rel="stylesheet"
    href="https://at.alicdn.com/t/font_3133183_jq38ukm9mpm.css?spm=a313x.7781069.1998910419.177&file=font_3133183_jq38ukm9mpm.css"
  />
  <ConfigProvider :locale="zh_CN">
    <router-view></router-view>
  </ConfigProvider>
</template>

<style lang="scss">
@import url("ant-design-vue/dist/antd.css");
// 权级覆盖
@import url("@assets/css/reset.css");
@import url("@assets/css/scroll.css");
@import url("@assets/css/common.css");
@import url("@assets/css/font.css");
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
