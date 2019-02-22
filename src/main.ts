import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index.ts';
import store from '@/store/index.ts';
import Dutils from 'd-js-utils';
import VueTitle from 'vue-wechat-title';

Vue.config.productionTip = false;

Dutils.utils.initRem()
Dutils.device.checkLayoutOrientation()

Vue.use(VueTitle)

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
