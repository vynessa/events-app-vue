import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  eventsList: []
}

export default new Vuex.Store({
  state
})
