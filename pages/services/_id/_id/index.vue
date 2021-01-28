<template>
  <div>
    <div class="page-header">
      <div class="page-header__bg"></div>
      <img src="~/assets/images/job-back.png" class="video" alt="" />

      <div class="page-header-inner">
        <div class="flex-grow-1"></div>
        <h1 class="animate__animated animate__fadeIn animate__delay-1s">
          {{ $t(`jobs.${jobId}.name`) }}
        </h1>
        <div
          class="page-header__subtitle mt-5 animate__animated animate__fadeIn animate__delay-3s"
          v-html="$t(`jobs.${jobId}.subtitle`)"
        ></div>
      </div>
    </div>

    <div class="job-form">
      <div class="container">
        <div class="row align-items-end">
          <div class="col-12 col-md-4">
            Чтобы получить предложение: <br />
            Оставьте заявку:
          </div>
          <div class="col-12 col-md-2">
            <label for="name" class="form-label">Ваше имя </label>
            <input name="name" class="form-control" type="text" />
          </div>
          <div class="col-12 col-md-2">
            <label for="email" class="form-label">Ваше email </label>
            <input name="email" class="form-control" type="email" />
          </div>
          <div class="col-12 col-md-2">
            <label for="phone" class="form-label">Ваш телефон </label>
            <input name="phone" class="form-control" type="text" />
          </div>
          <div class="col-12 col-md-2">
            <button class="btn btn-primary">Отправить</button>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-4">Или позвоните нам:</div>
          <div class="col-3">
            <div>(044) 221-91-89</div>
            <div>(097) 308-18-31</div>
          </div>
        </div>
      </div>
    </div>

    <div class="layout">
      <div class="row py-5">
        <div class="col-12 col-md-6">
          <h2 class="block-title mb-5">{{ $t(`jobs.${jobId}.name`) }}</h2>
          <div v-html="$t(`jobs.${jobId}.description`)"></div>
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
          <img src="~/assets/images/jobs/Kabelshchik.jpg" alt="Kabelshik" />
        </div>
      </div>
    </div>

    <WorkSchema></WorkSchema>

    <WhyWe></WhyWe>

    <Reliability></Reliability>

    <div class="layout">
      <div class="row px-0">
        <div class="col-12">
          <h2 class="block-title mb-5">ВАМ БУДЕ ЦІКАВО</h2>
        </div>

        <div class="col-3">
          <a href="#" class="d-flex flex-column text-center">
            <img
              src="~/assets/images/jobs/Kabelshchik.jpg"
              class="recomendation-image"
              alt=""
            />

            <div class="mt-2 fs-6">Електротехнічна лабораторія</div>
          </a>
        </div>

        <div class="col-3">
          <a href="#" class="d-flex flex-column text-center">
            <img
              src="~/assets/images/jobs/Kabelshchik.jpg"
              class="recomendation-image"
              alt=""
            />

            <div class="mt-2 fs-6">Електротехнічна лабораторія</div>
          </a>
        </div>

        <div class="col-3">
          <a href="#" class="d-flex flex-column text-center">
            <img
              src="~/assets/images/jobs/Kabelshchik.jpg"
              class="recomendation-image"
              alt=""
            />

            <div class="mt-2 fs-6">Електротехнічна лабораторія</div>
          </a>
        </div>

        <div class="col-3">
          <a href="#" class="d-flex flex-column text-center">
            <img
              src="~/assets/images/jobs/Kabelshchik.jpg"
              class="recomendation-image"
              alt=""
            />

            <div class="mt-2 fs-6">Електротехнічна лабораторія</div>
          </a>
        </div>
      </div>
    </div>

    <PartnersCarousel></PartnersCarousel>

    <FeedbackForm></FeedbackForm>
  </div>
</template>

<script>
export default {
  data: () => ({
    job: null,
    jobId: null,
  }),
  async fetch() {
    this.jobId = this.$route.params.id
    this.job = await this.$store.state.jobs[this.jobId]
  },
}
</script>
\
<style lang="scss" scoped>
.job-form {
  background: $c-blue-gradient;
  color: $c-white;
  padding: 2rem 0;

  input {
    width: 100%;
  }
}
.recomendation-image {
  // width: 100%;
}
</style>