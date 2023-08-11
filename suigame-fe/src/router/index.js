import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Minting from '@/views/Minting/index.vue'
import Games from '@/views/Games/index.vue'
import Market from '@/views/Market/index.vue'
import Marketplace from '@/views/Market/Marketplace.vue'
import Prelaunch from '@/views/Market/Prelaunch.vue'
import Share from '@/views/Share/index.vue'
import Setting from '@/views/Settings/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/minting',
    name: 'Minting',
    component: Minting,
  },
  {
    path: '/games',
    name: 'Games',
    component: Games,
  },
  {
    path: '/market',
    name: 'Market',
    component: Market,
    children: [
      {
        path: 'marketplace',
        name: 'Marketplace',
        component: Marketplace,
      },
      {
        path: 'prelaunch',
        name: 'Prelaunch',
        component: Prelaunch,
      },
    ],
  },
  {
    path: '/share',
    name: 'Share',
    component: Share,
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
