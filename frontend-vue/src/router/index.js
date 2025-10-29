import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard/dashboard.vue'
import LoginView from '../components/Login_Management/LoginView.vue'
import UnderConstruction from '../components/Framework/UnderConstruction.vue'
import Dashboard_BO from '../components/Dashboard/dashboard_bo.vue'
import DashboardStats from '../components/Dashboard/dashboardStats.vue'
import Form_01 from '../components/Forms/Form_01.vue'
import Dashboard_bo from '../components/Dashboard/dashboard_bo.vue'
import AuthorizedPersonDetails from '../components/Authorized_Person_View/AuthorizedPersonDetails.vue'
import Company_View from '../components/Company_Management/company_view.vue'
import BeneficialOwners from '../components/Beneficial_Owner/Add_Beneficial_Owner.vue'
import RegisterAuthorizedPerson from '../components/Forms/Form_04.vue'

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
    path: '/dashboard_bo',
    name: 'Dashboard_BO',
    component: Dashboard_BO,
  },
  {
    path: '/dashboard_bo/:username',
    component: Dashboard_BO,
    props: true, // ✅ parent gets username
    children: [
      { path: '', component: DashboardStats, props: true },          // dashboard stats
      { path: 'form_01', component: Form_01, props: true },         // BO Registration
      { path: 'company-view', component: Company_View, props: true }, // Company
      { path: 'company-view/:approvalNo/beneficial-owners', name: 'BeneficialOwners', component: BeneficialOwners, props: true},
     // { path: 'register-authorized-person', name: 'RegisterAuthorizedPerson', component: RegisterAuthorizedPerson, props: true },
      { path: 'register-authorized-person', name: 'RegisterAuthorizedPerson', component: () => import('../components/Forms/Form_04.vue'), props: true},
    ]
  },

  {
    path: '/authorized-person-details',
    name: 'AuthorizedPersonDetails',
    component: AuthorizedPersonDetails,
  },


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
