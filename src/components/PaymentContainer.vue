<template>
  <div class="event-payment-wrapper">
    <div class="event-payment-page">
      <button class="close-payment-page">x Close</button>
      <header>
        <h4 class="event-detail__info-title">The Nathan cole experience</h4>
        <h6 class="event-detail__info-date">8TH FEBRUARY 2019</h6>
      </header>

      <div class="event-ticket-category">
        <div class="event-ticket-regular">
          <p>Regular</p>
          <p>N5000</p>
          <div>
            <p>-</p>
            <p>2</p>
            <p>+</p>
          </div>
          <hr class="horizontal-line">
        </div>

        <div class="event-ticket-vip">
          <p>VIP</p>
          <p>N100,000</p>
          <div>
            <p>-</p>
            <p>2</p>
            <p>+</p>
          </div>
          <hr class="horizontal-line">
        </div>

        <div class="event-ticket-table">
          <p>Table for 5</p>
          <p>N1,000,000</p>
          <div>
            <p>-</p>
            <p>0</p>
            <p>+</p>
          </div>
          <hr class="horizontal-line">
        </div>
        <p>Ticket sale ends on 22nd November 2019</p>
      </div>
    </div>

    <div v-if="!orderCompleted" class="order">
      <div>
        <h3>Order Summary</h3>
        <hr class="horizontal-line">
        <div class="order-details">
          <p>2 - Regular</p>
          <p>N10,000</p>
        </div>
        <div class="order-details">
          <p>1 - VIP</p>
          <p>N100,000</p>
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
  data () {
    return {
      orderCompleted: false
    }
  }
}
</script>

