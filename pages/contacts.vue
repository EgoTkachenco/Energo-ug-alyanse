<template>
<div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-12 col-md-10 text-center">
            <h2 class="block-title mb-5">{{ $t('pages.contacts.title') }}</h2>
        </div>
        <div class="col-6 col-md-5">
            <a href="tel:0506582777">+38(050) 658-27-77</a> <br>
            <a href="tel:0506582777">+38(050) 658-27-77</a> <br>
        </div>
        <div class="col-6 col-md-5">
            <a href="mailto:energougalyans@ukr.net">energougalyans@ukr.net</a>
            <address>{{ $t('footer.address') }}</address>
        </div>
        <div class="col-12 col-md-10">
            <iframe
                class="feedback-form-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.07799856202!2d30.4459020128288!3d50.43964780348864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ceb8258c9a7f%3A0x5da419b890e6c424!2z0JXQndCV0KDQk9CeINCu0JMg0JDQm9Cs0K_QndChIC0g0LXQu9C10LrRgtGA0L7QvNC-0L3RgtCw0LYsINC10LvQtdC60YLRgNC-0LvQsNCx0L7RgNCw0YLQvtGA0ZbRjywg0YDQtdC80L7QvdGCINGC0LAg0YLQtdGF0L3RltGH0L3QtSDQvtCx0YHQu9GD0LPQvtCy0YPQstCw0L3QvdGP!5e0!3m2!1sru!2sua!4v1610838621150!5m2!1sru!2sua"
                width="100%"
                height="100%"
                frameborder="0"
                style="border: 0; min-height: 250px;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            ></iframe>
        </div>
    </div>
</div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.$t('pages.contacts.p_title')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('pages.contacts.p_description')}`,
        },
      ],
    }
  },
}
</script>