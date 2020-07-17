<template>
  <div>
    <h1 class="header-text">
      {{text}}
    </h1>
    <div class="events-list" > 
      <div class="events-list__item" v-for="event in events" :key="event.id">
        <img class="events-list__img" :src="event.image || `../assets/anthony-unsplash.jpg`">
        <h6 class="events-list__date"  >8TH FEBRUARY 2019</h6>
        <h4 class="events-list__title">{{event.name}}</h4>
        <p class="events-list__price">N5,000 - N1,000,000</p>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      text: "The best events happening now.",
      events: [
      {
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
      },
      {
        createdAt: "2020-04-30T10:51:37.000Z",
        description: "For rappers",
        end_time: "2020-08-21T00:00:00.000Z",
        id: 2,
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
      },
      {
        createdAt: "2020-04-30T10:51:37.000Z",
        description: "For rappers",
        end_time: "2020-08-21T00:00:00.000Z",
        id: 3,
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
      },
      {
        createdAt: "2020-04-30T10:51:37.000Z",
        description: "For rappers",
        end_time: "2020-08-21T00:00:00.000Z",
        id: 4,
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
      },
      {
        createdAt: "2020-04-30T10:51:37.000Z",
        description: "For rappers",
        end_time: "2020-08-21T00:00:00.000Z",
        id: 5,
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
      },
      {
        createdAt: "2020-04-30T10:51:37.000Z",
        description: "For rappers",
        end_time: "2020-08-21T00:00:00.000Z",
        id: 6,
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
      },
      {
        createdAt: "2020-04-30T10:51:37.000Z",
        description: "For rappers",
        end_time: "2020-08-21T00:00:00.000Z",
        id: 7,
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
      },
      {
        createdAt: "2020-04-30T10:51:37.000Z",
        description: "For rappers",
        end_time: "2020-08-21T00:00:00.000Z",
        id: 8,
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
    ]
    }
  }
}
</script>

