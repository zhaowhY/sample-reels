import Vue from 'vue';
import Logger from '@/plugins/logger';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Logger, { debug: false });
Vue.config.productionTip = false;

Vue.$log.info('vue-eslint launch...');
new Vue({
  router,
  store,
  render(h) { return h(App); },
  async mounted() {
    this.$log.info('vue-eslint ready...');
    setInterval(() => {
      this.$store.commit('SYNC_CURRENT_TIME');
    }, 1000);
  }
}).$mount('#app');
