import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/3d-rotate'
    },
    {
      path: '/3d-rotate',
      name: '3D-rotate',
      component: () => import('../views/3D-rotateDemo/index.vue')
    }
  ]
});
