<template>
  <div>
    <div class="page-header-job">
      <div class="page-header-job__bg"></div>
      <img :src="require(`~/assets/images/jobs/${job.images[1]}`)" class="video" alt="" />

      <div class="page-header-job-inner">
        <h1 class="animate__animated animate__fadeIn">
          {{ $t(`jobs.${jobId}.name`) }}
        </h1>
        <div class="page-header-job__subtitle mt-5 animate__animated animate__fadeIn animate__delay-1s" 
          v-html="$t(`jobs.${jobId}.subtitle`)">
        </div>
        <button @click="toForm" class="page-header-job__btn animate__animated animate__fadeIn animate__delay-1s">{{ $t('actionTitle') }}</button>
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
              :style="{maxHeight: images.lenght > 1 ? '250px' : '600px'}"
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
          <nuxt-link :to="localePath(r.url)" class="d-flex flex-column text-center recomendation-link">
            <img
              :src="require(`~/assets/images/jobs/${r.image}`)"
              :alt="$t(r.title)"
            />

            <h5>{{ $t(r.title) }}</h5>
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
  head() {
    return {
      title: `${this.$t(`jobs.${this.jobId}.name`)} - ${this.$t(`company`)}`,
      meta: [
        {
        hid: 'description',
        name: 'description',
        content: `${this.$t('pages.jobs.p_description')}`,
        },
      ],
    }
  },
  components: {
    WorkSchema,
    WhyWe,
    Reliability,
    PartnersCarousel,
    FeedbackForm,
    JobForm
  },
  methods: {
    toForm() {
      window.scrollBy(0, window.screen.availHeight - 145 - window.scrollY);
    }
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
.page-header-job {
  position: relative;
  height: 100vh;
  min-height: 650px;
  max-height: 1650px;
  padding: 180px 10% 150px;
  display: flex;
  flex-direction: column;
  color: $c-white;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 800px) {
    padding: 120px 2% 150px;
  }

  &-inner {
    display: flex;
    flex-direction: column;
    z-index: 20;
    flex: 1 1;
    font-size: 1vw;

    @media (max-width: 800px) {
      font-size: 10px;
    }

    h1 {
      font-size: 4em;
    }
  }
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(2, 2, 2, 0.53);
    z-index: 15;
  }
  .video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 10;
  }
  &__subtitle {
    font-size: 1.5em;
    margin: 2rem auto 0;
    max-width: 70%;
    line-height: 150%;

    @media (max-width: 800px) {
      max-width: 100%;
    }
  }
  &__btn {
    padding: 1rem 2rem;
    border: 0;
    border-radius: 5px;
    background: rgb(99,134,202);
    background: linear-gradient(90deg, rgba(99,134,202,1) 0%, rgba(140,197,241,1) 0%, rgba(99,134,202,1) 100%);
    color: $c-white;
    display: inline-block;
    margin: 2rem auto;
    font-size: 1.25em;

    background: linear-gradient(-45deg, rgba(99,134,202,1),  rgba(140,197,241,1),  rgba(99,134,202,1), #23649a);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
        transform: scale(1, 1);
      }
      50% {
        background-position: 100% 50%;
        transform: scale(1.1, 1.1);
      }
      100% {
        background-position: 0% 50%;
        transform: scale(1, 1);
      }
    }
    // @keyframes actionBtn {
    //   0% {
    //     background: linear-gradient(90deg, rgba(99,134,202,1) 0%, rgba(140,197,241,1) 0%, rgba(99,134,202,1) 100%);
    //   }
    //   50%{
    //     background: linear-gradient(90deg, rgba(99,134,202,1) 0%, rgba(140,197,241,1) 50%, rgba(99,134,202,1) 100%);
    //   }
    //   100% {
    //     background: linear-gradient(90deg, rgba(99,134,202,1) 0%, rgba(140,197,241,1) 100%, rgba(99,134,202,1) 100%);
    //   }
    // }

    @media (max-width: 800px) {
      max-width: 100%;
    }
  }
}
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
  min-height: 250px;
}
.recomendation-link {
  img {
    height: 180px;
    width: 100%;
    max-width: 300px;
    object-fit: cover;
  }
  h5, img {
    transition: 0.5s all ease;
  }
  h5 {
    margin-top: 1rem;
  }
  &:hover {
    color: $c-blue;
    img, h5 {
      transform: scale(1.1);
    }
    h5 {
      margin-top: 1.5rem;
    }
    text-decoration: none;
  }
}
</style>