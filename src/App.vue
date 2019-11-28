<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <keep-alive exclude="Detail">
    <!--显示当前路由地址所对应的内容-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App' //这个name是干嘛的呢
}
</script>

<style>

</style>
