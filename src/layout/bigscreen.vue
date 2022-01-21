<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
    <component class="animate__animated animate__fadeInUp" :is="Component" />
  </router-view>
</template>

<style scoped lang="scss"></style>
