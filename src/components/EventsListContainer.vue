<template>
  <div>
    <h1 class="events-header-text">
      {{text}}
    </h1>
    <loader v-if="loading" class="event-list__loader"></loader>
    <div v-else class="events-list-wrapper">
      <div class="events-list"> 
        <div 
          class="events-list__item" 
          v-for="event in eventsDataList" 
          v-on:click="displayEvent(event.id)" 
          :key="event.id">
          <img 
            class="events-list__img" 
            v-bind:src="getImage(event.image)">
          <h6 class="events-list__date">{{displayParsedTime(event.start_time) || 'N/A'}}</h6>
          <h4 class="events-list__title">{{event.name}}</h4>
          <p class="events-list__price">{{getEventType(event.is_free, event.is_sold_out)}}</p>
        </div>

      </div>
      <div class="pagination-wrapper">
        <loader v-if="loadMore" class="pagination__loader"></loader>
        <p v-if="noNewerEvents">You are up to date!</p>
        <button v-else class="btn-yellow pagination-btn" v-on:click="loadMoreEvents()">Load More Events</button>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../components/loaders/Loader';
import EventsApi from "../services/api";
import { parseTime } from '../services/utils';
import { constants } from 'zlib';

export default {
   data () {
    return {
      text: "The best events happening now.",
      loading: false,
      eventsDataList: [],
      currentPageNumber: 1,
      limit: 6,
      noNewerEvents: false,
      loadMore: false,
      notification: null,
      memoizedData: null,
      fallBackImage: {
        'background-image': `url(${require('../assets/anthony-unsplash.jpg')})`
      }
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
      const queryData = {
        page: this.currentPageNumber,
        limit: this.limit
      }

      this.loading = true;
      const apiService = new EventsApi();

      apiService.getEvents(queryData).then((response) => {
          this.eventsDataList = response.data.events
          this.loading = false;
        })
        .catch(error => {
          this.notification = {...error, type:'error'};
          this.displayToast;
        })

      // apiService.memoizedData(() => {
      //   apiService.getEvents(queryData).then((response) => {
      //     this.eventsDataList = response.data.events
      //     this.loading = false;
      //   })
      //   .catch(error => {
      //     this.notification = {...error, type:'error'};
      //     this.displayToast;
      //   })
      // });
    }
  },
  methods: {
    displayToast() {
      this.$notify({
        group: 'toast',
        title: this.notification.type === "success" ? "Success!" : "Error!",
        text: this.notification.message,
        type: this.notification.type
      });
    },
    getImage(eventImage){
      return eventImage || this.fallBackImage
    },
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
    },
    loadMoreEvents() {
      this.currentPageNumber++;

      let eventsList = this.eventsDataList;

      const queryData = {
        page: this.currentPageNumber,
        limit: this.limit
      };
      this.loadMore = true;

      const apiService = new EventsApi();

      apiService.getEvents(queryData).then((response) => {        
        const newerEventsList = response.data.events

        if(newerEventsList.length === 0){
          this.noNewerEvents = true
        }
        else {
          this.eventsDataList = [...eventsList, ...newerEventsList]
        }
        this.loadMore = false;
      })
      .catch(error => {
        this.notification = {...error, type: response.data.status};
        this.displayToast();
      });
    }
  }
}
</script>
