import Vue from 'vue';
import { Scrollbar } from 'element-ui';
import Logger from '@/plugins/logger';
import { setRemInit } from '@/directives/rem';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Logger, { debug: false });
Vue.use(Scrollbar);
Vue.config.productionTip = false;

Vue.$log.info('vue-eslint launch...');
setRemInit();

new Vue({
  router,
  store,
  render(h) {
    return h(App);
  },
  async mounted() {
    this.$log.info('vue-eslint ready...');
    setInterval(() => {
      this.$store.commit('SYNC_CURRENT_TIME');
    }, 1000);
  }
}).$mount('#app');
