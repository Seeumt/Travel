<template>
    <div class="icons">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="icon in page" :key="icon.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="icon.imgUrl">
        </div>
        <p class="icon-desc">{{icon.desc}}</p>
        </div>
        </swiper-slide>
      </swiper>
    </div>

</template>

<script>
  export default {
    name: 'HomeIcons',
      props:{
        list:Array
      },
    data () {
      return{
        swiperOption:{
          loop:false
        }
        ,
        iconList:[
          {
            id:'0001',
            imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/freeTravel.png',
            desc:'自由行'
          },
          {
            id:'0002',
            imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/aroundtravel.png',
            desc:'周边短途'
          },
          {
            id:'0003',
            imgUrl:'https://picbed.qunarzz.com/c983101ec3fc6b3c6c93ccffea08965c.png',
            desc:'攻略'
          },
          {
            id:'0004',
            imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/youlun.png',
            desc:'邮轮'
          },
          {
            id:'0005',
            imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/innBnb.png',
            desc:'民宿客栈'
          },
          {
            id:'0006',
            imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/haiwai.png',
            desc:'一日游'
          },
          {
            id:'0007',
            imgUrl:'https://picbed.qunarzz.com/7804b43ac02cd0333bd0f866eebd43b3.png',
            desc:'团体游'
          },
          {
            id:'0008',
            imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/bargainflight.png',
            desc:'美食'
          },
          {
            id:'0009',
            imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/car.png',
            desc:'户外'
          },
        ]
      }
    },
    computed:{
      pages () {
        const pages = []
        this.list.forEach((item,index)=>{
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page]=[]
          }
          pages[page].push(item)
        })
        return pages

      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons>>>.swiper-container
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    .icon
      position relative
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom 0.44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          display block
          margin auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        line-height .44rem
        text-align center
        color $darkTextColor
        ellipse()
</style>
