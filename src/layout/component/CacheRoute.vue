<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
defineProps<{
  alreadyMenu: Array<any>;
}>();
const router = useRouter();
const currentRoure = computed(() => useRoute());
const emits = defineEmits<{
  (e: "closeKeep", name: string): void;
}>();
const goLink = (path: string) => {
  router.push(path);
};
const closeKeep = (name: string) => emits("closeKeep", name);
</script>

<template>
  <div class="keep-menu flex justify-start align-items">
    <p
      v-for="item in alreadyMenu"
      :key="item.path"
      :class="{ on: currentRoure.path === '/' + item.path }"
      @click.self="goLink('/' + item.path)"
    >
      {{ item.meta.title }}
      <i class="iconfont icon-close" @click="closeKeep(item.name)" />
    </p>
  </div>
</template>

<style scoped lang="scss">
$color: rgb(0, 195, 255);
.keep-menu {
  height: 50px;
  // border-bottom: 1px solid red;
  box-shadow: 2px 1px 2px #ccc;
  padding: 6px 20px;
  position: relative;
  p {
    line-height: 50px - 12px;
    padding-left: 20px;
    transition: all 400ms;
    border-bottom: 1px solid transparent;
    margin-right: 20px;
    cursor: pointer;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 1px;
      background: $color;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      transition: all 400ms;
    }
    .iconfont {
      opacity: 0;
      transition: opacity 400ms;
      margin: 0 10px;
    }
    &.on {
      color: $color;
      &::after {
        width: 100%;
      }
    }
    &:hover {
      color: $color;
      .iconfont {
        opacity: 1;
      }
    }
  }
}
</style>
