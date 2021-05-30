import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: Home,
      }
    },
    {
      path: "/blockfi",
      name: "blockfi",
      meta: {
        requiresAuth: false
      },
      beforeEnter(to, from, next) {
        window.location.href = "https://blockfi.com/?ref=84b8680a";
      }
    },
    {
      path: "/trezor",
      name: "trezor",
      meta: {
        requiresAuth: false
      },
      beforeEnter(to, from, next) {
        window.location.href = "https://shop.trezor.io/product/trezor-model-t?offer_id=15&aff_id=6445";
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
