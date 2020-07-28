import Vue from 'vue'
import App from './App.vue'
import VueFormulate from '@braid/vue-formulate'
import Notifications from 'vue-notification'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faBars, 
         faMinus, faPlus, faCircle,
         faArrowLeft, faCertificate, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import router from './router';
import "babel-polyfill";

library.add(
  faMap, faTimes,
  faBars, faMinus,
  faPlus, faArrowLeft, 
  faCircle, faCertificate, faCheck
);

Vue.use(VueFormulate, {
  classes: {
    input: 'form-input',
  }
});
Vue.use(Notifications);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount("#app");
