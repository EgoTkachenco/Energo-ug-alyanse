<template>
  <div class="layout py-5 licenses-carousel">
    <VueSlickCarousel v-bind="settings">
      <div
        class="item"
        v-for="item in 6"
        :key="item"
        @click="activeImage = item"
      >
        <img
          v-lazy-load
          :data-src="require(`~/assets/images/license/license_${item}_full.png`)"
          class="item_preview"
          :alt="'license' + item"
        />
      </div>
    </VueSlickCarousel>

    <div class="license_full" v-if="activeImage" @click="activeImage = null">
      <img :src="require(`~/assets/images/license/license_${activeImage}_full.png`)" @click.stop alt="license 1" />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  data: () => ({
    activeImage: null,
    settings: {
      arrows: false,
      dots: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
    isFullScreen: false,
  }),
  components: {
    // Carousel,
    // Slide
    VueSlickCarousel,
  },
}
</script>

<style lang="scss" scoped>
.licenses-carousel {
  margin-top: $s-4;
  padding-top: $s-4;

  .item {
    &_preview {
      width: 200px !important;
      margin: auto;
      cursor: pointer;
    }
  }
}
.license_full {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.5s;

  img {
    position: relative;
    height: 80%;
    margin: auto;
  }
}
</style>