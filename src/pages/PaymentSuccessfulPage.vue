<template>
  <layout>
    <main-container>
      <div class="payment-success-container">
        <card>
          <div class="payment-success-wrapper">
            <checkmark></checkmark>
            <p>Your tickets for {{selectedEvent.name}} has been confirmed and
                sent to your email address at
                <span class="email-link">{{paymentDetails.email}}</span>
            </p>
            <button v-on:click="onBuyMore()" class="btn-yellow">Buy more tickets</button>
          </div>
        </card>
      </div>
    </main-container>
  </layout>
</template>

<script>
import MainContainer from '../components/MainContainer'
import Layout from '../pages/Layout';
import Checkmark from '../components/alerts/Checkmark';
import Card from '../components/cards/Card';


export default {
  data(){
    return {
      selectedEvent: null,
      paymentDetails: null
    }
  },
  components: {
    MainContainer,
    Layout,
    Checkmark,
    Card
  },
  created() {
    this.paymentDetails = JSON.parse(localStorage.getItem('paymentData'));
    this.selectedEvent = JSON.parse(localStorage.getItem('selectedEvent'));
  },
  methods: {
    onBuyMore(){
      this.$router.push('/events');
    }
  }
}
</script>
