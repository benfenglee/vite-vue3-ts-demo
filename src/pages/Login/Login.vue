<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import $md5 from "md5";
const router = useRouter();
const store = useStore();
const userName = ref("admin");
const password = ref("123456");
const login = () => {
  const params = {
    username: userName.value,
    password: $md5(password.value),
    force: true,
  };
  store
    .dispatch("login/postSysLogin", params)
    .then(() => {
      // 执行一些需要token的操作
      return store.dispatch("login/getDictQueryAllDictItems");
    })
    .then(() => {
      router.push("/home");
    });
};
</script>
<template>
  <div class="flex">
    <p>账号</p>
    <input type="text" v-model="userName" />
  </div>
  <div class="flex">
    <p>密码</p>
    <input type="text" v-model="password" />
  </div>
  <button @click="login">登录</button>
</template>
<style lang="scss" scoped>
input {
  border: 1px solid red;
}
</style>
