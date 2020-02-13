<template>
  <div id="app">
    <Controller />
  </div>
</template>

<script>
import Controller from './components/Controller.vue';
export default {
  name: 'App',
  components: {
    Controller
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
