const homepagePlans = new Vue({
	el: "#plans",
	delimiters: ["<%", "%>"],
	data: function() {
		return {
			activeIndex: 0,
			plans: [
				{
					name: "180",
					description: "180 description",
					imgUrl: "/img/plans/planTriangle.svg"
					// imgUrl: "/img/cat.jpg"
				},
				{
					name: "360",
					description: "360 description",
					imgUrl: "/img/plans/planSquare.svg"
					// imgUrl: "/img/cat.jpg"
				},
				{
					name: "540",
					description: "540 description",
					imgUrl: "/img/plans/planPentagon.svg"
					// imgUrl: "/img/cat.jpg"
				},
				{
					naem: "720",
					description: "720 description",
					imgUrl: "/img/plans/planHexagon.svg"
					// imgUrl: "/img/cat.jpg"
				}
			]
		}
	},
	methods: {
		prevElement: function() {
			console.log("prevElement")
			if (this.activeIndex !== 0) {
				this.activeIndex--
			}
		},
		nextElement: function() {
			console.log("nextElement")
			if (this.activeIndex !== this.plans.length - 1) {
				this.activeIndex++
			}
		}
	}
})
