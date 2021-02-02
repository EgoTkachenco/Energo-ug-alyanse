<template>
    <div>
        <div class="container">
            <div class="row my-4 justify-content-center justify-content-md-start">
                <div class="col-12">
                    <h2 class="block-title mb-4">{{ $t(`services.${$route.params.id}`) }}</h2>
                </div>
                <div class="col-8 col-md-4 mt-3" v-for="(job, id) in service.jobs" :key="id">
                    <Nuxt-link class="service-link" :to="`${service.url}/${id}`">
                        <img :src="require(`~/assets/images/jobs/${job.images[0]}`)" :alt="job.name" />
                        <h3 class="service-link__title">{{ $t(`jobs.${id}.name`) }}</h3>
                    </Nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    scrollToTop: true,
    head() {
        return {
        title: `${this.$t(`services.${this.$route.params.id}`)} - ${this.$t(`company`)}`,
        meta: [
            {
            hid: 'description',
            name: 'description',
            content: `${this.$t('pages.services.p_description')}`,
            },
        ],
        }
    },
    computed: {
        service() {
            let service = {...this.$store.state.services[this.$route.params.id]};
            let jobs = {}
            service.jobs.forEach(id => {
                jobs[id] = this.$store.state.jobs[id];
            })
            service.jobs = jobs;
            return service;
        }
    }
}
</script>

<style lang="scss">
.service-link {
    text-decoration: none;
    text-align: center;
    color: $c-dark-grey;
    h3, img {
        transition: 0.5s all ease;
    }
    &__title {
        margin-top: 1rem;
    }
    &:hover {
        color: $c-blue;
        background: $c-light-blue;
        img, h3 {
            transform: scale(1.1);
        }
        h3 {
            margin-top: 1.5rem;
        }
        text-decoration: none;
    }

    img {
        height: 250px;
        width: 100%;
        object-fit: cover;
    }
}
</style>