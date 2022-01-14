<script lang="ts" setup>
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";
import { routes } from "@/router/config.ts";
import { useRoute, useRouter } from "vue-router";
import CHeader from "./header.vue";
import MenuItem from "./component/MenuItem.vue";
import CacheRoute from "./component/CacheRoute.vue";

const menuRoutes = ref(routes.filter((el: any) => el.path === "/")[0].children);
// 当前路由
const currentRoure = computed(() => useRoute());
const router = useRouter();
console.log(currentRoure.value.name);

const store = useStore();
const screenPx = computed(() => {
  return {
    height: store.getters["screen/screenHeight"],
    header: store.getters["screen/screenHeader"],
    width: store.getters["screen/menuWidth"],
  };
});
const menu = ref(null);
onMounted(() =>
  store.dispatch("screen/setMenu", (menu.value as any).offsetWidth)
);
// 要缓存的 组件的name
const keep = ref(["Home"]);
// 已缓存的
const alreadyMenu = computed(() =>
  menuRoutes.value.filter((el: { name: string }) =>
    keep.value.includes(el.name)
  )
);
// 新增缓存路由
const onRouter = (e: string) => {
  keep.value.push(e);
  keep.value = Array.from(new Set(keep.value));
};
// 删除已缓存的路由
const closeKeep = (name: string) => {
  // 必须要留一个tab
  if (alreadyMenu.value.length <= 1) {
    return;
  }
  const i = keep.value.indexOf(name);
  // 更新缓存组件数组
  keep.value = keep.value.filter((el) => {
    return el !== name;
  });
  // 如果删除的是当前页面 先跳转
  if (currentRoure.value.name === name) {
    let path = "";
    if (alreadyMenu.value.length > 1) {
      path = alreadyMenu.value[i - 1].path;
    } else {
      path = alreadyMenu.value[0].path;
    }
    router.push(path);
  }
};
</script>
<template>
  <c-header />
  <main
    class="main"
    :style="{ height: screenPx.header - screenPx.header + 'px' }"
  >
    <div class="menu" ref="menu">
      <!-- <MenuItem /> -->
      <MenuItem
        v-for="(items, k) in menuRoutes"
        :key="k"
        :item="items"
        @onRouter="onRouter"
      />
    </div>
    <div class="main-body">
      <!-- 缓存路由 -->
      <CacheRoute :alreadyMenu="alreadyMenu" @closeKeep="closeKeep" />
      <router-view v-slot="{ Component }">
        <keep-alive :include="keep">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.main {
  display: flex;
  .menu {
    min-width: 200px;
    flex: 2;
    box-shadow: 1px 0 0px rgb(107, 107, 107, 0.2);
  }
  .main-body {
    flex: 12;
  }
}
</style>
