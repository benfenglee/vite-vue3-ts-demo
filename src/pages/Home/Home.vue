<script lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import init from "../../utils/init";
export default {
  name: "Home",
  setup() {
    const store = useStore();
    const screenHeight = computed(() => store.getters["screen/screenHeight"]);
    const screenWidth = computed(() => store.getters["screen/screenWidth"]);
    onMounted(() => {
      init();
    });
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
