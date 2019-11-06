<template>

  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="recommend in recommendList" :key="recommend.id">
        <img class="item-img"
             :src="recommend.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{recommend.title}}</p>
          <p class="item-desc">{{recommend.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "HomeRecommend",
        data() {
            return {
                recommendList: [
                    {
                        id: '0001',
                        title: '大连圣亚海洋公园',
                        desc: '浪漫大连，浪漫之旅',
                        imgUrl:'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/e86b37fef48851353d6f5ae0090cc974.jpg'
                    },
                    {
                        id: '0002',
                        title: '大连圣亚海洋公园',
                        desc: '浪漫大连，浪漫之旅',
                        imgUrl:'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/e86b37fef48851353d6f5ae0090cc974.jpg'
                    },
                    {
                        id: '0003',
                        title: '大连圣亚海洋公园',
                        desc: '浪漫大连，浪漫之旅',
                        imgUrl:'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/e86b37fef48851353d6f5ae0090cc974.jpg'
                    }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background fuchsia
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
