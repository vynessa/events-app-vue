<template>
  <div class="notification-wrapper" >
    <div class="notification" v-for="(error,index) in errors" :key="index">
      <p>{{error.message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'errors'
  ]
}
</script>

