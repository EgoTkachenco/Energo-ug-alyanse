<template>
  <div>
   <div class="page-header">
      <div class="page-header__bg"></div>
      <video 
         class="video"
         preload="auto" 
         autoplay="autoplay" 
         loop="loop" 
         muted="muted" 
         width="100%" 
         height="500px">
            Sorry, your browser doesn't support embedded videos,
            but don't worry, you can <a href="~/assets/videos/PowerLines.mp4">download it</a>
            and watch it with your favorite video player!
            <source src="~/assets/videos/temp.mp4" type="video/mp4">
            <!-- <source src="bg/daisy-stock-webm-video.webm" type="video/webm"> -->
      </video>
      <div class="page-header-inner">
         <div class="flex-grow-1"></div>   
         <h1 class="animate__animated animate__fadeIn animate__delay-1s">{{ $t('company')}}</h1>
         <div class="page-header__subtitle mt-5 animate__animated animate__fadeIn animate__delay-3s">{{ $t('slogan')}}</div>
         <div class="page-header-btns animate__animated animate__fadeIn animate__delay-3s">
            <a href="#" class="btn btn-outline-light btn-lg">{{ $t('navigation.contacts')}}</a>
            <a href="#" class="btn btn-outline-light btn-lg ml-5">{{ $t('navigation.about')}}</a>
         </div>
      </div>
   </div>

   <Services></Services>

   <div class="page-content layout py-4">
      <section class="row d-flex align-items-center">
         <div class="col-12 col-md-7 text-center text-md-left order-2 order-md-1">
            <em>{{ $t('aboutBlock.title') }}</em>
            <h2 class="block-title left mt-3">{{ $t('company') }}</span></h2>
            <div class="mt-5" style="line-height: 1.5rem">
               {{ $t('aboutBlock.content_1') }}
               <br><br>
               {{ $t('aboutBlock.content_2') }}
            </div>
            <a href="#" class="btn btn-secondary mt-5 mx-auto mx-md-0">Подробнее</a>
         </div>
         <div class="col-12 col-md-5 order-1 order-md-2">
            <div class="about-image">
               <img src="~/assets/images/about.jpg" :alt="$t('aboutBlock.title')">
            </div>
         </div>
      </section>
   </div>

   <Advantages></Advantages>

   <div class="page-content layout py-4">
      <h2 class="block-title mb-4" style="text-align:center;">
         НАШИ <span class="text-blue">КЛИЕНТЫ</span>
      </h2>

      <PartnersCarousel></PartnersCarousel>
      <LicensesCarousel></LicensesCarousel>
   </div>
   <FeedbackForm></FeedbackForm>
  </div>
</template>

<script>
import Services from '../components/services';
import Advantages from '../components/advantages-block';
import LicensesCarousel from '../components/licenses-carousel';
import PartnersCarousel from '../components/partners-carousel';
import FeedbackForm from '../components/feedback-form';

export default {
  components: {
    LicensesCarousel,
    PartnersCarousel,
    Services,
    FeedbackForm,
    Advantages
  },
  mounted() {
     console.log(this.$store.state);
  }
}
</script>

<style lang="scss">
.about-image {
   transform: translate(25px, 25px);
   background: $c-blue;
   width: max-content;
   margin: auto;
   img {
      max-height: 600px;
      transform: translate(-25px, -25px);

   }
   @media(max-width: $md) { 
      img {
         max-height: 300px;
      }
      margin-bottom: $s-4;
   }
}
</style>
