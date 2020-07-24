import Vue from 'vue'
import App from './App.vue'
import VueFormulate from '@braid/vue-formulate'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faBars, 
         faMinusCircle, faPlusCircle,
         faArrowLeft, faCertificate, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import router from './router'
import babelPolyfill from 'babel-polyfill'

library.add(
  faMap, faTimes,
  faBars, faMinusCircle,
  faPlusCircle, faArrowLeft,
  faCertificate, faCheck
);

Vue.use(VueFormulate, {
  classes: {
    input: 'form-input',
  }
});

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount("#app");
