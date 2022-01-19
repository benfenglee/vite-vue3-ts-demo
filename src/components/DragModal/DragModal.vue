<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";
import { useSlots } from "vue";

const props = defineProps<{
  isModal: Boolean;
}>();
const emits = defineEmits<{
  (e: "hideModel"): void;
}>();

const slots = useSlots();
const animateModal = ref(false);
watchEffect(() => {
  if (props.isModal) {
    animateModal.value = true;
  } else {
    setTimeout(() => {
      animateModal.value = false;
    }, 1000);
  }
});
</script>

<template>
  <teleport to="body">
    <div
      class="drag-modal flex flex-center animate__animated"
      :class="isModal ? 'animate__bounceInLeft' : 'animate__bounceOutRight'"
      v-if="animateModal"
      @click.self="() => emits('hideModel')"
    >
      <div class="modal">
        <div class="modal-header">
          顶部
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-floor">
          <slot name="foolter"></slot>
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
  .modal-header {
    height: 50px;
    border-bottom: 1px solid red;
  }
  .modal-body {
    height: calc(100% - 100px);
  }
  .modal-floor {
    height: 50px;
    border-top: 1px solid red;
  }
}
</style>
