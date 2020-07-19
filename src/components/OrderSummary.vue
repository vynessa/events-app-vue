<template>
  <div>
    <div v-if="!orderCompleted" class="order">
      <div>
        <h3>Order Summary</h3>
        <hr class="horizontal-line">
        <p v-if="cartItems.length === 0">No items in cart</p>
        <div v-else class="order-details" v-for="cartItem in cartItems" :key="cartItem.ticketId">
          <p>{{cartItem.ticketCount}} - {{cartItem.ticketTypeName}}</p>
          <p>{{cartItem.amount}}</p>
        </div>
      </div>
      <div>
        <hr class="horizontal-line">
        <div class="order-subtotal">
          <p>Subtotal</p>
          <p>N110,000</p>
        </div>
        <div class="order-vat">
          <p>VAT</p>
          <p>N1,000</p>
        </div>
        <div class="order-total">
          <p>Total</p>
          <p>N111,000</p>
        </div>
        <button class="order-payment-btn">Continue</button>
      </div>
    </div>

    <div v-else class="registeration-form">
      <h3>|-- Go back</h3>
      <form action="">
        <input type="text">
        <input type="text">
      </form>
      <div>
        <p>Total payment</p>
        <p>N110,000</p>
      </div>
      <button class="order-payment-btn">Pay N110,000</button>
    
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      orderCompleted: false,
    }
  },
  props: ['cartItems']
}
</script>

