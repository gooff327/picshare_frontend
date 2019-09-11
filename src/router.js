import Vue from 'vue'
import Router from 'vue-router'
import Root from './views/Layout.vue'

const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ './views/common/login/index.vue')
  },
  {
    path: '/app',
    name: 'app',
    component: Root,
    children: [
      {
        path: '/admin',
        name: 'admin',
        component: () => import('./views/admin/index.vue'),
        children: [
          {
            path: '/users',
            name: 'users',
            component: () => import('./views/admin/usersManage/index.vue')
          },
          {
            path: '/contents',
            name: 'contents',
            component: () => import('./views/admin/contentsManage/index.vue')
          }
        ]
      },
      {
        path: '/v1',
        redirect: '/home',
        component: () => import('./views/users/index.vue'),
        children: [
          {
            path: '/home',
            name: 'home',
            component: () => import('./views/users/home/index.vue')
          },
          {
            path: '/friends',
            name: 'friends',
            component: () => import('./views/users/friends/index.vue')
          },
          {
            path: '/producer',
            name: 'producer',
            component: () => import('./views/users/producer/index.vue')
          },
          {
            path: '/messages',
            name: 'messages',
            component: () => import('./views/users/messages/index.vue')
          },
          {
            path: '/profiles',
            name: 'profiles',
            component: () => import('./views/users/profiles/index.vue')
          }
        ]
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
