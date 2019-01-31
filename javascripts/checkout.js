import Vue from "vue/dist/vue.common"

const checkoutVue = new Vue({
	el: ".checkout-page",
	data() {
		return {
			sameBillingAddress: true
		}
	}
})

export default checkoutVue
