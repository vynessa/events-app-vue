<template>
  <main-container>
    <event-detail>
    </event-detail>
  </main-container>  
</template>

<script>
import MainContainer from "../components/MainContainer";
import EventDetail from "../components/EventDetailContainer";
import Layout from '../pages/Layout';

export default {
  created() {
    this.$emit('update:layout', Layout);
  },
  components: {
    MainContainer,
    EventDetail
  },
  destroyed(){
    this.$destroy();
  }
}
</script>
