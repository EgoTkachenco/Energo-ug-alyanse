<template>
    <div>
        <div class="container">
            <div class="row my-4 justify-content-center justify-content-md-start">
                <div class="col-12">
                    <h2 class="block-title mb-4">{{ $t(`services.${$route.params.id}`) }}</h2>
                </div>
                <div class="col-8 col-md-4 mt-3" v-for="(job, id) in service.jobs" :key="id">
                    <Nuxt-link class="service-link" :to="`${service.url}/${id}`">
                        <img :data-src="require(`~/assets/images/jobs/${job.images[0]}`)" v-lazy-load :alt="job.name" />
                        <div>{{ $t(`jobs.${id}.name`) }}</div>
                    </Nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
    transition: all 0.5s;
    &:hover {
        text-decoration: none;
        color: $c-blue;
    }

    img {
        height: 250px;
        width: 100%;
        object-fit: cover;
    }
}
</style>