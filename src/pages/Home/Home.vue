<template>
<div class="item">{{time}}</div>
<CMenu :count="[{name:1}]"/>
<HelloWorldVue :msg="0"/>
</template>

<script lang="ts" setup>
import HelloWorldVue from '../../components/HelloWorld.vue';
import CMenu from '../../components/CMenu.vue';
const time = new Date().format('yyyy-MM-dd')
</script>

<style>
  .item{
    
  }
</style>