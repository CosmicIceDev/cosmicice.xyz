import Vue from 'vue';
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueTippy, {
    directive: "tippy",
    followCursor: true,
    hideOnClick: false,
    arrow: false,
    animation: 'none',
    flipDuration: 0,
    popperOptions: {
      modifiers: {
        preventOverflow: {
          enabled: false
        }
      }
    }
  });
Vue.component("tippy", TippyComponent);