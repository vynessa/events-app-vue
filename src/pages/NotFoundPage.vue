<template>
  <layout>
    <main-container>
      <div class="not-found-wrapper">
        <h1 class="no-found-text">
          {{pageHeaderText}}
        </h1>
        <button 
          v-on:click="goBack()" 
          type="button"
          class="btn-yellow btn-back">Go back</button>
      </div>
    </main-container>
  </layout>
</template>

<script>
import MainContainer from '../components/MainContainer';
import Layout from './Layout';

export default {
  components: {
    MainContainer,
    Layout
  },
  methods: {
    goBack(event){
      window.history.back();
    }
  },
  props: ["pageHeaderText"]
}
</script>