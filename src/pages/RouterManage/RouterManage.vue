<script lang="ts">
import { onMounted, ref } from "vue";
export default {
  name: "RouterManage",
  setup() {
    const visible = ref(false)
    return {
      name: "xxx",
      visible
    };
  },
};
</script>
<template>
  <div>
    <h1>{{ name }}</h1>
    <!-- <button @click="visible = !visible">{{ visible ? "点击隐藏" : "点击显示" }}</button>
    <transition name="fade">
      <div v-show="visible">这是一段文本</div>
    </transition>-->
  </div>
</template>

<style scoped lang="scss">
div {
  // height: 100%;
  border: 1px solid blue;
}
</style>
