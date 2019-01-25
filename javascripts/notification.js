import Vue from "vue/dist/vue.common"

const notificationVue = new Vue({
	el: "#notification",
	delimiters: ["<%", "%>"],
	data() {
		return {
			show: false,
			message: "Test Message",
			success: true
		}
	},
	methods: {
		showNotification(message, success = true) {
			this.message = message
			this.show = true
			this.success = success
			setTimeout(() => this.hideNotification(), 5000) // hide notification after 5 seconds
		},
		hideNotification() {
			this.show = false
			this.success = true
			this.message = "Test message"
		}
	}
})

export const showNotification = (message, success = true) => {
	notificationVue.showNotification(message, success)
}

export default notificationVue
