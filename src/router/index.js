import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue'),
    children: [{
      path: ':name',
      component: () => import('../views/Detail.vue')
    }],
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../views/TableDemo.vue')
  },
  {
    path: '/course/:name',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // if (to.meta.auth) {
  //   if (window.isLogin) {
  //     next();
  //   } else {
  //     next('/login?redirect=' + to.fullPath);
  //   }
  // } else {
  //   next();
  // }
  console.log('is run router.beforeEach');
  if (store.state.user.isLogin) {
    
    if (to.path === '/login') {
      next('/');
    } else {
      next();
    }
  } else {
    if (to.path === '/table') {
      next();
    } else {
      next('/table');
    }
  }
})
export default router
