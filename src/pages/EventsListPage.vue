<template>
  <layout>
    <main-container>
      <events-list>
      </events-list>
    </main-container>
  </layout>
</template>

<script>
import MainContainer from '../components/MainContainer';
import EventsList from '../components/EventsListContainer';
import Layout from './Layout';

export default {
  components: {
    MainContainer,
    EventsList,
    Layout
  }
}
</script>
