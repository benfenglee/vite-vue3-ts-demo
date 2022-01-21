<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";
import { onMounted, onUnmounted, watch, watchEffect } from "@vue/runtime-core";
import { useSlots } from "vue";
import { Button } from "ant-design-vue";
const props = withDefaults(
  defineProps<{
    visible: Boolean;
    isFloor?: Boolean;
  }>(),
  {
    isFloor: true,
  }
);
const emits = defineEmits<{
  (e: "hideModel"): void;
  (e: "okModel"): void;
}>();
const slots = useSlots();
const animateModal = ref(false);
// 计算
const bodyHeight = computed(() => {
  let reduction = 50;
  if (slots.foolter || props.isFloor) {
    reduction += 50;
  }
  return `height:calc(100% - ${reduction}px)`;
});
// 自处理显示与否
let vModal = ref();
watch(
  () => props.visible,
  () => {
    if (!vModal.value && !props.visible) {
      vModal.value = true;
    } else {
      console.log(vModal.value, !props.visible);
      vModal.value = props.visible;
    }
  }
);
// 为消失动画延时
watchEffect(() => {
  if (vModal.value === undefined) {
    vModal.value = props.visible;
  }
  if (vModal.value) {
    animateModal.value = true;
  } else {
    setTimeout(() => {
      // 再次确认是否是隐藏
      if (!vModal.value) {
        animateModal.value = false;
      }
    }, 600);
  }
});
// 元素拖动处理
const modalDom = ref<HTMLElement | null>(null);
let drag = false;
let currentX: number, currentY: number;
const modalMousedown = (e: any) => {
  drag = true;
  currentX = e.clientX;
  currentY = e.clientY;
};
onMounted(() => {
  document.body.addEventListener("mousemove", (e) => {
    if (drag) {
      const x = e.clientX - currentX;
      const y = e.clientY - currentY;
      currentX = e.clientX;
      currentY = e.clientY;
      (modalDom.value as HTMLElement).style.left =
        (modalDom.value as HTMLElement).offsetLeft + x + "px";
      (modalDom.value as HTMLElement).style.top =
        (modalDom.value as HTMLElement).offsetTop + y + "px";
    }
  });
  document.body.addEventListener("mouseup", (e) => {
    if (drag) {
      drag = false;
    }
  });
});
onUnmounted(() => {
  document.body.removeEventListener("mousemove", () => {});
  document.body.removeEventListener("mouseup", () => {});
});
</script>

<template>
  <teleport to="body">
    <div
      class="drag-modal flex flex-center animate__animated"
      :class="vModal ? 'animate__bounceInLeft' : 'animate__bounceOutRight'"
      v-if="animateModal"
      @click.self="
        () => {
          emits('hideModel');
          vModal = false;
        }
      "
    >
      <div class="modal active-move" ref="modalDom" @mousedown="modalMousedown">
        <div class="modal-header">
          <slot name="header"></slot>
          <div
            v-if="!slots.header"
            class="header flex align-center justify-between"
          >
            <h3 class="text-bold">提示</h3>
            <i
              class="iconfont icon-close font-24 pointer"
              @click="
                () => {
                  emits('hideModel');
                  vModal = false;
                }
              "
            />
          </div>
        </div>
        <div class="modal-body" :style="bodyHeight">
          <slot></slot>
        </div>
        <div class="modal-floor">
          <slot name="foolter"></slot>
          <div
            v-if="isFloor && !slots.foolter"
            class="floor flex align-center justify-end"
          >
            <Button
              @click.stop="
                () => {
                  emits('hideModel');
                  vModal = false;
                }
              "
              >取消</Button
            >
            <Button
              @click.stop="
                () => {
                  emits('okModel');
                  vModal = false;
                }
              "
              type="primary"
              style="margin-left: 20px"
              >确定</Button
            >
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="scss">
.drag-modal {
  width: 120vw;
  height: 120vh;
  position: fixed;
  left: -10vw;
  top: -10vh;
  background-color: #00000044;
}
.modal {
  width: 800px;
  height: 600px;
  background-color: white;
  position: absolute;
  border-radius: 6px;
  box-shadow: 0 0 10px #999;
  user-select: none;
  .modal-header {
    height: 50px;
    .header {
      height: 100%;
      padding: 0 20px;
      border-bottom: 1px solid #0000001e;
    }
  }
  .modal-body {
    // border: 1px solid red;
    padding: 20px;
  }
  .modal-floor {
    height: 50px;
    border-top: 1px solid #0000001e;
    .floor {
      height: 100%;
      padding: 0 20px;
    }
  }
}
</style>
