<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination">
      </div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props:{
        list:Array
    },
    data () {
      return {
        swiperOption:{
          pagination:'.swiper-pagination',
          loop:true

        }
        ,
        imgs:["https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/76e68eda4ed089c0e5b0ce2367efe428.jpg",
             "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/387c5e767cccc7a3172ed7ea15b50727.png",
             "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/b59b8db9f72eb8f54df5bf2155672e9c.jpg"
        ],
        swiperList:[
          {
          id:'0001',
          imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/76e68eda4ed089c0e5b0ce2367efe428.jpg"
          },
          {
            id:'0002',
            imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/b59b8db9f72eb8f54df5bf2155672e9c.jpg"
          },
          {
            id:'0003',
            imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/387c5e767cccc7a3172ed7ea15b50727.png"
          },
        ]
      }
    },
      computed:{
          showSwiper() {
              return this.list.length
          }
      }
  }
</script>

<style lang="stylus" scoped>
  .wrapper>>>.swiper-pagination-bullet-active
    background :#ffffff
  .wrapper
    overflow:hidden
    width :100%
    height:0
    padding-bottom :31.25%
    background :#eee
    .swiper-img
      width :100%
</style>
