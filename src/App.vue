<template>
  <div class="wrapper">
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    FooterComponent
  }
}
</script>

<style>

</style>
