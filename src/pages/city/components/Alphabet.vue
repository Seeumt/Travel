<template>
    <ul class="list">
      <li class="item" v-for="(city,key) in cities" :key="key" @click="handleLetterClick">
        {{key}}
      </li>
    </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props:{
            cities:Object
        },
        methods:{
            handleLetterClick(event) {
                //向外触发事件  事件的名字 change, 事件的内容 event.target.innerText 在根组件City.Vue中监听这个事件
                this.$emit('change',event.target.innerText);
            }
        }
    }
</script>



<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor


</style>
