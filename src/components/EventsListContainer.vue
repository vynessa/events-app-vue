<template>
  <div>
    <h1 class="header-text">
      {{text}}
    </h1>
    <loader v-if="loading" :loading="loading"></loader>
    <div v-else class="events-list" > 
      <div class="events-list__item" v-for="event in eventsDataList.events" :key="event.id">
        <img v-on:click="displayEvent(event.id)" class="events-list__img" :src="event.image || `../assets/anthony-unsplash.jpg`">
        <h6 class="events-list__date">{{displayParsedTime(event.start_time)}}</h6>
        <h4 class="events-list__title">{{event.name}}</h4>
        <p class="events-list__price">{{getEventType(event.is_free, event.is_sold_out)}}</p>
      </div>
    </div>
  </div>  
</template>

<script>
import EventsApi from "../services/api"
import Loader from '../components/loaders/loader';
import { parseTime } from '../services/utils';

export default {
   data () {
    return {
      text: "The best events happening now.",
      loading: false,
      eventsDataList: [],
    }
  },
  components: {
    Loader
  },
  created() {
    this.getEvents;
  },
  computed: {
     getEvents() {
      this.loading = true;
      EventsApi.getEvents().then((response) => {
        this.eventsDataList = response.data
        this.loading = false;
      });
    },
  },
  methods: {
    displayEvent(id) {
      this.$router.push(`/events/${id}`)
    },
    displayParsedTime(time) {
      return parseTime(time)
    },
    getEventType(freeEvent, status){
      if (freeEvent && !status){
        return "Free"
      }
      if(!freeEvent && !status){
        return "N5000 - N50000000"
      }
      if(status){
        return "Sold Out"
      }
    }
  }
}
</script>
