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
        height="500px"
      >
        Sorry, your browser doesn't support embedded videos, but don't worry,
        you can <a href="~/assets/videos/PowerLines.mp4">download it</a>
        and watch it with your favorite video player!
        <source src="~/assets/videos/temp.mp4" type="video/mp4" />
        <!-- <source src="bg/daisy-stock-webm-video.webm" type="video/webm"> -->
      </video>
      <div class="page-header-inner">
        <div class="flex-grow-1"></div>
        <h1 class="animate__animated animate__fadeIn animate__delay-1s">
          {{ $t(`jobs.${jobId}.name`) }}
        </h1>
        <div
          class="page-header__subtitle mt-5 animate__animated animate__fadeIn animate__delay-3s"
          v-html="$t(`jobs.${jobId}.subtitle`)">
        </div>
      </div>
    </div>

   

    <div class="container-fluid job-form">
      <div class="row align-items-end">
        <div class="col-12 col-md-4">
          Чтобы получить предложение: <br />
          Оставьте заявку:
        </div>
        <div class="col-12 col-md-2">
          <label for="name">Ваше имя </label>
          <input name="name" type="text" />
        </div>
        <div class="col-12 col-md-2">
          <label for="name">Ваше имя </label>
          <input name="name" type="text" />
        </div>
        <div class="col-12 col-md-2">
          <label for="name">Ваш телефон </label>
          <input name="name" type="text" />
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

    <div class="layout">
      <div class="row">
        <div class="col-12 col-md-6">
          <h2 class="block-title">{{ $t(`jobs.${jobId}.name`) }}</h2>
          <div v-html="$t(`jobs.${jobId}.description`)"></div>
        </div>
        <div class="col-12 col-md-6">
            <img src="~/assets/images/Kabelshchik.jpg" alt="Kabelshik">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    jobId() {
      return this.$route.params.id
    },
    job() {
      return this.$store.state.jobs[this.jobId]
    },
  },
}
</script>
\
<style lang="scss" scoped>
.job-form {
  background-color: $c-blue;
  color: $c-white;
}
</style>