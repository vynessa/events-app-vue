<template>
  <div>
    <form v-if="!formSubmitted">
      <label for="email">Enter your email address here</label>
      <input type="text" name="email-address"/> 
    </form>
    <div v-else>
      <p>Ticket sent</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formSubmitted: true
    }
  }
}
</script>
