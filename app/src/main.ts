import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.config.errorHandler = (err, vm, info) => {
  console.log('error!!!');
  console.log(err);
  console.log(vm);
  console.log(info);
};



new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
