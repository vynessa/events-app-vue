<template>
  <div>
    <div class="event-ticket-regular">
      <p>{{eventTicketType.name}}</p>
      <p>{{eventTicketType.price}}</p>
      <div>
        <p @click="removeFromCart(eventTicketType, --ticketCount)">-</p>
        <p>{{ticketCount}}</p>
        <p @click="addToCart(eventTicketType, ++ticketCount)">+</p>
      </div>
      <hr class="horizontal-line">
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      ticketCount: 0
    }
  },
  props: {
    eventTicketType: Object,
    addToCart: Function,
    removeFromCart: Function
  }

}
</script>

