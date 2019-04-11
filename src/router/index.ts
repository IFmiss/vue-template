import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: () => import('@/views/page/index.vue'),
      meta: {
        title: '首页'
      }
    }
  ]
});
