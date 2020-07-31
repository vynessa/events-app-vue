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
        <loader v-if="loading"></loader>
        <fragment v-else>
          <empty-state 
            v-if="Object.keys(event).length === 0" 
            :pageHeaderText="pageHeaderText">
          </empty-state>
          <div v-else class="event-detail">
            <div class="event-detail__info">
              <div class="event-detail__info-main">
                <h6 class="event-detail__info-header">{{displayParsedDate(event.start_time) || 'N/A'}}</h6>
                <h4 class="event-detail__info-title">{{event.name}}</h4>
                <em class="event-detail__info-description">{{event.description}}</em>
                <p class="event-detail__info-price">N5,000 - N1,000,000</p>
                <button v-on:click="handleBtnClick(event.is_free)" class="event-detail__register-btn btn-yellow">{{event.is_free ? "Register for free": "Buy Tickets"}}</button>
              </div>

              <div class="event-detail__info-main">
                <img class="event-detail__info-img" :src="event.image || fallBackImage">
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
                <h4 class="event-detail__info-text">{{displayParsedDateTime(event.start_time) || 'N/A'}}</h4>

                <h6 class="event-detail__info-header event-detail__social">Social links</h6>
                <div 
                  class="event-detail__social-links" 
                  v-if="event.social_links && typeof event.social_links === 'object' && event.social_links.length > 0"> 
                  <p v-for="socialLink in event.social_links" :key="socialLink.id" class="navbar-links">{{socialLink}}</p>
                </div> 
                <p class="event-detail__info-text" v-else>N/A</p>
              </div>
            </div>
          </div>
        </fragment>
    </main-container>  
  </div>
</template>

<script>
import MainContainer from './MainContainer';
import EventsApi from '../services/api';
import Modal from './modals/Modal';
import Checkmark from './alerts/Checkmark';
import Loader from '../components/loaders/Loader';
import EmptyState from '../components/alerts/EmptyState';
import { Fragment } from 'vue-fragment';
import { parseTime, parseDateTime, displayToast } from '../services/utils';

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
      fallBackImage: {
        'background-image': `url(${require('../assets/anthony-unsplash.jpg')})`
      },
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

      const apiService = new EventsApi();

      apiService.getEventDetail(this.$route.params.id).then((response) => {
        this.event = response.data
        this.loading = false;
      })
      .catch(error => {
        this.notification = {...error, type:'error'};
        this.onDisplayToast();
      });
    },
    pageHeaderText() {
      return "Event does not exist";
    }
  },
  methods: {
    onDisplayToast() {
      displayToast(this.$notify, this.notification);
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

      const apiService = new EventsApi();

      apiService.postRegistrationDetails(this.values, event.id)
        .then((response) => {
          this.notification = { 
            message: response.message, 
            type: response.status
          };
          this.onDisplayToast();
        })
        .catch(error => {
          this.notification = {...error, type:'error'};
          this.onDisplayToast();
        });
      this.formLoading = false;
      this.formSubmitted = true;
    },
  },
  components: {
    MainContainer,
    Modal,
    Loader,
    Checkmark,
    Fragment,
    EmptyState
  }
}
</script>
