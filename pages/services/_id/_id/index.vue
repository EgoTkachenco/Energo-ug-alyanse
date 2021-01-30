<template>
  <div>
    <div class="page-header">
      <div class="page-header__bg"></div>
      <img :src="require(`~/assets/images/jobs/${job.images[1]}`)" class="video" alt="" />

      <div class="page-header-inner">
        <h1 class="animate__animated animate__fadeIn">
          {{ $t(`jobs.${jobId}.name`) }}
        </h1>
        <div class="page-header__subtitle mt-5 animate__animated animate__fadeIn animate__delay-2s" 
          v-html="$t(`jobs.${jobId}.subtitle`)">
        </div>
      </div>
    </div>

    <JobForm></JobForm>

    <div class="layout">
      <div class="row py-5">
        <div class="col-12 col-md-6">
          <h2 class="block-title mb-5">{{ $t(`jobs.${jobId}.name`) }}</h2>
          <div v-html="$t(`jobs.${jobId}.description`)"></div>
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
          <img v-for="img in images"
              :key="img" 
              class="job-illustrations"
              :src="require(`~/assets/images/jobs/${img}`)" 
              :alt="$t(`jobs.${jobId}.name`)" />
        </div>
      </div>
    </div>

    <WorkSchema></WorkSchema>

    <WhyWe :img="job.images[job.images.length - 1]"></WhyWe>

    <Reliability></Reliability>

    <div class="layout py-5">
      <div class="row px-0">
        <div class="col-12">
          <h2 class="block-title mb-5">{{ $t('recomendations.title') }}</h2>
        </div>

        <div class="col-6 col-md-3 mb-3" v-for="(r, i) in job.recomendations" :key="i">
          <nuxt-link :to="localePath(r.url)" class="d-flex flex-column text-center">
            <img
              :data-src="require(`~/assets/images/jobs/${r.image}`)"
              v-lazy-load
              class="recomendation-image"
              :alt="$t(r.title)"
            />

            <div class="mt-2 fs-6">{{ $t(r.title) }}</div>
          </nuxt-link>
        </div>

      </div>
    </div>

    <PartnersCarousel></PartnersCarousel>

    <FeedbackForm></FeedbackForm>
  </div>
</template>

<script>
import JobForm from '~/components/service/job-form';
import WorkSchema from '~/components/service/work-schema';
import WhyWe from '~/components/service/why-we';
import Reliability from '~/components/service/reliability';
import PartnersCarousel from '~/components/partners-carousel';
import FeedbackForm from '~/components/feedback-form';

export default {
  components: {
    WorkSchema,
    WhyWe,
    Reliability,
    PartnersCarousel,
    FeedbackForm,
    JobForm
  },
  computed: {
    images() {
      let r = this.job ? this.job.images.slice(2) : [];
      r = [...r];
      r.pop();
      return r;
    },
    jobId() {
      return this.$route.params.id;
    },
    job() {
      return this.$store.state.jobs[this.jobId];
    }
  },
}
</script>

<style lang="scss" scoped>
.job-form {
  background: $c-blue-gradient;
  color: $c-white;
  padding: 2rem 0;

  input {
    width: 100%;
  }
}
.job-illustrations {
  object-fit: cover;
  margin: 0 auto 1rem;
  max-height: 250px;
}
.recomendation-image {
  height: 180px;
  width: 100%;
  max-width: 300px;
  object-fit: cover;
}
</style>