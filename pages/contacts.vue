<template>
	<div class="container py-5">
		<div
			class="row justify-content-center"
			style="font-size: 1.25rem;"
		>
			<div class="col-12 col-md-10 text-center">
				<h2 class="block-title mb-5">{{ $t('pages.contacts.title') }}</h2>
			</div>
			<div class="col-8 col-md-5 text-center text-md-start">
				<a
					class="binct-phone-number-1"
					:href="`tel:${$store.state.contacts.number_1_call}`"
				>{{ $store.state.contacts.number_1 }}</a> <br>
				<a
					class="binct-phone-number-2"
					:href="`tel:${$store.state.contacts.number_2_call}`"
				>{{ $store.state.contacts.number_2 }}</a> <br>
			</div>
			<div class="col-8 col-md-5 text-center text-md-end">
				<a :href="`mailto:${$store.state.contacts.email}`">{{$store.state.contacts.email}}</a>
				<address>{{ $t('footer.address') }}</address>
			</div>
			<div class="col-12 col-md-10">
				<iframe
					class="feedback-form-map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.07799856202!2d30.4459020128288!3d50.43964780348864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ceb8258c9a7f%3A0x5da419b890e6c424!2z0JXQndCV0KDQk9CeINCu0JMg0JDQm9Cs0K_QndChIC0g0LXQu9C10LrRgtGA0L7QvNC-0L3RgtCw0LYsINC10LvQtdC60YLRgNC-0LvQsNCx0L7RgNCw0YLQvtGA0ZbRjywg0YDQtdC80L7QvdGCINGC0LAg0YLQtdGF0L3RltGH0L3QtSDQvtCx0YHQu9GD0LPQvtCy0YPQstCw0L3QvdGP!5e0!3m2!1sru!2sua!4v1610838621150!5m2!1sru!2sua"
					width="100%"
					height="100%"
					frameborder="0"
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
	scrollToTop: true,
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
	mounted() {
		console.log('Script Worked')
		// Init binotel call tracking
		let binotel_initialization_interval = setInterval(() => {
			if (!window.BinotelCallTracking) return
			window.BinotelCallTracking[507889].replacePhoneNumbersOnDynamicContent()
			clearInterval(binotel_initialization_interval)
		}, 1000)
	},
}
</script>

<style lang="scss" scoped>
.feedback-form-map {
	min-height: 500px;
	@media (max-width: $md) {
		min-height: 250px;
	}
}
</style>