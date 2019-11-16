<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
                            <!--    绑定一个监听事件-->
    <city-alphabet :cities="cities" @change="handLetterChange"></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList  from './components/List'
  import CityAlphabet from "./components/Alphabet";
  import axios from 'axios'
  export default {
    name: 'City',
    components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
      data() {
        return {
            cities: {},
            hotCities:[],
            letter:''
        }
      },
    methods: {
        getCityInfo() {
            axios.get("/api/city.json")
                .then(this.getCityInfoSucc)
        },
        getCityInfoSucc(res) {
            res=res.data;
            if (res.ret && res.data) {
                const data=res.data;
                this.cities = data.cities;
                this.hotCities = data.hotCities;
            }
        },
        handLetterChange(letter) {
            //要把这个letter给子组件传递 通过属性的方式
            this.letter = letter;
        }
    },
      mounted() {
          this.getCityInfo()
      }
  }
</script>


<style lang="stylus" scoped>

</style>
