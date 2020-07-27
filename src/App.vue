<template>
  <div id="app">
    <router-view />
    <notifications group="toast" />
  </div>
</template>

<script>
import '../src/stylesheet/main.scss';

export default {
  name: 'app'
}
</script>