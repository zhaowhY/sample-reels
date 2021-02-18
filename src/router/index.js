import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/3d-rotate'
  },
  {
    path: '/2d-round',
    name: '2d-圆周运动',
    component: () => import('../views/2D-round/Index.vue')
  },
  {
    path: '/3d-rotate',
    name: '3D-旋转',
    component: () => import('../views/3D-rotateDemo/index.vue')
  },
  {
    path: '/3d-wordCloud',
    name: '3D-词云',
    component: () => import('../views/3D-wordCloud/index.vue')
  },
  {
    path: '/grayscale',
    name: '灰色主题（悼念）',
    component: () => import('../views/grayscale/index.vue')
  },
  {
    path: '/watermark',
    name: '图片水印',
    component: () => import('../views/WaterMark/index.vue')
  },
  {
    path: '/jigsaw',
    name: '滑块验证码',
    component: () => import('../views/Jigsaw/index.vue')
  },
  {
    path: '/pdf',
    name: 'PDF在线预览',
    component: () => import('../views/PDF/index.vue')
  }

];

export const menuRoute = routes.filter(route => route.name && route.path && route.component);

export default new Router({
  routes
});


export const externalLinks = [
  {
    path: 'https://kongkong99.github.io/coordinate',
    name: '地理坐标在线转化工具'
  },
  {
    path: 'https://kongkong99.github.io/leafletMap/#/',
    name: 'Leaflet加载各类地图'
  },
  {
    path: 'https://kongkong99.github.io/coordinate',
    name: '地理坐标在线转化工具'
  },
  {
    path: 'https://kongkong99.github.io/leafletMap/#/',
    name: 'Leaflet加载各类地图'
  },
  {
    path: 'https://kongkong99.github.io/coordinate',
    name: '地理坐标在线转化工具'
  },
  {
    path: 'https://kongkong99.github.io/leafletMap/#/',
    name: 'Leaflet加载各类地图'
  },
  {
    path: 'https://kongkong99.github.io/coordinate',
    name: '地理坐标在线转化工具'
  },
  {
    path: 'https://kongkong99.github.io/leafletMap/#/',
    name: 'Leaflet加载各类地图'
  },
  {
    path: 'https://kongkong99.github.io/coordinate',
    name: '地理坐标在线转化工具'
  },
  {
    path: 'https://kongkong99.github.io/leafletMap/#/',
    name: 'Leaflet加载各类地图'
  }
];
