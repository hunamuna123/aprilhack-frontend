import { useRouter } from "vue-router";


import _ from "lodash";
import noUiSlider from "nouislider";
window.noUiSlider = noUiSlider;
window._ = _;
// Preline UI
import("../node_modules/preline/dist");

export default defineNuxtPlugin(() => {
  const router = useRouter();


  router.afterEach(async () => {
    setTimeout(() => window.HSStaticMethods.autoInit());
  });
});