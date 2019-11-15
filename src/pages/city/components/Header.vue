<template>
  <div class="header">
      城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position relative
    overflow hidden
    height .86rem
    line-heigth .86rem
    text-align center
    color white
    background $bgColor
    font-size .32rem
    .header-back
      position: absolute
      top: 10px
      left: 0
      width: .54rem
      text-align: center
      font-size: .4rem
      color: white
</style>
