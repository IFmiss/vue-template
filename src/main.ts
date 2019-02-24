import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index.ts';
import store from '@/store/index.ts';
import Dutils from '@dw/d-utils';
import VueTitle from 'vue-wechat-title';
import Message from '@/components/Message';
declare module 'vue/types/vue' { interface Vue { $msg: any } };
Vue.config.productionTip = false;

Dutils.utils.initRem()
Dutils.device.checkLayoutOrientation()

Vue.use(Message, {
  text: 'Hello world', duration: 3000, background: 'rgba(7,17,27,0.6)'
})

Vue.use(VueTitle)

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
