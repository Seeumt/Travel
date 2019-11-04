<template>
  <div>
    <div class="home">
    hello Home
  </div>
    <router-link to="/list">列表页</router-link>

  </div>

</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
  .home {
    font-size: 50px;
  }
</style>
