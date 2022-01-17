<script lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import RollingList from "./component/RollingList.vue";
export default {
  name: "Home",
  setup() {
    return {};
  },
  components: { RollingList },
};
</script>
<template>
  <div>
    <RollingList />
  </div>
</template>

<style lang="scss" scoped>
// div {
//   background-color: red;
// }
</style>
