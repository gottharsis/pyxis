"use strict";

var headerVue = new Vue({
  el: "#header.fade",
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qcyIsImhlcm8uanMiLCJob21lcGFnZS1wbGFucy5qcyJdLCJuYW1lcyI6WyJoZWFkZXJWdWUiLCJWdWUiLCJlbCIsImRhdGEiLCJvcGFjaXR5IiwicmVjb21wdXRlQ291bnRlciIsImNvbXB1dGVkIiwiYW5pbWF0aW9uRGlzdGFuY2UiLCJkb2N1bWVudEhlaWdodCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGllbnRIZWlnaHQiLCJzdHlsZU9iamVjdCIsImJhY2tncm91bmRDb2xvciIsIm1ldGhvZHMiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY3JvbGxZIiwiTWF0aCIsInBvdyIsImhhbmRsZVJlc2l6ZSIsIm1vdW50ZWQiLCJoZXJvRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJiZWZvcmVEZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhlcm9WdWUiLCJvZmZzZXQiLCJtYXhPZmZzZXQiLCJ2ZWxvY2l0eSIsImJneVBvcyIsImJhY2tncm91bmRQb3NpdGlvbiIsIiRlbCIsImhvbWVwYWdlUGxhbnMiLCJkZWxpbWl0ZXJzIiwiYWN0aXZlSW5kZXgiLCJwbGFucyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZ1VybCIsIm5hZW0iLCJwcmV2RWxlbWVudCIsIm5leHRFbGVtZW50IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFNBQVMsR0FBRyxJQUFJQyxHQUFKLENBQVE7QUFDekJDLEVBQUFBLEVBQUUsRUFBRSxjQURxQjtBQUV6QkMsRUFBQUEsSUFGeUIsa0JBRWxCO0FBQ04sV0FBTztBQUNOQyxNQUFBQSxPQUFPLEVBQUUsQ0FESDtBQUVOO0FBQ0FDLE1BQUFBLGdCQUFnQixFQUFFO0FBSFosS0FBUDtBQUtBLEdBUndCO0FBU3pCQyxFQUFBQSxRQUFRLEVBQUU7QUFDVEMsSUFBQUEsaUJBQWlCLEVBQUUsNkJBQVc7QUFDN0I7QUFDQSxXQUFL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LENBQVIsQ0FBdEIiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVhZGVyVnVlID0gbmV3IFZ1ZSh7XHJcblx0ZWw6IFwiI2hlYWRlci5mYWRlXCIsXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG9wYWNpdHk6IDAsXHJcblx0XHRcdC8vIGhhY2t5IHdheSB0byBmb3JjZSByZWNvbXB1dGUgdmFsdWVzIG9uIHJlc2l6ZVxyXG5cdFx0XHRyZWNvbXB1dGVDb3VudGVyOiAwXHJcblx0XHR9XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0YW5pbWF0aW9uRGlzdGFuY2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBzaG91bGQgYmUgcmVjb21wdXRlZFxyXG5cdFx0XHR0aGlzLnJlY29tcHV0ZUNvdW50ZXJcclxuXHRcdFx0Y29uc3QgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlcm9cIikuY2xpZW50SGVpZ2h0XHJcblx0XHRcdHJldHVybiBkb2N1bWVudEhlaWdodCAtIDY0XHJcblx0XHR9LFxyXG5cdFx0c3R5bGVPYmplY3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBgcmdiYSg2OSwgOTAsIDEwMCwgJHt0aGlzLm9wYWNpdHl9KWBcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3JcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0aGFuZGxlU2Nyb2xsKCkge1xyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuXHRcdFx0XHRpZiAod2luZG93LnNjcm9sbFkgPiB0aGlzLmFuaW1hdGlvbkRpc3RhbmNlKSB7XHJcblx0XHRcdFx0XHR0aGlzLm9wYWNpdHkgPSAxXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vcHJldHRpZXItaWdub3JlXHJcblx0XHRcdFx0XHR0aGlzLm9wYWNpdHkgPSBNYXRoLnBvdygoMS4wICogd2luZG93LnNjcm9sbFkpIC8gdGhpcy5hbmltYXRpb25EaXN0YW5jZSwgNClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cclxuXHRcdGhhbmRsZVJlc2l6ZSgpIHtcclxuXHRcdFx0dGhpcy5yZWNvbXB1dGVDb3VudGVyKytcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1vdW50ZWQoKSB7XHJcblx0XHR0aGlzLmhlcm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZXJvXCIpXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbClcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKVxyXG5cdH0sXHJcblx0YmVmb3JlRGVzdHJveSgpIHtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsKVxyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5oYW5kbGVSZXNpemUpXHJcblx0fVxyXG59KVxyXG4iLCJjb25zdCBoZXJvVnVlID0gbmV3IFZ1ZSh7XHJcblx0ZWw6IFwiI2hlcm9cIixcclxuXHRkYXRhOiB7XHJcblx0XHRvZmZzZXQ6IDAsXHJcblx0XHRtYXhPZmZzZXQ6IDEwLFxyXG5cdFx0dmVsb2NpdHk6IC0wLjMzXHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRoYW5kbGVTY3JvbGw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIGRvIG5vdCBhbmltYXRlIGlmIGhlcm8gbm90IGluIHZpZXdwb3J0XHJcblx0XHRcdFx0aWYgKHdpbmRvdy5zY3JvbGxZID4gdGhpcy5hbmltYXRpb25EaXN0YW5jZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMub2Zmc2V0ID0gdGhpcy52ZWxvY2l0eSAqIHdpbmRvdy5zY3JvbGxZXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0c3R5bGVPYmplY3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb25zdCBiZ3lQb3MgPSA1MCArIHRoaXMub2Zmc2V0XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBgNTAlICR7Ymd5UG9zfSVgXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5hbmltYXRpb25EaXN0YW5jZSA9IHRoaXMuJGVsLmNsaWVudEhlaWdodFxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5oYW5kbGVTY3JvbGwpXHJcblx0fVxyXG59KVxyXG4iLCJjb25zdCBob21lcGFnZVBsYW5zID0gbmV3IFZ1ZSh7XHJcblx0ZWw6IFwiI3BsYW5zXCIsXHJcblx0ZGVsaW1pdGVyczogW1wiPCVcIiwgXCIlPlwiXSxcclxuXHRkYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGFjdGl2ZUluZGV4OiAwLFxyXG5cdFx0XHRwbGFuczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiMTgwXCIsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCIxODAgZGVzY3JpcHRpb25cIixcclxuXHRcdFx0XHRcdGltZ1VybDogXCIvaW1nL3BsYW5zL3BsYW5UcmlhbmdsZS5zdmdcIlxyXG5cdFx0XHRcdFx0Ly8gaW1nVXJsOiBcIi9pbWcvY2F0LmpwZ1wiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBcIjM2MFwiLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiMzYwIGRlc2NyaXB0aW9uXCIsXHJcblx0XHRcdFx0XHRpbWdVcmw6IFwiL2ltZy9wbGFucy9wbGFuU3F1YXJlLnN2Z1wiXHJcblx0XHRcdFx0XHQvLyBpbWdVcmw6IFwiL2ltZy9jYXQuanBnXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiNTQwXCIsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCI1NDAgZGVzY3JpcHRpb25cIixcclxuXHRcdFx0XHRcdGltZ1VybDogXCIvaW1nL3BsYW5zL3BsYW5QZW50YWdvbi5zdmdcIlxyXG5cdFx0XHRcdFx0Ly8gaW1nVXJsOiBcIi9pbWcvY2F0LmpwZ1wiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYWVtOiBcIjcyMFwiLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiNzIwIGRlc2NyaXB0aW9uXCIsXHJcblx0XHRcdFx0XHRpbWdVcmw6IFwiL2ltZy9wbGFucy9wbGFuSGV4YWdvbi5zdmdcIlxyXG5cdFx0XHRcdFx0Ly8gaW1nVXJsOiBcIi9pbWcvY2F0LmpwZ1wiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRwcmV2RWxlbWVudCgpIHtcclxuXHRcdFx0aWYgKHRoaXMuYWN0aXZlSW5kZXggIT09IDApIHtcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZUluZGV4LS1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG5leHRFbGVtZW50KCkge1xyXG5cdFx0XHRpZiAodGhpcy5hY3RpdmVJbmRleCAhPT0gdGhpcy5wbGFucy5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0dGhpcy5hY3RpdmVJbmRleCsrXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0pXHJcbiJdfQ==
