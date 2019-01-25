import axios from "axios"
import Vue from "vue/dist/vue.common"
import { showNotification } from "./notification"

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
						showNotification("Added to cart!", true)
					},
					reason => {
						showNotification("Could not add to cart", false)
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
