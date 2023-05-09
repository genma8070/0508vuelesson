import { createRouter, createWebHistory } from 'vue-router'
import VBind from '../views/VBind.vue'
import Aaaaaaaaa from '../views/Aaaaaaaaa.vue'
import E04 from '../views/E04.vue'
import Props from '../views/Props.vue'
import Emit from '../views/Emit.vue'
import VShow from '../views/Vshow.vue'
import RouterView from '../views/RouterView.vue'
import Modal from '../views/Modal.vue'

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
    },
    {
      path: '/emit',
      name: 'Emit',
      component: Emit
    },
    {
      path: '/v-show',
      name: 'VShow',
      component: VShow
    },
    {
      path: '/router-view',
      name: 'RouterView',
      component: RouterView
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal
    }
  ]
})

export default router
