const headerVue = new Vue({
	el: "#header",
	data: {
		opacity: 0
	},
	computed: {
		animationDistance: function() {
			const documentHeight = document.getElementById("hero").clientHeight
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
			window.requestAnimationFrame(() => {
				if (window.scrollY > this.animationDistance) {
					this.opacity = 1
				} else {
					//prettier-ignore
					this.opacity = Math.pow((1.0 * window.scrollY) / this.animationDistance, 4)
				}
			})
		}
	},
	mounted: function() {
		this.heroElement = document.getElementById("hero")
		window.addEventListener("scroll", this.handleScroll)
	},
	beforeDestroy: function() {
		window.removeEventListener("scroll", this.handleScroll)
	}
})
