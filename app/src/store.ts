import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface State {
  conuter: number;
}

export default new Vuex.Store({
  state: {
    conuter: 0,
  } as State,
  getters: {
    getCounter: (state, getters) => () => {
      // Vue.config.errorHandlerで拾える
      // throw new Error('hoge');
      return state.conuter;
    },
  },
  mutations: {
    increment(state, payload) {
      // Vue.config.errorHandlerで拾えない
      // throw new Error('hoge');
      state.conuter += 1;
    },
  },
  actions: {
    incrementAction(context) {
      // Vue.config.errorHandlerで拾えない
      // throw new Error('hoge');
      context.commit('increment');
    },
  },
});
