<template>
  <form v-if="!formSubmitted">
    <label for="email">Enter your email address here</label>
    <input type="text" name="email-address"/> 
  </form>
</template>

<script>
export default {
  data() {
    return {
      formSubmitted: false
    }
  }
}
</script>
