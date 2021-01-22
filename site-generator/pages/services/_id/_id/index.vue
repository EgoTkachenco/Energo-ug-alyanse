<template>
    <div>
        <div class="page-header">
            <img :src="require('~/assets/images/Kabelshchik.jpg')" alt="">
        </div>
        <div class="container">
            <div class="row" v-if="job">
                <div class="col-12">
                    <h2 class="block-title my-4">{{job.name}}</h2>
                </div>
                <!-- <div class="col-12 col-md-3" v-for="(job, id) in service.jobs">
                    <Nuxt-link :to="`${service.url}/${id}`">
                        <img :src="require(`~/assets/images/${job.images[0]}`)" :alt="job.name" />
                        <h3>{{job.name}}</h3>
                    </Nuxt-link>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        job() {
            console.log(this.$store.state.jobs, this.$route.params.id)
            return this.$store.state.jobs[this.$route.params.id];
        }
    }
}
</script>