<template>
  <div class="why-we">
    <div class="row justify-content-center mx-0">
      <div class="col-12 col-md-5 px-0">
        <img
          :src="require(`~/assets/images/jobs/${img}`)"
          height="100%"
          alt="Advantages"
          class="illustration"
        />
      </div>
      <div class="col-12 col-sm-10 col-md-7 py-4 text-white d-flex flex-column">
        <h2 class="block-title">{{ $t('whywe.title') }}</h2>
        <div class="items-wrapper">
          <div class="d-flex align-items-center mt-3 mx-2 mx-md-5">
            <img
              src="~/assets/icons/work-schema/electricity.svg"
              height="50"
              alt=""
            />
            <span class="ms-3">{{ $t('whywe.text_1') }}</span>
          </div>
          <div class="d-flex align-items-center mt-3 mx-2 mx-md-5">
            <img
              src="~/assets/icons/work-schema/ammeter.svg"
              class="ms-2"
              height="50"
              alt=""
            />
            <span class="ms-3">{{ $t('whywe.text_2') }}</span>
          </div>
          <div class="d-flex align-items-center mt-3 mx-2 mx-md-5">
            <img
              src="~/assets/icons/work-schema/worker.svg"
              class="ms-2"
              height="50"
              alt=""
            />
            <span class="ms-3">{{ $t('whywe.text_3') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img']
}
</script>

<style lang="scss" scoped>
.why-we {
  background: $c-blue-gradient;

  .illustration {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
  }

  .items-wrapper {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: $md) {
    h2 { 
      font-size: 1.5rem;
    }
  }
}
</style>