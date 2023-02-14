import { createStore } from "vuex";

const mutations = {
  addition(state, plus) {
    state.sum += plus;
  },
  zero(state) {
    state.sum = 0;
  },
};

const state = {
  sum: 0,
};

const store = createStore({
  mutations,
  state,
  strict: true,
});

export default store;
