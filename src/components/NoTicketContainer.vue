<template>
  <div>
    <h4 class="">
      Enter your email and we'll send your tickets right away!
    </h4>
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
      <div v-else>
        <p>Your tickets have been confirmed and
            sent to your email address at
            <span class="email-link">ted@flutterwave.com</span>
        </p>
        <button class="btn-yellow">Buy more tickets</button>

      </div>
    </card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';

export default {
  data() {
    return {
      value: "",
      formSubmitted: true
    }
  },
  methods: {
    onSubmitForm() {
      this.formSubmitted = true
    }
  },
  components: {
    Card
  }
}
</script>
