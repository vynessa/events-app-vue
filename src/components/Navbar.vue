<template>
  <nav class="navbar">
    <div class="navbar-inner inner-container">
      <div class="navbar-header"> 
        <router-link to="/">
          <img id="navbar-logo" src='../assets/flutterwave-logo.png'>
        </router-link>
        <span class="navbar-icon" v-on:click="toggleClass()">
          <font-awesome-icon 
            v-if=active
            :icon="['fas', 'times']" 
            size="1x" 
            :style="{ color: '#F5A623' }" />
          <font-awesome-icon 
            v-else
            :icon="['fas', 'bars']" 
            size="1x" 
            :style="{ color: '#F5A623' }" />
          
        </span>
      </div>
      <div class="navbar-menu">
        <router-link to="/no-ticket" class="navbar-menu__list-item navbar-link">
            I didn't get my tickets
        </router-link>
        <router-link to="/">
          <button class="navbar-menu__list-item navbar-btn">Create your own event</button>
        </router-link>
      </div>
       <div class="mobile__navbar-menu" :class="{active: active}">
        <router-link to="/no-ticket" class="navbar-menu__list-item navbar-link">
            I didn't get my tickets
        </router-link>
        <router-link to="/">
          <button class="navbar-menu__list-item navbar-btn">Create your own event</button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      addClass: ''
    }
  },
  computed: {
    showNavMenu(){
      return this.active ? 'active' : ''
    }
  },
  methods: {
    toggleClass() {
      this.active = !this.active
    },
  }
}
</script>

