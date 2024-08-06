import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Company from '../views/Company.vue';
import Home2 from '../views/Home2.vue';

const routes = [
  {
    path: '/font-license/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/font-license/company',
    name: 'Company',
    component: Company,
  },
  {
    path: '/font-license/home2',
    name: 'Home2',
    component: Home2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
