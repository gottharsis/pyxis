const heroVue = new Vue({
	el: "#hero",
	data: {
		offset: 0,
		maxOffset: 10,
		velocity: -0.33
	},
	methods: {
		handleScroll: function() {
			requestAnimationFrame(() => {
				// do not animate if hero not in viewport
				if (window.scrollY > this.animationDistance) {
					return
				}
				this.offset = this.velocity * window.scrollY
			})
		}
	},
	computed: {
		styleObject: function() {
			const bgyPos = 50 + this.offset
			return {
				backgroundPosition: `50% ${bgyPos}%`
			}
		}
	},
	mounted: function() {
		this.animationDistance = this.$el.clientHeight
		window.addEventListener("scroll", this.handleScroll)
	}
})

module.exports = heroVue
