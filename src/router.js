import Vue from 'vue'
import Router from 'vue-router'
import NoTickets from "./components/NoTicket"
import CreateEvent from "./components/CreateEvent"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/no-tickets',
      name: 'notickets',
      component: NoTickets
    },
    {
      path: '/create-event',
      name: 'createevent',
      component: CreateEvent
    },
  ]
})