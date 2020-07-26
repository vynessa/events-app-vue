<template>
  <layout>
    <main-container>
      <main>Your tickets have been confirmed and
          sent to your email address at
          <span class="email-link">ted@flutterwave.com</span>
      </main>
      <button class="btn-yellow">Buy more tickets</button>
    </main-container>
  </layout>
</template>

<script>
import MainContainer from '../components/MainContainer'
import Layout from '../pages/Layout';

export default {
  components: {
    MainContainer,
    Layout
  }
}
</script>
