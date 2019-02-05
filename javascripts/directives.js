import Vue from "vue/dist/vue.common"
import scrollMonitor from "scrollmonitor"

EventTarget.prototype.addEventListenerRunOnce = function(name, callback) {
	const eventWrapper = event => {
		this.removeEventListener(name, eventWrapper)
		callback(event)
	}

	this.addEventListener(name, eventWrapper)
}

Vue.directive("enter-animation", {
	inserted(el, binding) {
		const monitor = scrollMonitor.create(el)

		const classToAdd = binding.value.split(" ")
		monitor.enterViewport(() => {
			el.classList.add(...classToAdd)
			el.addEventListenerRunOnce("animationend", () => {
				el.classList.remove(...classToAdd)
				monitor.destroy()
			})
		})
	}
})
