<template>
  <div class="no-ticket-container">
    <h3 class="header-text-normal no-ticket-text">
      Enter your email and we'll send your tickets right away!
    </h3>
    <card>
      <div v-if="!formSubmitted">
        <FormulateInput
          name="email"
          type="email"
          label="Email address"
          validation="required|email"
      
          v-model="value"
        />
        <button class="btn-yellow" v-on:click="onSubmitForm()" type="submit">Confirm and send ticket</button>
      </div>
      <div v-else class="no-ticket-success">
        <checkmark></checkmark>
        <p>Your tickets have been confirmed and
            sent to your email address at
            <span class="email-link">ted@flutterwave.com</span>
        </p>
        <button v-on:click="onBuyMore()" class="btn-yellow">Buy more tickets</button>
      </div>
    </card>
  </div>
</template>

<script>
import Card from './cards/Card';
import Checkmark from './alerts/Checkmark';

export default {
  data() {
    return {
      value: "",
      formSubmitted: false
    }
  },
  methods: {
    onSubmitForm() {
      this.formSubmitted = true
    },
    onBuyMore() {
      this.$router.push('/events');
    }
  },
  components: {
    Card,
    Checkmark
  }
}
</script>
