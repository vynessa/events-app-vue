<template>
  <div class="event-detail">
    <div class="event-detail__info event-">
      <h6 class="event-detail__info-date">8TH FEBRUARY 2019</h6>
      <h4 class="event-detail__info-title">{{event.name}}</h4>
      <p>{{event.description}}</p>
      <p class="event-detail__info-price">N5,000 - N1,000,000</p>
      <button class="event-detail__register-btn">Buy Tickets | REGISTER for free</button>
    </div>

    <div class="event-detail__info event-flyer">
      <img class="event-detail__info-img" src="../assets/anthony-unsplash.jpg">
    </div>

    <hr class="horizontal-line">

    <div class="event-detail__info event-venue">
      <h6 class="event-detail__info-venue-text">Venue</h6>
      <h4 class="event-detail__info-venue">{{event.venue}}</h4>
      <a href="" class="navbar-links">
        View map for directions
      </a>
    </div>
    <div class="event-detail__info event-date-time">
      <h6 class="event-detail__info-date">Date and time</h6>
      <div class="event-detail__social-links"> 
        <p class="navbar-links">https://www.nath.com</p>
        <p class="navbar-links">https://www.twitter.com/nath</p>
        <p class="navbar-links">https://www.instagram.com/nath</p>
      </div> 
    </div>
  </div>
</template>

<script>
import MainContainer from '../components/MainContainer';

export default {
  data () {
    return {
      event: {
        createdAt: "2020-04-30T10:51:37.000Z",
        description: "For rappers",
        end_time: "2020-08-21T00:00:00.000Z",
        id: 1,
        image: null,
        is_free: false,
        is_sold_out: false,
        name: "Lyricist Lounge",
        num_of_tickets: 10000,
        social_links: "{}",
        start_time: "2020-08-21T00:00:00.000Z",
        tags: "Music",
        tickets_sale_end_date: "2020-08-21T00:00:00.000Z",
        updatedAt: "2020-04-30T10:51:37.000Z",
        venue: "Lagos"
      }
    }
  },
  components: {
    MainContainer
  }
}
</script>
