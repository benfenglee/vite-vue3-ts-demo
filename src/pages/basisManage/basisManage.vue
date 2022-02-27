<script lang="ts" setup>
const namexx = 'xxx'  
// import Button from './Button'
const age = 12
</script>
<template>
<div>
  <!-- 0
  <Button/> -->
  <!-- <f-button>0000</f-button> -->
  <!-- {{age}} -->
  <FButton type="danger" :name="namexx" :style="['color:red']">
  </FButton>
  <!-- <button v-text="age">{{namexx}}</button> -->
</div>
</template>
<style lang="scss" scoped>
  
</style>