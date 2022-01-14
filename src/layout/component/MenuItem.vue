<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
const emits = defineEmits<{
  (e: "onRouter", str: string): void;
}>();
const menu = computed(() => props.item);
// 是否展开
const menuAn = ref(false);
const currentRoure = computed(() => useRoute());
const menuHeight = ref(50);
// 事件点击
function linkPath() {
  // console.log(menu.value.path);

  emits("onRouter", menu.value.name);
  if (menu.value.children) {
    menuAn.value = !menuAn.value;
  } else {
    router.push(menu.value.path);
  }
}
</script>

<template>
  <div class="menu-item">
    <div
      class="item flex align-center justify-between"
      :class="{ on: currentRoure.path === '/' + menu.path }"
      :style="{ height: menuHeight + 'px' }"
      @click="linkPath"
    >
      <p>{{ menu.meta.title }}</p>
      <i
        v-if="menu.children"
        class="iconfont icon-arrow-right"
        :class="{ an: menuAn }"
      />
    </div>
    <div
      class="children"
      :style="{
        height: menuAn ? menu.children.length * menuHeight + 'px' : '0',
      }"
    >
      <MenuItem
        v-for="(items, k) in menu.children"
        :key="k"
        :item="items"
        style="padding-left: 20px"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-item {
  .item {
    padding: 0 20px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-bottom: 1px solid #eaeaea;
    font-size: 14px;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: rgba(28, 148, 247, 0.5);
      transform: translateX(100%);
      transition: all 1s;
    }
    .iconfont {
      transition: all 400ms;
    }
    .an {
      transform: rotate(90deg);
    }
    &.on {
      color: rgb(28, 148, 247);
    }
    &:hover {
      background-color: #f9f9f9;
      &::after {
        transform: translateX(0);
      }
    }
  }
  .children {
    transition: all 400ms;
    overflow: hidden;
  }
}
</style>
