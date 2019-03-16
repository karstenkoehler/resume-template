import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import colors from "vuetify/lib/util/colors";


Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: colors.orange.base,
    secondary: "#000",
    accent: colors.grey.lighten1
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app');
