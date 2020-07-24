<template>
  <fragment>
    <navbar></navbar>
      <slot></slot>
    <footer-div></footer-div>
  </fragment>

</template>

<script>
import { Fragment } from 'vue-fragment'
import Navbar from '../components/Navbar'
import FooterDiv from '../components/footer'

export default {
  components: {
    Navbar,
    FooterDiv,
    Fragment
  }
}
</script>
