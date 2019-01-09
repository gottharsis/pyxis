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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qcyJdLCJuYW1lcyI6WyJWdWUiLCJkaXJlY3RpdmUiLCJpbnNlcnRlZCIsImVsIiwiYmluZGluZyIsImYiLCJldnQiLCJ2YWx1ZSIsIndyYXBwZXJFbGVtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVyb0VsZW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaGVhZGVyVnVlIiwiZGF0YSIsIm9wYWNpdHkiLCJjb21wdXRlZCIsImFuaW1hdGlvbkRpc3RhbmNlIiwiZG9jdW1lbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdHlsZU9iamVjdCIsImJhY2tncm91bmRDb2xvciIsIm1ldGhvZHMiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxUb3AiLCJNYXRoIiwicG93Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxRQUFkLEVBQXdCO0FBQ3ZCQyxFQUFBQSxRQUFRLEVBQUUsa0JBQVNDLEVBQVQsRUFBYUMsT0FBYixFQUFzQjtBQUMvQixRQUFJQyxDQUFDLEdBQUcsU0FBSkEsQ0FBSSxDQUFTQyxHQUFULEVBQWM7QUFDckIsVUFBSUYsT0FBTyxDQUFDRyxLQUFSLENBQWNELEdBQWQsRUFBbUJILEVBQW5CLENBQUosRUFBNEI7QUFDM0JLLFFBQUFBLGNBQWMsQ0FBQ0MsbUJBQWYsQ0FBbUMsUUFBbkMsRUFBNkNKLENBQTdDO0FBQ0E7QUFDRCxLQUpEOztBQUtBRyxJQUFBQSxjQUFjLENBQUNFLGdCQUFmLENBQWdDLFFBQWhDLEVBQTBDTCxDQUExQztBQUNBO0FBUnNCLENBQXhCO0FBV0EsSUFBTUcsY0FBYyxHQUFHRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBdkI7QUFDQSxJQUFNQyxXQUFXLEdBQUdGLFFBQVEsQ0FBQ0csc0JBQVQsQ0FBZ0MsTUFBaEMsRUFBd0MsQ0FBeEMsQ0FBcEI7QUFFQSxJQUFNQyxTQUFTLEdBQUcsSUFBSWYsR0FBSixDQUFRO0FBQ3pCRyxFQUFBQSxFQUFFLEVBQUUsU0FEcUI7QUFFekJhLEVBQUFBLElBQUksRUFBRTtBQUNMQyxJQUFBQSxPQUFPLEVBQUU7QUFESixHQUZtQjtBQUt6QkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1RDLElBQUFBLGlCQUFpQixFQUFFLDZCQUFXO0FBQzdCLFVBQU1DLGNBQWMsR0FBR1AsV0FBVyxDQUFDUSxZQUFuQztBQUNBLGFBQU9ELGNBQWMsR0FBRyxFQUF4QjtBQUNBLEtBSlE7QUFLVEUsSUFBQUEsV0FBVyxFQUFFLHVCQUFXO0FBQ3ZCLFVBQU1DLGVBQWUsK0JBQXdCLEtBQUtOLE9BQTdCLE1BQXJCO0FBQ0EsYUFBTztBQUNOTSxRQUFBQSxlQUFlLEVBQWZBO0FBRE0sT0FBUDtBQUdBO0FBVlEsR0FMZTtBQWlCekJDLEVBQUFBLE9BQU8sRUFBRTtBQUNSQyxJQUFBQSxZQUFZLEVBQUUsd0JBQVc7QUFDeEIsVUFBSWpCLGNBQWMsQ0FBQ2tCLFNBQWYsR0FBMkIsS0FBS1AsaUJBQXBDLEVBQXVEO0FBQ3RELGFBQUtGLE9BQUwsR0FBZSxDQUFmO0FBQ0EsT0FGRCxNQUVPO0FBQ047QUFDQSxhQUFLQSxPQUFMLEdBQWVVLElBQUksQ0FBQ0MsR0FBTCxDQUFVLE1BQU1wQixjQUFjLENBQUNrQixTQUF0QixHQUFtQyxLQUFLUCxpQkFBakQsRUFBb0UsQ0FBcEUsQ0FBZjtBQUNBO0FBQ0Q7QUFSTztBQWpCZ0IsQ0FBUixDQUFsQiIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUuZGlyZWN0aXZlKFwic2Nyb2xsXCIsIHtcclxuXHRpbnNlcnRlZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcpIHtcclxuXHRcdGxldCBmID0gZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdGlmIChiaW5kaW5nLnZhbHVlKGV2dCwgZWwpKSB7XHJcblx0XHRcdFx0d3JhcHBlckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR3cmFwcGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGYpXHJcblx0fVxyXG59KVxyXG5cclxuY29uc3Qgd3JhcHBlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndyYXBwZXJcIilcclxuY29uc3QgaGVyb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGVyb1wiKVswXVxyXG5cclxuY29uc3QgaGVhZGVyVnVlID0gbmV3IFZ1ZSh7XHJcblx0ZWw6IFwiI2hlYWRlclwiLFxyXG5cdGRhdGE6IHtcclxuXHRcdG9wYWNpdHk6IDBcclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRhbmltYXRpb25EaXN0YW5jZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gaGVyb0VsZW1lbnQuY2xpZW50SGVpZ2h0XHJcblx0XHRcdHJldHVybiBkb2N1bWVudEhlaWdodCAtIDY0XHJcblx0XHR9LFxyXG5cdFx0c3R5bGVPYmplY3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBgcmdiYSg2OSwgOTAsIDEwMCwgJHt0aGlzLm9wYWNpdHl9KWBcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3JcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0aGFuZGxlU2Nyb2xsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKHdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCA+IHRoaXMuYW5pbWF0aW9uRGlzdGFuY2UpIHtcclxuXHRcdFx0XHR0aGlzLm9wYWNpdHkgPSAxXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly9wcmV0dGllci1pZ25vcmVcclxuXHRcdFx0XHR0aGlzLm9wYWNpdHkgPSBNYXRoLnBvdygoMS4wICogd3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wKSAvIHRoaXMuYW5pbWF0aW9uRGlzdGFuY2UsIDQpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0pXHJcbiJdfQ==
