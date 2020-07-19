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
          <p>{{cartItemsSubTotal(cartItems)}}</p>
        </div>
        <div class="order-vat">
          <p>VAT</p>
          <p>{{vat}}</p>
        </div>
        <div class="order-total">
          <p>Total</p>
          <p>{{cartItemsTotal()}}</p>
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
        <p>{{cartItemsTotal()}}</p>
      </div>
      <button class="order-payment-btn">Pay {{cartItemsTotal()}}</button>
    
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      orderCompleted: false,
      subtotal: 0,
      vat: 0,
      total: 0
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
    }
  }
}
</script>

