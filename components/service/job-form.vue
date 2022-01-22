<template>
	<div
		class="job-form"
		id="jobform"
	>
		<div class="container">
			<form
				class="row align-items-center justify-content-center"
				v-if="!isSubmited"
				@submit.prevent.stop="handleForm"
			>
				<div class="col-12 col-md-4 text-center text-md-start">
					<b>{{ $t('formBlock.title') }}</b>
				</div>
				<div class="col-8 col-md-2">
					<label
						for="name"
						class="form-label"
					>{{
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
					<label
						for="email"
						class="form-label"
					>{{
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
					<label
						for="phone"
						class="form-label"
					>{{
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
					<button
						type="submit"
						class="btn btn-light mt-2 mt-md-0"
					>
						{{ $t('formBlock.submit') }}
					</button>
				</div>
			</form>

			<div
				class="row"
				v-else
			>
				<div class="col-12 fs-4 text-center">{{ $t('formBlock.finish') }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import { init, send } from 'emailjs-com'
init('user_RXzx7vL8DTPW5Li2pzQGI')
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
		handleForm() {
			let page = ''
			if (
				[
					'about-business-point___uk',
					'about-business-point___ru',
					'index__uk',
					'index__ru',
				].includes(this.$route.name)
			) {
				page = this.$route.path
			} else if (
				['services-id-id___uk', 'services-id-id___ru'].includes(
					this.$route.name
				)
			) {
				page = this.$t(`jobs.${this.$route.params.id}.name`)
			}
			let form = {
				name: this.form.name,
				phone: this.form.phone,
				page: page,
				email: this.form.email,
				time: new Date(),
			}
			// this.$fire.firestore
			// .collection('feedbacks')
			// .add(form)
			this.$store
				.dispatch('sendForm', form)
				.then(() => {
					this.isSubmited = true
					const message = `Новая заявка | Страница - ${form.page} | Имя - ${form.name} | Номер - ${form.phone} | Email - ${form.email}`
					this.sendEmail(message)
				})
				.catch((error) => {
					console.error('Error adding document: ', error)
				})
		},
		sendEmail(message) {
			// Fedya chat id - 119126345
			// My chat id - 367270118
			fetch(
				`https://api.telegram.org/bot1688525054:AAHNVTpr3_2n-_cubtAVy0EH7EgEuiDp8oA/sendMessage?chat_id=119126345&text=${message}`,
				{
					method: 'POST',
				}
			)
		},
	},
}
</script>  