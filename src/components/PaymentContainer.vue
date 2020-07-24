<template>
  <div>
    <loader v-if="loading" :loading="loading"></loader>
    <div v-else class="event-payment-wrapper">
      <cart 
        @add-click="updateCart"
        @remove-click="removefromCart"
        :event="event"
        :eventTicketTypes="eventTicketTypes"
      >
      </cart>

      <order-summary :cartItems="cartItems">
      </order-summary>
    </div>
  </div>
</template>

<script>
import Cart from "../components/Cart";
import OrderSummary from "../components/OrderSummary";
import EventsApi from "../services/api.js";
import Loader from '../components/loaders/loader';

export default {
  data () {
    return {
      loading:false,
      event: {},
      eventTicketTypes: [],
      ticketsSelected: [],
      cartItems: [],
    }
  },
  created() {
    this.getEventTicketTypes();
  },
  components: {
    Cart,
    OrderSummary,
    Loader
  },
  methods: {
    getEventTicketTypes(eventId) {
      this.loading = true;
      this.event = JSON.parse(localStorage.getItem('selectedEvent'));
      EventsApi.getEventTicketTypes(this.event.id).then((response) => {
        this.eventTicketTypes = response.data
        this.loading = false;
      })
      .catch((error) => {
        console.log(error)
      });

    },

    updateCart(eventTicketType, ticketCount) {

      
      console.log("--------start-------")


      if(this.cartItems.length === 0){
        this.cartItems.push({
          ticketCount,
          ticketId: eventTicketType.id,
          ticketTypeName: eventTicketType.name,
          amount: eventTicketType.price
        });
      }

      for(let key in this.cartItems){
        if(this.cartItems[key].ticketTypeName === eventTicketType.name ) {
          // console.log("ticket count", ticketCount)
          console.log("cartItems id", this.cartItems[key].ticketId)
          // // console.log("event ticket ID", eventTicketType)
          // console.log("event ticket ID", eventTicketType.id)
          this.cartItems[key].ticketCount = ticketCount
          this.cartItems[key].amount = ticketCount * eventTicketType.price
        }
        else{
          console.log("------NEW CART ITEM-------")
          // console.log("cartItems id", this.cartItems[key].ticketId)
          // // console.log("event ticket ID", eventTicketType)
          // console.log("event ticket ID", eventTicketType.id)
          this.cartItems.push({
            ticketCount,
            ticketId: eventTicketType.id,
            ticketTypeName: eventTicketType.name,
            amount: eventTicketType.price
          })
        }
        
      }

    },
    removefromCart(){

    }
  }
}
</script>

