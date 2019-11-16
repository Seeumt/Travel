<template>
  <ul class="list">
    <li class="item" v-for="city in letters" :key="city" :ref="city"
        @click="handleLetterClick" @touchstart="handlerTouchStart"
        @touchmove="handlerTouchMove" @touchend="handlerTouchEnd">
      {{city}}
    </li>
  </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props: {
            cities: Object
        },
        computed: {
            letters() {
                const letters = [];
                for (let i in this.cities) {
                    letters.push(i);
                }
                return letters
            }
        },
        data() {
            return {
                touchStatus: false,
                startY: 0,
                timer: null
            };
        },
        updated() {
            this.startY = this.$refs['A'][0].offsetTop;
        },
        methods: {
            handleLetterClick(event) {
                //向外触发事件  事件的名字 change, 事件的内容 event.target.innerText 在根组件City.Vue中监听这个事件
                this.$emit('change', event.target.innerText);
            },
            handlerTouchStart() {
                this.touchStatus = true;
            },
            handlerTouchMove(event) {
                if (this.touchStatus) {
                    if (this.timer) {
                        clearTimeout(this.timer);
                    }
                    this.timer = setTimeout(() => {
                    const touchY = event.touches[0].clientY - 74;
                    const index = Math.floor((touchY - this.startY) / 20);
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change',this.letters[index])
                    }
                  },16);
                }
            },
            handlerTouchEnd() {
                this.touchStatus = false;
            },
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
