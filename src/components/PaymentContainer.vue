<template>
  <div>
    <!-- <loader v-if="loading" :loading="loading"></loader> -->
    <div class="event-payment-wrapper">
      <cart 
        @add-click="updateCart"
        @remove-click="removefromCart"
        :event="event"
        :eventTicketTypes="eventTicketTypes"
        :cartItems="cartItems"
      >
      </cart>

      <order-summary 
        :event="event"
        :cartItems="cartItems"
        :subtotal="subtotal"
        :vat="vat"
        :total="total"
      >
      </order-summary>
    </div>
  </div>
</template>

<script>
import Cart from "./Cart";
import OrderSummary from "./OrderSummary";
import EventsApi from "../services/api.js";
// import Loader from './loaders/Loader';

export default {
  data () {
    return {
      loading:false,
      event: {},
      eventTicketTypes: [],
      ticketsSelected: [],
      cartItems: [],
      subtotal: 0,
      vat: 0,
      total: 0
    }
  },
  created() {
    this.getEventTicketTypes();
    this.getCartItems();
    this.cartItemsSubTotal();
    this.cartItemsTotal();
  },
  components: {
    Cart,
    OrderSummary,
    // Loader
  },
  methods: {
    getCartItems(){
      const cartItems = JSON.parse(localStorage.getItem('cartItems'));
      if(cartItems){
        this.cartItems = cartItems;
      }
    },
    addNewCartItem(eventTicketType, cartItems) {
      cartItems.push({
        ticketCount: 1,
        ticketId: eventTicketType.id,
        ticketTypeName: eventTicketType.name,
        amount: eventTicketType.price
      });
    },
    cartItemsSubTotal(){
      let sumOfCartItems = this.cartItems.reduce((acc, curr) => {
        return acc + curr.amount
      }, 0)
      this.vat = sumOfCartItems * 0.01;
      this.subtotal = sumOfCartItems;
      return;
    },

    cartItemsTotal(){
      this.total = this.subtotal + this.vat;
      return
    },
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

    updateCart(eventTicketType) {
      if(this.cartItems.length === 0){
        this.addNewCartItem(eventTicketType, this.cartItems);
      }
      else {  
        const findCartItem = this.cartItems.find((cartItem) => {
          return cartItem.ticketId === eventTicketType.id
        });

        if(findCartItem){
          this.cartItems.forEach((cartItem, index) => {
            if (cartItem.ticketId === eventTicketType.id) {
              this.cartItems[index].ticketCount++;
              this.cartItems[index].amount = this.cartItems[index].ticketCount * eventTicketType.price;
            }
          });
        }
        else{
          this.addNewCartItem(eventTicketType, this.cartItems);
        }
      }
      this.cartItemsSubTotal();
      this.cartItemsTotal();
    },
    removefromCart(eventTicketType){
      const findCartItem = this.cartItems.find((cartItem) => {
        return cartItem.ticketId === eventTicketType.id
      });

      if(findCartItem){
        if(findCartItem.ticketCount > 1){
          this.cartItems.forEach((cartItem, index) => {
            if (cartItem.ticketId === eventTicketType.id) {
              this.cartItems[index].ticketCount--;
              this.cartItems[index].amount = this.cartItems[index].ticketCount * eventTicketType.price;
            }
          });
        }
        else {
          this.cartItems.forEach((cartItem, index) => {
            if (cartItem.ticketId === eventTicketType.id) {
              this.cartItems.splice(index, 1) ;
            }
          });
        }
      }
      return this.cartItems
      this.cartItemsSubTotal();
      this.cartItemsTotal();
    }
  }
}
</script>

