import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
  },
  getters: {
    getProfile: state => state.profile,
  },
  mutations: {
    FETCH_DATA(state, payload) {
      state.profile = payload;
    },
  },
  actions: {
    fetchData(context) {
      axios.get('/student/info').then((res) => {
        context.commit('FETCH_DATA', res.data);
      });
    },
  },
});
