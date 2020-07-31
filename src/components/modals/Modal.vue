<template>
  <div class="modal" :class="{hide: !showRegisterModal}">
    <div class="modal-content">
      <span class="close">
        <font-awesome-icon 
          :icon="['fas', 'times']" 
          size="xs"
          @click="toggleModal"
          />
      </span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showRegisterModal", "toggleModal"]
}
</script>

