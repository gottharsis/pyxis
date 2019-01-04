"use strict";

var headerVue = new Vue({
  el: "#header",
  data: {
    opacity: 0
  },
  computed: {
    animationDistance: function animationDistance() {
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
    }
  },
  mounted: function mounted() {
    this.heroElement = document.getElementById("hero");
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
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
      console.log("prevElement");

      if (this.activeIndex !== 0) {
        this.activeIndex--;
      }
    },
    nextElement: function nextElement() {
      console.log("nextElement");

      if (this.activeIndex !== this.plans.length - 1) {
        this.activeIndex++;
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qcyIsImhlcm8uanMiLCJob21lcGFnZS1wbGFucy5qcyJdLCJuYW1lcyI6WyJoZWFkZXJWdWUiLCJWdWUiLCJlbCIsImRhdGEiLCJvcGFjaXR5IiwiY29tcHV0ZWQiLCJhbmltYXRpb25EaXN0YW5jZSIsImRvY3VtZW50SGVpZ2h0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWVudEhlaWdodCIsInN0eWxlT2JqZWN0IiwiYmFja2dyb3VuZENvbG9yIiwibWV0aG9kcyIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFkiLCJNYXRoIiwicG93IiwibW91bnRlZCIsImhlcm9FbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJlZm9yZURlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGVyb1Z1ZSIsIm9mZnNldCIsIm1heE9mZnNldCIsInZlbG9jaXR5IiwiYmd5UG9zIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiJGVsIiwiaG9tZXBhZ2VQbGFucyIsImRlbGltaXRlcnMiLCJhY3RpdmVJbmRleCIsInBsYW5zIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW1nVXJsIiwibmFlbSIsInByZXZFbGVtZW50IiwiY29uc29sZSIsImxvZyIsIm5leHRFbGVtZW50IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFNBQVMsR0FBRyxJQUFJQyxHQUFKLENBQVE7QUFDekJDLEVBQUFBLEVBQUUsRUFBRSxTQURxQjtBQUV6QkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0xDLElBQUFBLE9BQU8sRUFBRTtBQURKLEdBRm1CO0FBS3pCQyxFQUFBQSxRQUFRLEVBQUU7QUFDVEMsSUFBQUEsaUJBQWlCLEVBQUUsNkJBQVc7QUFDN0IsVUFBTUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLFlBQXZEO0FBQ0EsYUFBT0gsY0FBYyxHQUFHLEVBQXhC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QUFXLEVBQUUsaUJBRmQ7QUFHQ0MsUUFBQUEsTUFBTSxFQUFFLDZCQUhULENBSUM7O0FBSkQsT0FETSxFQU9OO0FBQ0NGLFFBQUFBLElBQUksRUFBRSxLQURQO0FBRUNDLFFBQUFBLFdBQVcsRUFBRSxpQkFGZDtBQUdDQyxRQUFBQSxNQUFNLEVBQUUsMkJBSFQsQ0FJQzs7QUFKRCxPQVBNLEVBYU47QUFDQ0YsUUFBQUEsSUFBSSxFQUFFLEtBRFA7QUFFQ0MsUUFBQUEsV0FBVyxFQUFFLGlCQUZkO0FBR0NDLFFBQUFBLE1BQU0sRUFBRSw2QkFIVCxDQUlDOztBQUpELE9BYk0sRUFtQk47QUFDQ0MsUUFBQUEsSUFBSSxFQUFFLEtBRFA7QUFFQ0YsUUFBQUEsV0FBVyxFQUFFLGlCQUZkO0FBR0NDLFFBQUFBLE1BQU0sRUFBRSw0QkFIVCxDQUlDOztBQUpELE9BbkJNO0FBRkQsS0FBUDtBQTZCQSxHQWpDNEI7QUFrQzdCekIsRUFBQUEsT0FBTyxFQUFFO0FBQ1IyQixJQUFBQSxXQUFXLEVBQUUsdUJBQVc7QUFDdkJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7O0FBQ0EsVUFBSSxLQUFLUixXQUFMLEtBQXFCLENBQXpCLEVBQTRCO0FBQzNCLGFBQUtBLFdBQUw7QUFDQTtBQUNELEtBTk87QUFPUlMsSUFBQUEsV0FBVyxFQUFFLHVCQUFXO0FBQ3ZCRixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaOztBQUNBLFVBQUksS0FBS1IsV0FBTCxLQUFxQixLQUFLQyxLQUFMLENBQVdTLE1BQVgsR0FBb0IsQ0FBN0MsRUFBZ0Q7QUFDL0MsYUFBS1YsV0FBTDtBQUNBO0FBQ0Q7QUFaTztBQWxDb0IsQ0FBUixDQUF0QiIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWFkZXJWdWUgPSBuZXcgVnVlKHtcblx0ZWw6IFwiI2hlYWRlclwiLFxuXHRkYXRhOiB7XG5cdFx0b3BhY2l0eTogMFxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGFuaW1hdGlvbkRpc3RhbmNlOiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZXJvXCIpLmNsaWVudEhlaWdodFxuXHRcdFx0cmV0dXJuIGRvY3VtZW50SGVpZ2h0IC0gNjRcblx0XHR9LFxuXHRcdHN0eWxlT2JqZWN0OiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGByZ2JhKDY5LCA5MCwgMTAwLCAke3RoaXMub3BhY2l0eX0pYFxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0aGFuZGxlU2Nyb2xsOiBmdW5jdGlvbigpIHtcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHRpZiAod2luZG93LnNjcm9sbFkgPiB0aGlzLmFuaW1hdGlvbkRpc3RhbmNlKSB7XG5cdFx0XHRcdFx0dGhpcy5vcGFjaXR5ID0gMVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vcHJldHRpZXItaWdub3JlXG5cdFx0XHRcdFx0dGhpcy5vcGFjaXR5ID0gTWF0aC5wb3coKDEuMCAqIHdpbmRvdy5zY3JvbGxZKSAvIHRoaXMuYW5pbWF0aW9uRGlzdGFuY2UsIDQpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXHR9LFxuXHRtb3VudGVkOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmhlcm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZXJvXCIpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5oYW5kbGVTY3JvbGwpXG5cdH0sXG5cdGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsKVxuXHR9XG59KVxuIiwiY29uc3QgaGVyb1Z1ZSA9IG5ldyBWdWUoe1xyXG5cdGVsOiBcIiNoZXJvXCIsXHJcblx0ZGF0YToge1xyXG5cdFx0b2Zmc2V0OiAwLFxyXG5cdFx0bWF4T2Zmc2V0OiAxMCxcclxuXHRcdHZlbG9jaXR5OiAtMC4zM1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0aGFuZGxlU2Nyb2xsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuXHRcdFx0XHQvLyBkbyBub3QgYW5pbWF0ZSBpZiBoZXJvIG5vdCBpbiB2aWV3cG9ydFxyXG5cdFx0XHRcdGlmICh3aW5kb3cuc2Nyb2xsWSA+IHRoaXMuYW5pbWF0aW9uRGlzdGFuY2UpIHtcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLm9mZnNldCA9IHRoaXMudmVsb2NpdHkgKiB3aW5kb3cuc2Nyb2xsWVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdHN0eWxlT2JqZWN0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc3QgYmd5UG9zID0gNTAgKyB0aGlzLm9mZnNldFxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogYDUwJSAke2JneVBvc30lYFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuYW5pbWF0aW9uRGlzdGFuY2UgPSB0aGlzLiRlbC5jbGllbnRIZWlnaHRcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsKVxyXG5cdH1cclxufSlcclxuIiwiY29uc3QgaG9tZXBhZ2VQbGFucyA9IG5ldyBWdWUoe1xyXG5cdGVsOiBcIiNwbGFuc1wiLFxyXG5cdGRlbGltaXRlcnM6IFtcIjwlXCIsIFwiJT5cIl0sXHJcblx0ZGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRhY3RpdmVJbmRleDogMCxcclxuXHRcdFx0cGxhbnM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBcIjE4MFwiLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiMTgwIGRlc2NyaXB0aW9uXCIsXHJcblx0XHRcdFx0XHRpbWdVcmw6IFwiL2ltZy9wbGFucy9wbGFuVHJpYW5nbGUuc3ZnXCJcclxuXHRcdFx0XHRcdC8vIGltZ1VybDogXCIvaW1nL2NhdC5qcGdcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogXCIzNjBcIixcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIjM2MCBkZXNjcmlwdGlvblwiLFxyXG5cdFx0XHRcdFx0aW1nVXJsOiBcIi9pbWcvcGxhbnMvcGxhblNxdWFyZS5zdmdcIlxyXG5cdFx0XHRcdFx0Ly8gaW1nVXJsOiBcIi9pbWcvY2F0LmpwZ1wiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBcIjU0MFwiLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiNTQwIGRlc2NyaXB0aW9uXCIsXHJcblx0XHRcdFx0XHRpbWdVcmw6IFwiL2ltZy9wbGFucy9wbGFuUGVudGFnb24uc3ZnXCJcclxuXHRcdFx0XHRcdC8vIGltZ1VybDogXCIvaW1nL2NhdC5qcGdcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFlbTogXCI3MjBcIixcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIjcyMCBkZXNjcmlwdGlvblwiLFxyXG5cdFx0XHRcdFx0aW1nVXJsOiBcIi9pbWcvcGxhbnMvcGxhbkhleGFnb24uc3ZnXCJcclxuXHRcdFx0XHRcdC8vIGltZ1VybDogXCIvaW1nL2NhdC5qcGdcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0cHJldkVsZW1lbnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInByZXZFbGVtZW50XCIpXHJcblx0XHRcdGlmICh0aGlzLmFjdGl2ZUluZGV4ICE9PSAwKSB7XHJcblx0XHRcdFx0dGhpcy5hY3RpdmVJbmRleC0tXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRuZXh0RWxlbWVudDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwibmV4dEVsZW1lbnRcIilcclxuXHRcdFx0aWYgKHRoaXMuYWN0aXZlSW5kZXggIT09IHRoaXMucGxhbnMubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdHRoaXMuYWN0aXZlSW5kZXgrK1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KVxyXG4iXX0=
