<template>
  <div>
    <p v-if="!event">...loading</p>

    <div v-else class="event-detail">
      <div class="event-detail__info event-">
        <h6 class="event-detail__info-date">{{displayParsedTime(event.start_time)}}</h6>
        <h4 class="event-detail__info-title">{{event.name}}</h4>
        <p>{{event.description}}</p>
        <p class="event-detail__info-price">N5,000 - N1,000,000</p>
        <button @click="handleClick(event.is_free)" class="event-detail__register-btn">{{event.is_free ? "REGISTER for free": "Buy Tickets"}}</button>
      </div>

      <div class="event-detail__info event-flyer">
        <img class="event-detail__info-img" :src="event.image || `../assets/anthony-unsplash.jpg`">
      </div>

      <hr class="horizontal-line">

      <div class="event-detail__info event-venue">
        <h6 class="event-detail__info-venue-text">Venue</h6>
        <h4 class="event-detail__info-venue">{{event.venue}}</h4>
        <a href="" class="navbar-links">
          View map for directions
        </a>
      </div>
      <div class="event-detail__info event-date-time">
        <h6 class="event-detail__info-date">Date and time</h6>
        <div class="event-detail__social-links" v-if="event.social_links || event.social_links.length > 0"> 
          <p class="navbar-links">https://www.nath.com</p>
          <p class="navbar-links">https://www.twitter.com/nath</p>
          <p class="navbar-links">https://www.instagram.com/nath</p>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import MainContainer from '../components/MainContainer';
import EventsApi from '../services/api';
import { parseTime } from '../services/utils';

export default {
  data () {
    return {
      loading: false,
      event: null,
      showRegisterModal: false
    }
  },
  created() {
    this.getEventDetail()
  },
  methods: {
    getEventDetail() {
      this.loading = true;
      EventsApi.getEventDetail(this.$route.params.id).then((response) => {
        this.event = response.data
      })
    },
    setEvent(){
      localStorage.setItem("selectedEvent", JSON.stringify(this.event));
      this.$router.push('/payment-page');
    },
    handleClick(isFree){
      isFree ? this.showRegisterModal : this.setEvent()
    },
    displayParsedTime(time) {
      return parseTime(time)
    }
  },
  components: {
    MainContainer
  }
}
</script>
