import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hash: null,
  },
  mutations: {
    setHash(state, hash) {
      state.hash = hash;
    }
  },
  actions: {
    async getHash({ commit }) { 
      const url = 'localhost:3000/api/hash';
      const hash = await axios.get(url);
      commit('setHash', hash)
    }
  },
  modules: {},
});
