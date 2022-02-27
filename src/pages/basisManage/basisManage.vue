<script lang="ts" setup>
const namexx = "xxx";
// import Button from './Button'
const age = 12;
const fn = () => {
  console.log(6);
};
</script>
<template>
  <div>
    <!-- 0
  <Button/> -->
    <!-- <f-button>0000</f-button> -->
    <!-- {{age}} -->
    <!-- :disabled="true" -->
    <FButton
      type="primary"
      :name="namexx"
      @click="fn"
      icon="001"
      :loading="false"
    >
      <!-- href="https://baidu.com" -->
      {{ namexx }}
      <!-- <div>1</div>
      <div>
        2
        <div>3</div>
      </div> -->
    </FButton>
    <!-- <button v-text="age">{{namexx}}</button> -->
  </div>
</template>
<style lang="scss" scoped></style>
