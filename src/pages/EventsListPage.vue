<template>
  <main-container>
    <events-list>
    </events-list>
  </main-container>
</template>

<script>
import MainContainer from '../components/MainContainer';
import EventsList from '../components/EventsListContainer';
import Layout from '../pages/Layout';

export default {
  created() {
    this.$emit('update:layout', Layout);
  },
  components: {
    MainContainer,
    EventsList
  }
}
</script>
