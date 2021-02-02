<template>
<div class="container py-5">
    <div class="row">
        <div class="col-12 col-md-10" v-html="$t('pages.privacy-policy.content')">
        </div>
    </div>
</div>
</template>

<script>
export default {
  scrollToTop: true,
  head() {
    return {
      title: `${this.$t('pages.privacy-policy.p_title')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('pages.privacy-policy.p_description')}`,
        },
      ],
    }
  },
}
</script>
