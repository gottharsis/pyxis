Vue.directive("scroll", {
	inserted: function(el, binding) {
		let f = function(evt) {
			if (binding.value(evt, el)) {
				wrapperElement.removeEventListener("scroll", f)
			}
		}
		wrapperElement.addEventListener("scroll", f)
	}
})

const wrapperElement = document.getElementById("wrapper")
const heroElement = document.getElementsByClassName("hero")[0]

const headerVue = new Vue({
	el: "#header",
	data: {
		opacity: 0
	},
	computed: {
		animationDistance: function() {
			const documentHeight = heroElement.clientHeight
			return documentHeight - 64
		},
		styleObject: function() {
			const backgroundColor = `rgba(69, 90, 100, ${this.opacity})`
			return {
				backgroundColor
			}
		}
	},
	methods: {
		handleScroll: function() {
			if (wrapperElement.scrollTop > this.animationDistance) {
				this.opacity = 1
			} else {
				//prettier-ignore
				this.opacity = Math.pow((1.0 * wrapperElement.scrollTop) / this.animationDistance, 4)
			}
		}
	}
})
