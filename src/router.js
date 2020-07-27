import Vue from 'vue';
import Router from 'vue-router';
import EventsListPage from './pages/EventsListPage.vue';
import EventDetailPage from './pages/EventDetailPage.vue';
import PaymentPage from './pages/PaymentPage.vue';
import PaymentSuccessfulPage from './pages/PaymentSuccessfulPage.vue';
import NoTicketPage from './pages/NoTicketPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'events',
      component: EventsListPage,
      alias: '/events' 
    },
    {
      path: '/events/:id',
      name: 'eventdetail',
      component: EventDetailPage
    },
    {
      path: '/payment-page',
      name: 'paymentpage',
      component: PaymentPage
    },
    {
      path: '/payment-successful',
      name: 'paymentsuccessfulpage',
      component: PaymentSuccessfulPage
    },
    {
      path: '/no-ticket',
      name: 'noticket',
      component: NoTicketPage
    }
  ]
});
