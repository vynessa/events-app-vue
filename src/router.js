import Vue from 'vue'
import Router from 'vue-router'
import EventsListPage from "./pages/EventsListPage"
import EventDetailPage from "./pages/EventDetailPage"
import PaymentPage from './pages/PaymentPage'
import PaymentSuccessfulPage from './pages/PaymentSuccessfulPage.vue'
import NoTicketPage from "./pages/NoTicketPage"

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/events',
      name: 'events',
      component: EventsListPage
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
