<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <footer-div></footer-div>
  </div>
</template>

<script>
import '../src/stylesheet/main.scss';
import Navbar from './components/Navbar';
import FooterDiv from './components/Footer';

export default {
  name: 'app',
  components: {
    Navbar,
    FooterDiv
  }
}
</script>

<style lang="scss">

</style>
