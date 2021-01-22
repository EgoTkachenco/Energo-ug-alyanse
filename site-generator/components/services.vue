<template>
  <div class="container-fluid">
    <section class="row services py-5">
    <div class="col-12 mb-4">
      <div><h2 class="text-center">НАШИ УСЛУГИ</h2></div>
    </div>
    <div class="col-12 col-md-6 col-lg-4" v-for="(service, id) in services" :key="id">
      <Nuxt-link class="services-item" :to="service.url">
        <img
          width="150"
          :src="require(`~/assets/icons/${service.icon}-icon.svg`)"
          :alt="service.name"
        />
        <h3 class="mt-2 px-5" v-html="service.name"></h3>
      </Nuxt-link>
    </div>
  </section>
  </div>
</template>

<script scoped>
export default {
  computed: {
    services() {
      return this.$store.state.services;
    }
  }
}
</script>

<style lang="scss">
.services {
  background: $c-blue;
  color: $c-white;
}
.two {
  padding: 20px;
  text-align: center;
} 

.services-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  transition: 0.5s all;
  height: 228px;
  border-radius: 10px;
  color: $c-white;

  h3, img {
    transition: 0.5s all;
  }
  img {
   max-width: 100px;
  }

  &:hover {
    color: $c-white;
    background: $c-light-blue;
    box-shadow: 0 0 0 3px $c-dark-grey;
    img, h3 {
      transform: scale(1.1);
    }
    text-decoration: none;
  }
}
</style>