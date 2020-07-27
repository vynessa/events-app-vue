<template>
  <div>
    <modal 
      v-if="showRegisterModal"
      :showRegisterModal="showRegisterModal"
      :toggleModal="toggleRegisterModal"
    >
      <div v-if="formSubmitted" class="register-success-wrapper">
        <checkmark></checkmark>
        <p>
          You have successfully registered for {{event.name}}
        </p>
      </div>
      <div v-else class="register-form-wrapper">
        <h3 class="register-header-text">Register for free</h3>
        <hr class="register-horizontal-line">
        <FormulateForm  
            v-model="values"
            :schema="schema"
          />
        <button class="modal-btn btn-yellow" type="submit" v-on:click="onSumbitRegisterForm()">Register</button>
      </div>
    </modal>

    <main-container>  
      <loader v-if="loading" :loading="loading"></loader>
      <div v-else class="event-detail">
        <div class="event-detail__info">
          <div class="event-detail__info-main">
            <h6 class="event-detail__info-header">{{displayParsedDate(event.start_time)}}</h6>
            <h4 class="event-detail__info-title">{{event.name}}</h4>
            <em class="event-detail__info-description">{{event.description}}</em>
            <p class="event-detail__info-price">N5,000 - N1,000,000</p>
            <button v-on:click="handleBtnClick(event.is_free)" class="event-detail__register-btn btn-yellow">{{event.is_free ? "Register for free": "Buy Tickets"}}</button>
          </div>

          <div class="event-detail__info-main">
            <img class="event-detail__info-img" :src="event.image || '../assets/anthony-unsplash.jpg'">
          </div>
        </div>

        <hr class="horizontal-line">

        <div class="event-detail__info">
          <div class="event-detail__info-extra">
            <h6 class="event-detail__info-header event-detail__venue">Venue</h6>
            <h4 class="event-detail__info-text">{{event.venue}}</h4>

            <div class="event-detail__directions event-detail__directions">
              <font-awesome-icon :icon="['far', 'map']" size="1x" :style="{ color: '#F5A623' }" />
              <a href="" class="event-detail__directions-links">
                View map for directions
              </a>
            </div>
          </div>
          <div class="event-detail__info-extra">
            <h6 class="event-detail__info-header event-detail__date">Date and time</h6>
            <h4 class="event-detail__info-text">{{displayParsedDateTime(event.start_time)}}</h4>

            <h6 class="event-detail__info-header event-detail__social">Social links</h6>
            <div class="event-detail__social-links" v-if="event.social_links && event.social_links.length > 0"> 
              N/A
              <!-- <p v-for="(socialLink, index)in event.social_links" :key="index" class="navbar-links">{{socialLink}}</p> -->
            </div> 
            <p class="event-detail__info-text" v-else>N/A</p>
          </div>
        </div>
      </div>
    </main-container>  
  </div>
</template>

<script>
import MainContainer from '../components/MainContainer';
import EventsApi from '../services/api';
import Modal from '../components/modals/Modal';
import { parseTime, parseDateTime } from '../services/utils';
import Checkmark from '../components/alerts/Checkmark';
import Loader from '../components/loaders/loader';

export default {
  data () {
    return {
      loading: false,
      formLoading: false,
      event: null,
      showRegisterModal: false,
      formSubmitted: false,
      notification: null,
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
  created() {
    this.getEventDetail;
  },
  computed: {
    getEventDetail() {
      this.loading = true;
      EventsApi.getEventDetail(this.$route.params.id).then((response) => {
        this.event = response.data
        this.loading = false;
      })
      .catch(error => {
        this.notification = {...error, type:'error'};
        this.displayToast();
      });
    },
    
  },
  methods: {
     displayToast() {
      this.$notify({
        group: 'toast',
        title: this.notification.type === 'success' ? 'Success!' : "Error!",
        text: this.notification.message,
        type: this.notification.type
      });
    },
    setEvent(){
      localStorage.setItem("selectedEvent", JSON.stringify(this.event));
      this.$router.push('/payment-page');
    },
    toggleRegisterModal () {
      this.showRegisterModal = !this.showRegisterModal
    },
    displayParsedDate(time) {
      return parseTime(time)
    },
    displayParsedDateTime(time) {
      return parseDateTime(time)
    },
    handleBtnClick(eventFree){
      eventFree ? this.toggleRegisterModal() : this.setEvent()
    },
    onSumbitRegisterForm() {
      this.formLoading = true;
      EventsApi.postRegistrationDetails(this.values)
        .then((response) => {
          this.notification = { 
            message: response.message, 
            type: response.status
          };
          this.displayToast();
        })
        .catch(error => {
          this.notification = {...error, type:'error'};
          this.displayToast();
        });
      this.formLoading = false;
      this.formSubmitted = true;
    },
  },
  components: {
    MainContainer,
    Modal,
    Loader,
    Checkmark
  }
}
</script>
