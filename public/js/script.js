"use strict";

var headerVue = new Vue({
  el: "#header",
  data: function data() {
    return {
      opacity: 0,
      // hacky way to force recompute values on resize
      recomputeCounter: 0
    };
  },
  computed: {
    animationDistance: function animationDistance() {
      // should be recomputed
      this.recomputeCounter;
      var documentHeight = document.getElementById("hero").clientHeight;
      return documentHeight - 64;
    },
    styleObject: function styleObject() {
      var backgroundColor = "rgba(69, 90, 100, ".concat(this.opacity, ")");
      return {
        backgroundColor: backgroundColor
      };
    }
  },
  methods: {
    handleScroll: function handleScroll() {
      var _this = this;

      window.requestAnimationFrame(function () {
        if (window.scrollY > _this.animationDistance) {
          _this.opacity = 1;
        } else {
          //prettier-ignore
          _this.opacity = Math.pow(1.0 * window.scrollY / _this.animationDistance, 4);
        }
      });
    },
    handleResize: function handleResize() {
      this.recomputeCounter++;
    }
  },
  mounted: function mounted() {
    this.heroElement = document.getElementById("hero");
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  }
});
"use strict";

var heroVue = new Vue({
  el: "#hero",
  data: {
    offset: 0,
    maxOffset: 10,
    velocity: -0.33
  },
  methods: {
    handleScroll: function handleScroll() {
      var _this = this;

      requestAnimationFrame(function () {
        // do not animate if hero not in viewport
        if (window.scrollY > _this.animationDistance) {
          return;
        }

        _this.offset = _this.velocity * window.scrollY;
      });
    }
  },
  computed: {
    styleObject: function styleObject() {
      var bgyPos = 50 + this.offset;
      return {
        backgroundPosition: "50% ".concat(bgyPos, "%")
      };
    }
  },
  mounted: function mounted() {
    this.animationDistance = this.$el.clientHeight;
    window.addEventListener("scroll", this.handleScroll);
  }
});
"use strict";

