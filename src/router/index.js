import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Contact from '../views/Contact.vue'
// import About from '../views/About.vue'
import Computed from '../views/Computed.vue'
import Watch from '../views/Watch.vue'
import Search from '../views/Search.vue'
import Save from '../views/Save.vue'

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
    name: 'Rendering',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Rendering.vue')
 
  },{
    path: '/event',
    name: 'EventTest',
    component: () => import(/* webpackChunkName: "basic" */ '../views/EventTest.vue')
  },{
    path : '/computed',
    name : 'Computed',
    component : Computed
  },{
    path : '/watch',
    name : 'Watch',
    component : Watch
  },{
    path : '/search',
    name : 'Search',
    component : Search
  },{
    path : '/save',
    name : 'Save',
    component : Save
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
