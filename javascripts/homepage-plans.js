import Vue from "vue/dist/vue.common"

const homepagePlans = new Vue({
	el: "#plans",
	delimiters: ["<%", "%>"],
	data: function() {
		return {
			activeIndex: 0,
			plans: [
				{
					name: "180",
					description:
						"Simple, fast, effective - The basic plan for instant results.",
					imgUrl: "/img/plans/planTriangle.svg"
					// imgUrl: "/img/cat.jpg"
				},
				{
					name: "360",
					description:
						"Our most popular plan offering the best results at an affordable price.",
					imgUrl: "/img/plans/planSquare.svg"
					// imgUrl: "/img/cat.jpg"
				},
				{
					name: "720",
					description:
						"The complete package with full 720(degree) coverage.",
					imgUrl: "/img/plans/planHexagon.svg"
					// imgUrl: "/img/cat.jpg"
				},
				{
					name: "Tau",
					description: "A specialized plan for special requests.",
					imgUrl: "/img/cat.jpg"
				}
			]
		}
	},
	methods: {
		prevElement() {
			if (this.activeIndex !== 0) {
				this.activeIndex--
			}
		},
		nextElement() {
			if (this.activeIndex !== this.plans.length - 1) {
				this.activeIndex++
			}
		}
	}
})

module.exports = homepagePlans
