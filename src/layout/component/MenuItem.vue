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
  (e: "pushLen"): void;
  (e: "popLen"): void;
}>();
const menu = computed(() => props.item);
// 是否展开
const menuAn = ref(false);
const currentRoure = computed(() => useRoute());
const menuHeight = ref(50);
// 子集高度
const childLen = ref(1);
// 事件点击
function linkPath() {
  if (menu.value.children) {
    menuAn.value = !menuAn.value;
    menuAn.value ? emits("pushLen") : emits("popLen");
  } else {
    emits("onRouter", menu.value.name);
    router.push(menu.value.path);
  }
}
function onRouter(name) {
  console.log(name);
  emits("onRouter", name);
}
</script>

<template>
  <div class="menu-item">
    <div
      class="item flex align-center justify-between pointer"
      :class="{ on: currentRoure.path === menu.path }"
      :style="{ height: menuHeight + 'px' }"
      @click="linkPath"
    >
      <p class="font-14">{{ menu.meta.title }}</p>
      <i
        v-if="menu.children"
        class="iconfont icon-arrow-right"
        :class="{ an: menuAn }"
      />
    </div>
    <div
      class="children"
      :style="{
        height: menuAn ? childLen * menuHeight + 'px' : '0',
      }"
    >
      <MenuItem
        v-for="(items, k) in menu.children"
        :key="k"
        :item="items"
        style="padding-left: 20px"
        @onRouter="() => onRouter(items.name)"
        @pushLen="() => childLen++"
        @popLen="() => childLen--"
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
    border-bottom: 1px solid #eaeaea;
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
