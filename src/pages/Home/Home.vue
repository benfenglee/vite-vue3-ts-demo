<script lang="ts" setup>
import {useStore} from 'vuex'
import {computed} from 'vue'
const store = useStore()
const add = () =>store.commit('SET_COUNT')
const count = computed(()=> store.state.count)
import HelloWorldVue from '../../components/HelloWorld.vue';
import CMenu from '../../components/CMenu.vue';
import Layout from '../../layout/layout.vue';
const time = new Date().format('yyyy-MM-dd')
</script>
<template>
  <Layout>
    <button @click="add">++</button>
    {{count}}
    <template v-slot:header>放入头部</template>
    放入身体
    <div>woshi</div>
  </Layout>
</template>


<style>
.item {
}
</style>
<style lang="" scoped>
  
</style>