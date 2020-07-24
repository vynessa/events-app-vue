<template>
  <div id="app">
    <component :is="layout">
      <router-view :layout.sync="layout"/>
    </component>
  </div>

  
</template>

<script>
import '../src/stylesheet/main.scss';
import Layout from './pages/Layout';

export default {
  name: 'app',
  data() {
    return {
      layout: 'div',
    };
  },
}
</script>

<style lang="scss">

</style>
