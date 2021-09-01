import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Contact from '../views/Contact.vue'
// import About from '../views/About.vue'

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
  // {
  //   path: '/about',
  //   name: 'About',
  //   component : About
  // },
  {
    path : '/contact',
    name : 'Contact',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/Contact.vue')
  }, {
    path: '/basic',
    name: 'Basic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "basic" */ '../views/Basic.vue')
  },{
    path: '/databinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "basic" */ '../views/DataBinding.vue')
 
  },{
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "basic" */ '../views/DataBindingHtml.vue')
 
  },{
    path: '/example',
    name: 'Example',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Example.vue')
 
  },{
    path: '/rendering',
    name: 'ListRendering',
    component: () => import(/* webpackChunkName: "basic" */ '../views/ListRendering.vue')
 
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
