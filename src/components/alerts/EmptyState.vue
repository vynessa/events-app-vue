<template>
  <div class="not-found-wrapper">
    <h1 class="no-found-text">
      {{pageHeaderText}}
    </h1>
    <button 
      v-on:click="goBack()" 
      type="button"
      class="btn-yellow btn-back">Go back</button>
  </div>
</template>

<script>

export default {
  methods: {
    goBack(event){
      window.history.back();
    }
  },
  props: ["pageHeaderText"]
}
</script>