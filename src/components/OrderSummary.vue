<template>
  <div class="order-summary">
    <div v-if="!orderCompleted" class="order-summary__details">
      <div class="order-summary__list">
        <h3 class="order-summary__header">Order Summary</h3>
        <hr class="order-summary__horizontal-line">
        <p v-if="cartItems.length === 0" class="empty-state">No items in cart</p>
        <div v-else class="order-summary__selected-item" v-for="cartItem in cartItems" :key="cartItem.ticketId">
          <p>{{cartItem.ticketCount}} - {{cartItem.ticketTypeName}}</p>
          <p>{{cartItem.amount}}</p>
        </div>
      </div>

      <div class="order-summary__payment-section">
        <hr class="order-summary__horizontal-line">
        <div class="order-summary__subtotal">
          <p>Subtotal</p>
          <p>N{{subtotal}}</p>
        </div>
        <div class="order-summary__vat">
          <p>VAT</p>
          <p>N{{vat}}</p>
        </div>
        <div class="order-summary__total">
          <p>Total Payment</p>
          <p>N{{total}}</p>
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
      <button v-on:click="makePayment()" class="order-payment-btn btn-yellow">Pay {{total}}</button>
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
        <p>100% customer protection</p>
        <p>Money back guarantee</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data(){
    return {
      orderCompleted: false,
      subtotal: 0,
      vat: 0,
      total: 0,
      values: {},
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
  props: ['cartItems'],
  methods: {
    cartItemsSubTotal(cartItems){
      let sumOfCartItems = cartItems.reduce((acc, curr) => {
        return acc + curr.amount
      }, 0)
      console.log("sumOfCartItems", sumOfCartItems)
      // this.vat = sumOfCartItems * 0.01;
      this.subtotal = sumOfCartItems;
      return;
    },
    cartItemsTotal(){
      this.total = this.subtotal + this.vat;
      return
    },
    generateIdRef(){
      return `EVFL_${Math.random().toString(36).substr(2, 9)}`;
    },
    toggleOrderSummary() {
      this.orderCompleted = !this.orderCompleted
    },
    makePayment() {
      FlutterwaveCheckout({
        public_key: "FLWPUBK-30e949898e40a17e49e4bc880b5176b5-X",
        tx_ref: this.generateIdRef(),
        amount: 54600,
        currency: "NGN",
        payment_options: "card",
        redirect_url: // specified redirect URL
          "/payment-successful",
          // "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34",
        // meta: {
        //   consumer_id: 23,
        //   consumer_mac: "92a3-912ba-1192a",
        // },
        customer: {
          email: "bepoka7430@tmauv.com",
          phone_number: "0810232324304",
          name: "Vy Lol",
        },
        // callback: function (data) {
        //   console.log(data);
        // },
        customizations: {
          title: "Events Listing App",
          description: "Payment Gateway",
          logo: "https://assets.piedpiper.com/logo.png",
        },
      });
    }
  }
}
</script>

