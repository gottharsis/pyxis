import axios from "axios"
import Vue from "vue/dist/vue.common"

const viewProduct = new Vue({
	el: "#view-product",
	delimiters: ["<%", "%>"],
	data() {
		return {
			qty: 1,
			id: -1
		}
	},
	computed: {
		apiURL() {
			return `/cart-api/add/${this.id}/${this.qty}`
		}
	},
	methods: {
		addToCart() {
			axios
				.get(this.apiURL, {
					withCredentials: true
				})
				.then(
					res => {
						alert("Success!")
					},
					reason => {
						alert("Failed")
						console.log(reason)
					}
				)
		}
	},
	mounted() {
		this.id = this.$refs.id.value
	}
})

export default viewProduct
