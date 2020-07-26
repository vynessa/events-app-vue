<template>
  <event-detail>
  </event-detail>
</template>

<script>
import EventDetail from "../components/EventDetailContainer";
import Layout from '../pages/Layout';

export default {
  created() {
    this.$emit('update:layout', Layout);
  },
  components: {
    EventDetail
  },
  destroyed(){
    this.$destroy();
  }
}
</script>
