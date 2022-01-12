<script lang="ts" setup>
import { ref } from "vue";
import MenuItem from "./MenuItem.vue";
import { routes } from "@/router/config.ts";
const menu = ref(routes.filter((el: any) => el.path === "/")[0].children);
</script>
<template>
  <MenuItem v-for="(items, k) in menu" :key="k" :item="items" />
</template>
