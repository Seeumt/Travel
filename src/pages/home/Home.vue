<template>

  <div class="home">
    Hello Home
    <home-header></home-header>
    <HomeHeader></HomeHeader>
  </div>


</template>

<script>
    import HomeHeader from './components/Header'

    export default {
        name: "Home",
        components: {
            HomeHeader
        }
    }
</script>

<style scoped>
  .home {
    font-size: 50px;
  }
</style>
