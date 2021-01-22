<template>
  <div class="container-fluid feedback-form">
    <div class="row">
      <div class="col-12 col-md-6 px-0 order-2 order-md-1">
        <iframe
          class="feedback-form-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.07799856202!2d30.4459020128288!3d50.43964780348864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ceb8258c9a7f%3A0x5da419b890e6c424!2z0JXQndCV0KDQk9CeINCu0JMg0JDQm9Cs0K_QndChIC0g0LXQu9C10LrRgtGA0L7QvNC-0L3RgtCw0LYsINC10LvQtdC60YLRgNC-0LvQsNCx0L7RgNCw0YLQvtGA0ZbRjywg0YDQtdC80L7QvdGCINGC0LAg0YLQtdGF0L3RltGH0L3QtSDQvtCx0YHQu9GD0LPQvtCy0YPQstCw0L3QvdGP!5e0!3m2!1sru!2sua!4v1610838621150!5m2!1sru!2sua"
          width="100%"
          height="450"
          frameborder="0"
          style="border: 0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <div
        class="col-12 col-md-6 order-1 order-md-2 py-5 d-flex flex-column justify-content-center"
      >
        <form @submit="handleForm($event)" v-if="!isSubmited">
          <em>Возникли вопросы?</em>
          <h2 class="form-title">
            СВЯЖИТЕСЬ С <span class="text-blue">НАМИ</span>
          </h2>

          <input
            class="form-control"
            type="text"
            name="name"
            required
            max="30"
            placeholder="Ваше имя"
          />
          <br />
          <input
            class="form-control"
            type="tel"
            name="phone"
            placeholder="Ваш телефон"
            required
          />

          <button class="btn btn-warning">ОТПРАВИТЬ</button>
        </form>

        <div class="display-4 text-center" v-else>
            Добро, наберу как буду дома
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
      isSubmited: false
  }),
  methods: {
    handleForm(e) {
      e.preventDefault()
      console.log('Submit Prevented')
      this.isSubmited = true;
    },
  },
}
</script>

<style lang="scss" scoped>
.feedback-form {
  max-width: 1920px;
  margin-top: $s-5;
  color: $c-white;
  background: linear-gradient(0, #6386ca 0, #6386ca 100%);

  .form-title {
    position: relative;

    &:after {
      content: '';
      border: 1px solid #5791be;
      width: 7%;
      height: 0;
      position: absolute;
      bottom: -24px;
      left: 0;
    }
  }
  input {
    padding: $s-1 $s-2;
  }
  input,
  button {
    margin-top: $s-3;
  }
}
</style>