import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: to => {
       let rand = Math.floor(Math.random()*3 +1);
       if(rand == 1){
         return '/green';
       } else if( rand == 2){
         return '/yellow';
       } else if( rand == 3){
         return '/red';
       }
    }
  },
  {
    path: '/green',
    name: 'green',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Green.vue')
    }
  },
  {
    path: '/yellow',
    name: 'yellow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Yellow.vue')
    }
  },
  {
    path: '/red',
    name: 'red',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Red.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
