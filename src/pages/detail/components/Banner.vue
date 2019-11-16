<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://imgs.qunarzz.com/vc/1e/25/dd/f308ea7ce15e0deb561aa9d9e3.jpg_92.jpg">
        <div class="banner-info">
          <div class="banner-title">这里是内容</div>
          <div class="banner-number"><span class="iconfont banner-icon">&#xe63b;</span>39</div>
        </div>
    </div>
  <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
  </div>
</template>

<script>
  import CommonGallery from 'common/gallery/Gallery'
    export default {
        name: "DetailBanner",
        components:{
            CommonGallery
        },
        data() {
            return{
                showGallery:false,
                imgs:['https://imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg',
                    'https://imgs.qunarzz.com/vc/6d/c8/f8/64968edbb09cd02cc08b2c89fa.jpg_92.jpg']
            }
        },
        methods:{
            handleBannerClick() {
                this.showGallery=true
            },
            handleGalleryClose() {
                this.showGallery=false;
            }
        }
    }
</script>


<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      text-align left
      color #fff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .25rem
        line-height .25rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0,0,0,.8)
        font-size .24rem
      .banner-icon
        font-size .24rem
</style>
