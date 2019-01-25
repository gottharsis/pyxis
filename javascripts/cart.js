import Vue from "vue/dist/vue.common"
import axios from "axios"
import parseInt from "lodash/parseInt"
import { showNotification } from "./notification"

const cartVue = new Vue({
	el: "#cart-container",
	delimiters: ["<%", "%>"],
	data() {
		return {
			items: [],
			total: 0,
			dataLoaded: false
		}
	},
	methods: {
		removeFromCart(index) {
			const removeId = this.items[index].product.id
			axios.get(`/cart-api/remove/${removeId}`).then(res => {
				this.processResponse(res)
			})
		},
		updateCart() {
			const updates = this.items
				.filter(item => item.qty !== item.newQty)
				.map(item => ({
					id: item.product.id,
					qty: item.newQty
				}))
			axios
				.post(
					"/cart-api/update",
					{ updates },
					{ withCredentials: true }
				)
				.then(res => {
					this.processResponse(res)
					showNotification("Updated Cart")
				})
		},
		processResponse(res) {
			this.total = res.data.total
			this.items = res.data.items.map(item => {
				const newQty = item.qty
				return {
					...item,
					newQty
				}
			})
		},
		currencyFormat(num) {
			return (
				"$" +
				parseInt(num)
					.toFixed(2)
					.replace(/\d(?=(\d{3})+\.)/g, "$&,")
			)
		}
	},
	mounted() {
		console.log("cartProduct mounted")
		axios.get("/cart-api", { withCredentials: true }).then(res => {
			this.processResponse(res)
			this.dataLoaded = true
		})
	}
})

export default cartVue
