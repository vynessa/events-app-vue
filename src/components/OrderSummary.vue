<template>
  <div class="order-summary">
    <div v-if="!orderCompleted" class="order-summary__details">
      <div class="order-summary__list">
        <h3 class="order-summary__header header-text-caps">Order Summary</h3>
        <hr class="order-summary__horizontal-line">
        <p v-if="cartItems.length === 0" class="empty-state">No items in cart</p>
        <div v-else class="order-summary__selected-item" v-for="cartItem in cartItems" :key="cartItem.ticketId">
          <h4 class="header-text-normal">{{cartItem.ticketCount}} - {{cartItem.ticketTypeName}}</h4>
          <p>N{{formatPrice(cartItem.amount)}}</p>
        </div>
      </div>

      <div class="order-summary__payment-section">
        <hr class="order-summary__horizontal-line">
        <div class="order-summary__subtotal">
          <h4 class="header-text-normal">Subtotal</h4>
          <p>N{{formatPrice(subtotal)}}</p>
        </div>
        <div class="order-summary__vat">
          <h4 class="header-text-caps">VAT</h4>
          <p>N{{formatPrice(vat)}}</p>
        </div>
        <div class="order-summary__total">
          <h4 class="header-text-caps">Total Payment</h4>
          <span class="header-text-caps">N{{formatPrice(total)}}</span>
        </div>
        <button v-on:click="toggleOrderSummary()" class="order-summary__continue-btn btn-yellow">Continue</button>
      </div>
    </div>

    <div v-else class="order-registeration">
      <h3>
        <font-awesome-icon 
          :icon="['fas', 'arrow-left']" 
          size="xs"
          v-on:click="toggleOrderSummary()"
          />
        Go back
      </h3>
      <hr class="order-summary__horizontal-line">

      <FormulateForm  
        v-model="values"
        :schema="schema"
      />
      <div class="order-summary__total">
        <p>Total payment</p>
        <p>N{{total}}</p>
      </div>

      <loader v-if="loading" :loading="loading"></loader>
      <button v-else v-on:click="onCreateOrder()" class="order-payment-btn btn-yellow">Pay {{total}}</button>
    </div>

    <footer class="order-summary__footer">
      <span class="order-summary__footer__icon">
        <font-awesome-layers>
          <font-awesome-icon 
          :icon="['fas', 'certificate']" 
          size="1x"
          :style="{color: '#2D9CDB'}"
          />
          <font-awesome-icon 
          :icon="['fas', 'check']" 
          size="xs"
          :style="{ color: '#FFF' }"
          transform="shrink-6"
          />
        </font-awesome-layers>
      </span>
      <div class="order-summary__footer__text">
        <h4 class="header-text-normal ">100% customer protection</h4>
        <p class="event-detail__text">Money back guarantee</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Loader from './loaders/Loader';
import EventsApi from '../services/api.js';
import { formatter, displayToast } from '../services/utils.js';

export default {
  data(){
    return {
      loading: false,
      orderCompleted: false,
      values: {},
      createdOrder: [],
      notification: null,
      schema: [
        {
          label: "Full Name",
          name:"name",
          type:"text",
          validation: "required"
        },
        {
          label: "Email Address",
          name:"email",
          type:"email",
          validation: "required|email"
        },
        {
          label: "Phone Number",
          name:"phone",
          type:"number",
          validation: "required"
        }
      ]
    }
  },
  components: { Loader },
  props: ['cartItems', 'subtotal', 'vat', 'total', 'event'],
  methods: {
    formatPrice(price){
      return price === 0 ? price: formatter(price)
    },
    onDisplayToast() {
      displayToast(this.$notify, this.notification)
    },
    ticketsBought() {
      return this.cartItems.reduce((acc, curr) => {
        acc[curr.ticketId] = curr.ticketCount
        return acc;
      }, {})
    },
    generateIdRef(){
      return `EVFL_${Math.random().toString(36).substr(2, 9)}`;
    },
    toggleOrderSummary() {
      if(this.cartItems.length === 0){
        this.notification = {
          message: "Please add a ticket to your cart",
          type: 'warn'
        };
        this.onDisplayToast();
      } else {
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        this.orderCompleted = !this.orderCompleted
      }
    },
    onCreateOrder() {
      if(Object.keys(this.values).length === 0) {
        this.notification = {
          message: "Please enter registeration details",
          type: 'warn'
        };
        this.onDisplayToast();
      }
      else{
         const data = {
          event_id: event.id,
          email: this.values.email,
          phone: this.values.phone,
          name: this.values.name,
          base_amount: this.total,
          value_added_tax: this.vat,
          tickets_bought: JSON.stringify(this.ticketsBought())
        };

        localStorage.setItem('paymentData', JSON.stringify(data));

        this.loading = true;

        EventsApi.createOrder(data).then((response) => {
          this.loading = true;
          this.notification = {
            message: "Your order has been created. Please make payment",
            type: response.status
          };
          this.onDisplayToast();
          this.createdOrder = response.data
          this.makePayment();
        })
        .catch((error) => {
          this.notification = {
            ...error,
            type: 'error'
          };
          this.onDisplayToast();
        });
      }
    },
    makePayment() {
      this.onCreateOrder;

      FlutterwaveCheckout({
        public_key: "FLWPUBK-30e949898e40a17e49e4bc880b5176b5-X",
        tx_ref: this.generateIdRef(),
        amount: this.total,
        currency: "NGN",
        payment_options: "card",
        redirect_url: "/payment-successful",
        customer: {
          email: this.values.email,
          phone_number: this.values.phone,
          name: this.values.name,
        },
        callback: function (data) {
          console.log('payment data', data);
          localStorage.removeItem('cartItems');
        },
        customizations: {
          title: "Events Listing App",
          description: "Payment Gateway",
          logo: "",
        },
      });
    }
  }
}
</script>

