<template>
  <div class="wrapper">
    <hero-view />
    <footer-component />
  </div>
</template>

<script>
import HeroView from '@/views/HeroView.vue'
import NavBarComponent from '@/components/NavBarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    HeroView,
    NavBarComponent,
    FooterComponent
  }
}
</script>

<style>

</style>
