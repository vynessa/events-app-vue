<template>
  <nav class="navbar">
    <div class="navbar-inner inner-container">
      <div class="navbar-header"> 
        <router-link to="/">
          <img id="navbar-logo" src='../assets/flutterwave-logo.png'>
        </router-link>
        <button id="navbar-icon">Open</button>
      </div>
      <div class="navbar-menu">
        <router-link to="/no-tickets" class="navbar-menu__list-item navbar-link">
            I didn't get my tickets
        </router-link>
        <router-link to="/create-event">
          <button class="navbar-menu__list-item navbar-btn">Create your own event</button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
 
}
</script>

