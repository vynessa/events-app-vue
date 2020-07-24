<template>
  <div class="event-ticket-wrapper">
    <div class="event-ticket__category">
      <p class="event-ticket-type__name">{{eventTicketType.name}}</p>
      <p class="event-ticket-type__price">{{eventTicketType.price}}</p>
      <div class="event-cart__btn">
        <span class="event-cart__btn__remove" @click="removeFromCart(eventTicketType, --ticketCount)">
          <font-awesome-icon 
          :icon="['fas', 'minus-circle']" 
          size="xs"
          :style="{ color: '#fff' }"
          />
        </span>
        <span class="event-cart__btn__ticket-count">{{ticketCount}}</span>
        <span class="event-cart__btn__add" @click="addToCart(eventTicketType, ++ticketCount)">
          <font-awesome-icon 
          :icon="['fas', 'plus-circle']" 
          size="xs"
          :style="{ color: '#fff' }"
          />
        </span>
      </div>
    </div>
    <hr class="cart-horizontal-line">
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