var homepagePlans = new Vue({
  el: "#plans",
  delimiters: ["<%", "%>"],
  data: function data() {
    return {
      activeIndex: 0,
      plans: [{
        name: "180",
        description: "180 description",
        imgUrl: "/img/plans/planTriangle.svg" // imgUrl: "/img/cat.jpg"

      }, {
        name: "360",
        description: "360 description",
        imgUrl: "/img/plans/planSquare.svg" // imgUrl: "/img/cat.jpg"

      }, {
        name: "540",
        description: "540 description",
        imgUrl: "/img/plans/planPentagon.svg" // imgUrl: "/img/cat.jpg"

      }, {
        naem: "720",
        description: "720 description",
        imgUrl: "/img/plans/planHexagon.svg" // imgUrl: "/img/cat.jpg"

      }]
    };
  },
  methods: {
    prevElement: function prevElement() {
      if (this.activeIndex !== 0) {
        this.activeIndex--;
      }
    },
    nextElement: function nextElement() {
      if (this.activeIndex !== this.plans.length - 1) {
        this.activeIndex++;
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qcyIsImhlcm8uanMiLCJob21lcGFnZS1wbGFucy5qcyJdLCJuYW1lcyI6WyJoZWFkZXJWdWUiLCJWdWUiLCJlbCIsImRhdGEiLCJvcGFjaXR5IiwicmVjb21wdXRlQ291bnRlciIsImNvbXB1dGVkIiwiYW5pbWF0aW9uRGlzdGFuY2UiLCJkb2N1bWVudEhlaWdodCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGllbnRIZWlnaHQiLCJzdHlsZU9iamVjdCIsImJhY2tncm91bmRDb2xvciIsIm1ldGhvZHMiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY3JvbGxZIiwiTWF0aCIsInBvdyIsImhhbmRsZVJlc2l6ZSIsIm1vdW50ZWQiLCJoZXJvRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJiZWZvcmVEZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhlcm9WdWUiLCJvZmZzZXQiLCJtYXhPZmZzZXQiLCJ2ZWxvY2l0eSIsImJneVBvcyIsImJhY2tncm91bmRQb3NpdGlvbiIsIiRlbCIsImhvbWVwYWdlUGxhbnMiLCJkZWxpbWl0ZXJzIiwiYWN0aXZlSW5kZXgiLCJwbGFucyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZ1VybCIsIm5hZW0iLCJwcmV2RWxlbWVudCIsIm5leHRFbGVtZW50IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFNBQVMsR0FBRyxJQUFJQyxHQUFKLENBQVE7QUFDekJDLEVBQUFBLEVBQUUsRUFBRSxTQURxQjtBQUV6QkMsRUFBQUEsSUFGeUIsa0JBRWxCO0FBQ04sV0FBTztBQUNOQyxNQUFBQSxPQUFPLEVBQUUsQ0FESDtBQUVOO0FBQ0FDLE1BQUFBLGdCQUFnQixFQUFFO0FBSFosS0FBUDtBQUtBLEdBUndCO0FBU3pCQyxFQUFBQSxRQUFRLEVBQUU7QUFDVEMsSUFBQUEsaUJBQWlCLEVBQUUsNkJBQVc7QUFDN0I7QUFDQSxXQUFL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LENBQVIsQ0FBdEIiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVhZGVyVnVlID0gbmV3IFZ1ZSh7XG5cdGVsOiBcIiNoZWFkZXJcIixcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdC8vIGhhY2t5IHdheSB0byBmb3JjZSByZWNvbXB1dGUgdmFsdWVzIG9uIHJlc2l6ZVxuXHRcdFx0cmVjb21wdXRlQ291bnRlcjogMFxuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRhbmltYXRpb25EaXN0YW5jZTogZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBzaG91bGQgYmUgcmVjb21wdXRlZFxuXHRcdFx0dGhpcy5yZWNvbXB1dGVDb3VudGVyXG5cdFx0XHRjb25zdCBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVyb1wiKS5jbGllbnRIZWlnaHRcblx0XHRcdHJldHVybiBkb2N1bWVudEhlaWdodCAtIDY0XG5cdFx0fSxcblx0XHRzdHlsZU9iamVjdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBgcmdiYSg2OSwgOTAsIDEwMCwgJHt0aGlzLm9wYWNpdHl9KWBcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvclxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGhhbmRsZVNjcm9sbCgpIHtcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHRpZiAod2luZG93LnNjcm9sbFkgPiB0aGlzLmFuaW1hdGlvbkRpc3RhbmNlKSB7XG5cdFx0XHRcdFx0dGhpcy5vcGFjaXR5ID0gMVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vcHJldHRpZXItaWdub3JlXG5cdFx0XHRcdFx0dGhpcy5vcGFjaXR5ID0gTWF0aC5wb3coKDEuMCAqIHdpbmRvdy5zY3JvbGxZKSAvIHRoaXMuYW5pbWF0aW9uRGlzdGFuY2UsIDQpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblxuXHRcdGhhbmRsZVJlc2l6ZSgpIHtcblx0XHRcdHRoaXMucmVjb21wdXRlQ291bnRlcisrXG5cdFx0fVxuXHR9LFxuXHRtb3VudGVkKCkge1xuXHRcdHRoaXMuaGVyb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlcm9cIilcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbClcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSlcblx0fSxcblx0YmVmb3JlRGVzdHJveSgpIHtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbClcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSlcblx0fVxufSlcbiIsImNvbnN0IGhlcm9WdWUgPSBuZXcgVnVlKHtcclxuXHRlbDogXCIjaGVyb1wiLFxyXG5cdGRhdGE6IHtcclxuXHRcdG9mZnNldDogMCxcclxuXHRcdG1heE9mZnNldDogMTAsXHJcblx0XHR2ZWxvY2l0eTogLTAuMzNcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGhhbmRsZVNjcm9sbDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblx0XHRcdFx0Ly8gZG8gbm90IGFuaW1hdGUgaWYgaGVybyBub3QgaW4gdmlld3BvcnRcclxuXHRcdFx0XHRpZiAod2luZG93LnNjcm9sbFkgPiB0aGlzLmFuaW1hdGlvbkRpc3RhbmNlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5vZmZzZXQgPSB0aGlzLnZlbG9jaXR5ICogd2luZG93LnNjcm9sbFlcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRzdHlsZU9iamVjdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNvbnN0IGJneVBvcyA9IDUwICsgdGhpcy5vZmZzZXRcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IGA1MCUgJHtiZ3lQb3N9JWBcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0bW91bnRlZDogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmFuaW1hdGlvbkRpc3RhbmNlID0gdGhpcy4kZWwuY2xpZW50SGVpZ2h0XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbClcclxuXHR9XHJcbn0pXHJcbiIsImNvbnN0IGhvbWVwYWdlUGxhbnMgPSBuZXcgVnVlKHtcclxuXHRlbDogXCIjcGxhbnNcIixcclxuXHRkZWxpbWl0ZXJzOiBbXCI8JVwiLCBcIiU+XCJdLFxyXG5cdGRhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YWN0aXZlSW5kZXg6IDAsXHJcblx0XHRcdHBsYW5zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogXCIxODBcIixcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIjE4MCBkZXNjcmlwdGlvblwiLFxyXG5cdFx0XHRcdFx0aW1nVXJsOiBcIi9pbWcvcGxhbnMvcGxhblRyaWFuZ2xlLnN2Z1wiXHJcblx0XHRcdFx0XHQvLyBpbWdVcmw6IFwiL2ltZy9jYXQuanBnXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiMzYwXCIsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCIzNjAgZGVzY3JpcHRpb25cIixcclxuXHRcdFx0XHRcdGltZ1VybDogXCIvaW1nL3BsYW5zL3BsYW5TcXVhcmUuc3ZnXCJcclxuXHRcdFx0XHRcdC8vIGltZ1VybDogXCIvaW1nL2NhdC5qcGdcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogXCI1NDBcIixcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIjU0MCBkZXNjcmlwdGlvblwiLFxyXG5cdFx0XHRcdFx0aW1nVXJsOiBcIi9pbWcvcGxhbnMvcGxhblBlbnRhZ29uLnN2Z1wiXHJcblx0XHRcdFx0XHQvLyBpbWdVcmw6IFwiL2ltZy9jYXQuanBnXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hZW06IFwiNzIwXCIsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCI3MjAgZGVzY3JpcHRpb25cIixcclxuXHRcdFx0XHRcdGltZ1VybDogXCIvaW1nL3BsYW5zL3BsYW5IZXhhZ29uLnN2Z1wiXHJcblx0XHRcdFx0XHQvLyBpbWdVcmw6IFwiL2ltZy9jYXQuanBnXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH1cclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdHByZXZFbGVtZW50KCkge1xyXG5cdFx0XHRpZiAodGhpcy5hY3RpdmVJbmRleCAhPT0gMCkge1xyXG5cdFx0XHRcdHRoaXMuYWN0aXZlSW5kZXgtLVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bmV4dEVsZW1lbnQoKSB7XHJcblx0XHRcdGlmICh0aGlzLmFjdGl2ZUluZGV4ICE9PSB0aGlzLnBsYW5zLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZUluZGV4KytcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSlcclxuIl19
