<template>
  <div class="loader">
    <clip-loader 
      :loading="loading" 
      :color="loaderColor" 
      :size="loaderSize"
      :height="loaderHeight" 
      :width="loaderWidth"
    >
    </clip-loader>
  </div>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

export default {
  data() {
    return{
      loaderColor: "#F5A623",
      loaderSize: "100px",
      loaderHeight: "300px",
      loaderWidth: "200px"
    }
  },
  components: {
    ClipLoader
  },
  props: ['loading']
}
</script>

