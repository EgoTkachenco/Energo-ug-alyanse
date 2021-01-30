<template>
  <div class="wrapper">
    <Navigation></Navigation>
    <div class="content">
      <Nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from '../components/navigation';
import Footer from '../components/footer';
export default {
  components: {
    Navigation, Footer
  },
}
</script>

<style lang="scss">
.content {
  flex: 1 1;
}
</style>
