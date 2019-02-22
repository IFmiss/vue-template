import Vue from 'vue';
import Router from 'vue-router';
const Page = () => import('@/views/page/index.vue');
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: Page,
      meta: {
        title: '首页'
      }
    }
  ]
});
