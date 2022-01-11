<script lang="ts" setup>
import { List } from "@/utils/structure/List";
const list = new List();
list.append(1);
list.append(1);
list.append(1);
list.append(1);
list.append(1);
list.insert(3, 2);
console.log(list);
</script>
<template>
  <div class="menu">
    我是菜单1
    <i class="iconfont icon-close" />
  </div>
</template>
<style lang="scss" scoped>
.menu {
  border: 1px solid red;
}
</style>
