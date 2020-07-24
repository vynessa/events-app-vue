<template>
  <div class="event-payment-page">
    <button           
      v-on:click="goBack()"
      class="btn-close close-payment-page">
      <span class="btn-close__icon">
        <font-awesome-icon 
          :icon="['fas', 'times']" 
          size="xs"
          />
        </span>
       Close
    </button>
    <header>
      <h4 class="event-detail__info-title">{{event.name}}</h4>
      <h6 class="event-detail__info-header event-detail__date">{{displayParsedDate(event.start_time)}}</h6>
    </header>

    <div class="event-ticket-category">
      <ticket-type 
        v-for="eventTicketType in eventTicketTypes"
        :eventTicketType="eventTicketType"
        :key="eventTicketType.id"
        :add-to-cart="addToCart"
        :remove-from-cart="removeFromCart"
      >
      </ticket-type>
      <p class="event-detail__text">Ticket sale ends on 22nd November 2019</p>
    </div>
  </div>
</template>

<script>
import TicketType from '../components/TicketType';
import { parseTime } from '../services/utils';

export default {
  props: ['event', 'eventTicketTypes'],
  methods: {
    addToCart(eventTicketType, ticketCount) {
      this.$emit('add-click', {...eventTicketType}, ticketCount)
    },
    removeFromCart(eventTicketType, ticketCount){
      this.$emit('remove-click', {...eventTicketType}, ticketCount)
    },
    displayParsedDate(time) {
      return parseTime(time)
    },
    goBack(){
      window.history.back()
    }
  },
  components: {
    TicketType
  }
}
</script>

