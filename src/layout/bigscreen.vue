<script setup lang="ts"></script>

<template>
  <!-- <div> 公共大屏组件 -->
  <router-view v-slot="{ Component }">
    <component class="animate__animated animate__fadeInUp" :is="Component" />
  </router-view>
  <!-- </div> -->
</template>

<style scoped lang="scss"></style>
