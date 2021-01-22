<template>
  <div class="partners-carousel">
    <VueSlickCarousel v-bind="settings">
      <div>
        <img width="300" src="~/assets/images/partners/partner_1.jpg" alt="ВДНX" />
      </div>
      <div>
        <img width="300" src="~/assets/images/partners/partner_2.jpg" alt="Жуляны" />
      </div>
      <div>
        <img width="300" src="~/assets/images/partners/partner_3.jpg" alt="DATA Group" />
      </div>

      <div>
        <img width="300" src="~/assets/images/partners/partner_4.jpg" alt="BioFarma" />
      </div>
      <div>
        <img width="300" src="~/assets/images/partners/partner_5.jpg" alt="ABInBev" />
      </div>
      <div>
        <img width="300" src="~/assets/images/partners/partner_6.jpg" alt="Акко" />
      </div>
      <div>
        <img width="300" src="~/assets/images/partners/partner_7.jpg" alt="CompassFM" />
      </div>
      <div>
        <img width="300"
          src="~/assets/images/partners/partner_8.jpg"
          alt="Dyckerhoff Ukraine"
        />
      </div>
      <div>
        <img width="300" src="~/assets/images/partners/partner_9.jpg" alt="Зоопарк Киев" />
      </div>
      <div>
        <img width="300" src="~/assets/images/partners/partner_10.jpg" alt="OTIS" />
      </div>
      <div>
        <img width="300" src="~/assets/images/partners/partner_11.jpg" alt="Киянка" />
      </div>
      <div>
        <img width="300" src="~/assets/images/partners/partner_12.jpg" alt="НАУ" />
      </div>
      <div>
        <img width="300" src="~/assets/images/partners/partner_13.jpg" alt="Мармелад" />
      </div>
      <div>
        <img width="300"
          src="~/assets/images/partners/partner_14.jpg"
          alt="Ukrspecexports"
        />
      </div>
      <div>
        <img width="300" src="~/assets/images/partners/partner_15.jpg" alt="Eurasia" />
      </div>
      <div>
        <img width="300" src="~/assets/images/partners/partner_16.jpg" alt="PRIME" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  data: () => ({
    settings: {
      arrows: false,
      dots: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1924,
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
  }),
  components: {
    VueSlickCarousel,
  },
}
</script>

<style lang="scss" scoped>
.partners-carousel {
  div > img {
    margin: auto;
  }
}
</style>