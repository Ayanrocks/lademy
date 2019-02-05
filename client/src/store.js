import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {}
  },
  getters: {
    getData(state) {
      return state.profile;
    }
  },
  mutations: {
    FETCH_DATA(state, payload) {
      state.profile = payload;
    }
  },
  actions: {
    fetchData(context) {
      console.log("Calling mutations");
      axios.get("/student/info").then(res => {
        context.commit("FETCH_DATA", res.data);
      });
    }
  }
});
