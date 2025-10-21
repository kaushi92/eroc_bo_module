import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard/dashboard.vue'
import LoginView from '../components/Login_Management/LoginView.vue'
import UnderConstruction from '../components/Framework/UnderConstruction.vue'
import Dashboard_BO from '../components/Dashboard/dashboard_bo.vue'
import DashboardStats from '../components/Dashboard/dashboardStats.vue'
import Form_01 from '../components/Forms/Form_01.vue'
import Dashboard_bo from '../components/Dashboard/dashboard_bo.vue'

const routes = [
  {
    path: '/', // Dashboard is your landing page
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/under-construction',
    name: 'UnderConstruction',
    component: UnderConstruction
  },
  {
    path: '/beneficial-ownership-dashboard',
    component: Dashboard_BO,
    props: true
  },
  {
    path: '/dashboard_bo/:username',
    component: Dashboard_BO,
    children: [
      { path: '', component: DashboardStats },
      { path: 'form_01', component: Form_01 },
    ],
  },


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
