<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="increment">
    <HelloWorld :msg="`Welcome to Your Vue.js + TypeScript App ${this.counter}`"/>
    <!-- Vue.config.errorHandlerで拾えないエラー -->
    <!-- <HelloWorld :msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import { throws } from 'assert';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  private get counter(): number {
    // Vue.config.errorHandlerで拾える
    // throw new Error('hoge');
    return this.$store.getters.getCounter();
  }

  private increment(): void {
    // Vue.config.errorHandlerで拾えない
    // throw new Error('hoge');
    this.$store.dispatch('incrementAction');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
