import { createRouter, createWebHashHistory } from 'vue-router'
import Utama from '../views/Utama.vue'
import Maklumat from '../views/Maklumat.vue'
import Galeri from '../views/Galeri.vue'
import Subjek from '../views/Subjek.vue'

const routes = [
  {
    path: '/',
    name: 'Utama',
    component: Utama
  },
  {
    path: '/maklumat-kami',
    name: 'Maklumat',
    component: Maklumat
  },
  {
    path: '/galeri',
    name: 'Galeri',
    component: Galeri
  },
  {
    path: '/subjek',
    name: 'Subjek',
    component: Subjek,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
