<template>

  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="recommend in list" :key="recommend.id">
        <div class="item-img-wrapper">
        <img class="item-img"
             :src="recommend.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{recommend.title}}</p>
          <p class="item-desc">{{recommend.desc}}</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "HomeWeekend",
        props:{
            list: Array
        },
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
    line-height .8rem
    background orange
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipse()
    .icon-desc
      line-height .4rem
      color salmon
      ellipse()
</style>
