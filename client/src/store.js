import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {}
  },
  getters: {
    getData() {
      return state.profile;
    }
  },
  mutations: {
    fetchData(state) {
      axios.get("/student/info").then(res => {
        state.profile = res.body;
      });
    }
  },
  actions: {
    fetchData(context) {
      context.commit("fetchData");
    }
  }
});
