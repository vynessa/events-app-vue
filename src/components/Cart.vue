<template>
  <div class="event-payment-page">
      <button class="close-payment-page">x Close</button>
      <header>
        <h4 class="event-detail__info-title">{{event.name}}</h4>
        <h6 class="event-detail__info-date">8TH FEBRUARY 2019</h6>
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
        <p>Ticket sale ends on 22nd November 2019</p>
      </div>
    </div>
</template>

<script>
import TicketType from '../components/TicketType';

export default {
  props: ['event', 'eventTicketTypes'],
  methods: {
    addToCart(eventTicketType, ticketCount) {
      this.$emit('add-click', {...eventTicketType}, ticketCount)
    },
    removeFromCart(eventTicketType, ticketCount){
      this.$emit('remove-click', {...eventTicketType}, ticketCount)
    }
  },
  components: {
    TicketType
  }
}
</script>

