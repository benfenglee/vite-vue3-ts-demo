<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useStore } from "vuex";
const listDom = ref(null);
const store = useStore();
const deviceType = computed(
  () => store.getters["login/dict"]["les_sffs_eqpt_type"]
);
const deviceSum = ref<Array<object>>();
const deviceTypeIcon = computed(
  () => store.getters["assetsFile/deviceTypeIcon"]
);
const deviceColor = computed(() => store.getters["assetsFile/deviceColor"]);
deviceSum.value = deviceType.value.map(
  (type: { value: string; text: string }) => {
    const device = {
      deviceType: type.value,
      deviceTypeText: type.text,
      deviceIcon:
        deviceTypeIcon.value[Number(type.value)] ||
        store.getters["assetsFile/notIcon"],
      deviceColor: deviceColor.value[Number(type.value)] || "#666",
    };

    return device;
  }
);
// 每次滚动条滚动的距离
const distance = 500;
const speed = distance / 30;
// 左移动
const prveClick = () => {
  if (listDom.value.scrollLeft === 0) {
    return;
  }
  const sum = listDom.value.scrollLeft - distance;
  function render() {
    if (listDom.value.scrollLeft - 10 < 0) {
      listDom.value.scrollLeft = 0;
      return;
    }
    if (listDom.value.scrollLeft > sum) {
      listDom.value.scrollLeft -= distance / speed;
      requestAnimationFrame(render);
    }
  }
  requestAnimationFrame(render);
};
// 右移动
const nextClick = () => {
  const hubWidth = listDom.value.scrollWidth - listDom.value.offsetWidth;
  const sum = listDom.value.scrollLeft + distance;
  if (listDom.value.scrollLeft === hubWidth) {
    return;
  }
  function render() {
    if (listDom.value.scrollLeft >= hubWidth) {
      listDom.value.scrollLeft = hubWidth;
      return;
    }
    if (listDom.value.scrollLeft < sum) {
      listDom.value.scrollLeft += distance / speed;
      requestAnimationFrame(render);
    }
  }
  requestAnimationFrame(render);
};
let isMove = ref(false);
let moveLeft = 0;
// 拖动链条
const onDown = (e: any) => {
  moveLeft = e.clientX;
  isMove.value = true;
};
onMounted(() => {
  document.body.addEventListener("mousemove", (e) => {
    if (isMove.value) {
      const x = e.clientX - moveLeft;
      listDom.value.scrollLeft -= x / 40;
    }
  });
  document.body.addEventListener("mouseup", (e) => {
    if (isMove.value) {
      isMove.value = false;
    }
  });
});
onUnmounted(() => {
  document.body.removeEventListener("mousemove", () => {});
  document.body.removeEventListener("mouseup", () => {});
});
</script>
<template>
  <div class="rolling">
    <div class="rolling-left flex flex-center pointer" @click="prveClick">
      <i class="iconfont icon-arrow-left font-24"></i>
    </div>
    <div class="rolling-right flex flex-center pointer" @click="nextClick">
      <i class="iconfont icon-arrow-right font-24"></i>
    </div>
    <div class="rolling-list" ref="listDom" @mousedown="onDown">
      <ul class="list flex">
        <li
          class="item flex text-center"
          :class="{ pointer: !isMove }"
          v-for="item in deviceSum"
          :style="{ color: item.deviceColor }"
          :key="item.deviceType"
        >
          <div class="item-icon">
            <img :src="item.deviceIcon" />
            <p class="text-center text-over font-16">
              {{ item.deviceTypeText }}
            </p>
          </div>
          <ul class="item-text font-14">
            <li class="flex justify-between">
              <p>设备总数:</p>
              <p class="font-bold">1990</p>
            </li>
            <li class="flex justify-between">
              <p>今日告警数:</p>
              <p class="font-bold">199</p>
            </li>
            <li class="flex justify-between">
              <p>告警设备数:</p>
              <p class="font-bold">199</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.rolling {
  position: relative;
  display: block;
  width: 100%;
  .rolling-left,
  .rolling-right {
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: rgba($color: #000000, $alpha: 0.1);
    top: 0;
    bottom: 0;
    margin: auto;
    transition: all 400ms;
  }
  .rolling-left {
    left: 20px;
  }
  .rolling-right {
    right: 20px;
  }
  &:hover .rolling-left,
  &:hover .rolling-right {
    background-color: rgba($color: #000000, $alpha: 0.3);
    color: white;
    &:hover {
      background-color: rgb(55, 125, 231);
    }
  }
}
.rolling-list {
  overflow-x: auto;
  margin-right: 20px;
  padding: 4px;
  padding-bottom: 10px;
  transition: all 400ms;
  cursor: move;
  // border: 1px solid red;
  &::-webkit-scrollbar {
    width: 0;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(109, 189, 255);
  }
  .list {
    height: 100%;
    transition: all 400ms;
    .item {
      // border: 1px solid red;
      box-shadow: 0 0 8px #cccccc66;
      white-space: nowrap;
      padding: 20px;
      margin-right: 10px;
      border-radius: 4px;
      background-color: white;
      transition: box-shadow 400ms;
      user-select: none;
      &:hover {
        box-shadow: 0 0 6px #66666666;
      }
      .item-icon {
        margin-right: 20px;
        img {
          height: 60px;
          width: 60px;
          background-color: #666;
          border-radius: 50%;
          -webkit-user-drag: none;
        }
        p {
          margin-top: 6px;
        }
      }
      .item-text {
        li {
          height: 30px;
        }
        p:nth-child(1) {
          margin-right: 40px;
        }
        // p {
        //   display: inline-block;
        // }
      }
    }
  }
}
</style>
