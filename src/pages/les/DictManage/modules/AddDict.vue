<script setup lang="ts">
import DragModal from "@/components/DragModal/DragModal.vue";
defineProps<{
  isModal: Boolean;
}>();
const emits = defineEmits<{
  (e: "hideModel"): void;
}>();
const hideModel = () => {
  console.log(10);
};
</script>

<template>
  <DragModal :visible="isModal" @hideModel="hideModel">
    <!-- <template v-slot:header>
      <div>顶部1</div>
      <div>顶部2</div>
      <div>顶部3</div>
      顶部1
    </template> -->
    默认
    <!-- <template v-slot:foolter> 底部2 </template> -->
  </DragModal>
</template>

<style scoped lang="scss"></style>
