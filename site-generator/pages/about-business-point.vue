<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <div class="col-12 block-title mb-5">
          <h1 class="mb-0">{{ $t('company') }}</h1>
          <h2>{{ $t('slogan') }}</h2>
        </div>
        <div class="col-12 d-lg-none d-flex logo">
          <img src="~/assets/images/logo.svg" width="250" alt="Logo">
          <span class="logo-label">ЕНЕРГОЮГ АЛЬЯНС</span>
        </div>
        <div class="col-12 col-lg-6 mt-4 mt-lg-0">
          {{ $t('pages.about.content_1')}}
          <br><br>
          {{ $t('pages.about.content_2')}}

        </div>
        <div class="col-6 d-none d-lg-flex logo">
          <img src="~/assets/images/logo.svg" width="250" alt="Logo">
          <span class="logo-label">{{ $t('company') }}</span>
        </div>
      </div>
    </div>
    
    <FeedbackForm></FeedbackForm>
  </div>
</template>

<script>
import FeedbackForm from '../components/feedback-form';

export default {
  components: {
    FeedbackForm
  }
}
</script>

<style lang="scss">
.logo{
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &-label {
    font-size: 60px;
    color: $c-blue;
    font-weight: 900;
    line-height: 100%;
    text-align: center;
  }
}
</style>