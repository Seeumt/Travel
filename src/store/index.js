import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    city: '太原'
  },
  actions:{
    changeCity(ctx,city){
      ctx.commit('changeCity',city);
    },
  },
  mutations:{
    changeCity(state, city) {
      state.city=city
    }
  }
})
