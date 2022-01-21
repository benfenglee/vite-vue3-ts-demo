<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
});
</script>
<script lang="ts" setup>
import RollingList from "./modules/RollingList.vue";
</script>
<template>
  <div class="home">
    <RollingList />
  </div>
</template>

<style lang="scss" scoped>
.home.view {
  padding: 0;
  box-shadow: none;
}
// div {
//   background-color: red;
// }
</style>
