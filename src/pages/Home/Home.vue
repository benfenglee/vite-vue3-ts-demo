<script lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "Home",
  setup() {
    const store = useStore();
    const router = useRouter();
    // router.push("/router_manage");
    // router.push("RouterManage");

    const screenHeight = computed(() => store.getters["screen/screenHeight"]);
    const screenWidth = computed(() => store.getters["screen/screenWidth"]);
    return {
      screenHeight,
      screenWidth,
    };
  },
};
</script>
<template>
  {{ screenHeight }}
  <div>{{ screenWidth }}</div>
</template>

<style lang="scss" scoped></style>
