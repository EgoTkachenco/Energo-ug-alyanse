<template>
  <div class="job-form" id="jobform">
    <div class="container">
      <form
        class="row align-items-center justify-content-center"
        v-if="!isSubmited"
        @submit="handleForm($event)"
      >
        <div class="col-12 col-md-4 text-center text-md-start">
          {{ $t('formBlock.title') }}
        </div>
        <div class="col-8 col-md-2">
          <label for="name" class="form-label">{{
            $t('formBlock.name')
          }}</label>
          <input
            name="name"
            class="form-control"
            type="text"
            v-model="form.name"
            required
          />
        </div>
        <div class="col-8 col-md-2">
          <label for="email" class="form-label">{{
            $t('formBlock.email')
          }}</label>
          <input
            name="email"
            class="form-control"
            type="email"
            v-model="form.email"
            required
          />
        </div>
        <div class="col-8 col-md-2">
          <label for="phone" class="form-label">{{
            $t('formBlock.phone')
          }}</label>
          <input
            name="phone"
            class="form-control"
            type="text"
            v-model="form.phone"
            required
          />
        </div>
        <div class="col-8 col-md-2 d-flex justify-content-center align-self-end">
          <button type="submit" class="btn btn-light mt-2 mt-md-0">
            {{ $t('formBlock.submit') }}
          </button>
        </div>
      </form>

      <div class="row" v-else>
        <div class="col-12 fs-4 text-center">{{ $t('formBlock.finish') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: '',
      phone: '',
      email: '',
    },
    isSubmited: false,
  }),
  methods: {
    handleForm(e) {
      e.preventDefault()
      let form = {
        name: this.form.name,
        phone: this.form.phone,
        page: this.$route.name,
        email: this.form.email,
        time: new Date(),
      }
      // console.log(this.$fire)
      this.$fire.firestore
        .collection('feedbacks')
        .add(form)
        .then(() => {
          this.isSubmited = true
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
    },
  },
}
</script>  