import { createRouter, createWebHistory } from 'vue-router'
import VBind from '../views/VBind.vue'
import Aaaaaaaaa from '../views/Aaaaaaaaa.vue'
import E04 from '../views/E04.vue'
import Props from '../views/Props.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/v-bind',
      name: 'VBind',
      component: VBind
    },
    {
      path: '/a-aaaaaaaa',
      name: 'Aaaaaaaaa',
      component: Aaaaaaaaa
    },
    {
      path: '/e-04',
      name: 'E04',
      component: E04
    },
    {
      path: '/props',
      name: 'Props',
      component: Props
    }
  ]
})

export default router
