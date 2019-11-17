<template>

  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <router-link tag="li" :to="'/detail/'+recommend.id" class="item border-bottom" v-for="recommend in list" :key="recommend.id">
        <img class="item-img"
             :src="recommend.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{recommend.title}}</p>
          <p class="item-desc">{{recommend.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            list: Array
        },
        data() {
          return{

          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background orange
    text-indent .2rem

  .item
    overflow hidden
    display flex
    height 1.9rem

    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem

    .item-info
      flex 1
      padding .1rem
      min-width 0

      .item-title
        line-height .54rem
        font-size .32rem
        ellipse()

      .icon-desc
        line-height .4rem
        color salmon

      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
</style>
