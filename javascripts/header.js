import Vue from "vue/dist/vue.common"

const headerVue = new Vue({
	el: "#header.fade",
	data() {
		return {
			opacity: 0,
			// hacky way to force recompute values on resize
			recomputeCounter: 0
		}
	},
	computed: {
		animationDistance: function() {
			// should be recomputed
			this.recomputeCounter
			const documentHeight = document.getElementsByClassName(
				"fade-target"
			)[0].clientHeight
			return documentHeight - 64
		},
		styleObject: function() {
			const backgroundColor = `rgba(69, 90, 100, ${this.opacity})`
			const boxShadow = `0 4px 2px -2px rgba(0, 0, 0, ${0.4 *
				this.opacity ** 2})`
			return {
				backgroundColor,
				boxShadow
			}
		}
	},
	methods: {
		handleScroll() {
			window.requestAnimationFrame(() => {
				if (window.scrollY > this.animationDistance) {
					this.opacity = 1
				} else {
					//prettier-ignore
					this.opacity = Math.pow((1.0 * window.scrollY) / this.animationDistance, 4)
				}
			})
		},

		handleResize() {
			this.recomputeCounter++
		}
	},
	mounted() {
		this.heroElement = document.getElementById("hero")
		window.addEventListener("scroll", this.handleScroll)
		window.addEventListener("resize", this.handleResize)
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.handleScroll)
		window.removeEventListener("resize", this.handleResize)
	}
})

module.exports = headerVue
