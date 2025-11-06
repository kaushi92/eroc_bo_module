import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard/dashboard.vue'
import LoginView from '../components/Login_Management/LoginView.vue'
import UnderConstruction from '../components/Framework/UnderConstruction.vue'
import Dashboard_BO from '../components/Dashboard/dashboard_bo.vue'
import DashboardStats from '../components/Dashboard/dashboardStats.vue'
import Form_01 from '../components/Forms/Form_01.vue'
import AuthorizedPersonDetails from '../components/Authorized_Person_View/AuthorizedPersonDetails.vue'
import Company_View from '../components/Company_Management/company_view.vue'
import BeneficialOwners from '../components/Beneficial_Owner/Add_Beneficial_Owner.vue'
import Company_List from '../components/Company_Management/Company_List.vue'

const routes = [
  {
    path: '/', // Dashboard is your landing page
    name: 'Login',
    component: LoginView,
    meta: { title: 'eROC - Login' }
  },
  {
    path: '/main-dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: 'eROC - Main Dashboard' }
  },
  {
    path: '/under-construction',
    name: 'UnderConstruction',
    component: UnderConstruction
  },
  {
    path: '/beneficial-ownership-dashboard',
    redirect: '/dashboard_bo/demoUser' // or dynamically later after login
  },
  // {
  //   path: '/dashboard_bo',
  //   name: 'Dashboard_BO',
  //   component: Dashboard_BO,
  // },
  {
    path: '/dashboard_bo/:username',
    component: Dashboard_BO,
    props: true, // ✅ parent gets username
    children: [
      { path: '', component: DashboardStats, props: true },          // dashboard stats
      { path: 'form_01', component: Form_01, props: true },         // BO Registration
      { path: 'company-view', component: Company_View, props: true }, // Company
      { path: 'company-view/:approvalNo/beneficial-owners', name: 'BeneficialOwners', component: BeneficialOwners, props: true },
      // { path: 'register-authorized-person', name: 'RegisterAuthorizedPerson', component: RegisterAuthorizedPerson, props: true },
      { path: 'register-authorized-person', name: 'RegisterAuthorizedPerson', component: () => import('../components/Forms/Form_04.vue'), props: true },
      { path: 'form_06', name: 'Form_06', component: () => import('../components/Forms/Form_06.vue'), props: true },
      { path: 'registration', name: 'Incorporation', component: () => import('../components/Forms/incorporation.vue'), props: true },
      { path: 'company-list', component: Company_List, props: true },
    ]
  },

  {
    path: '/authorized-person-details',
    name: 'AuthorizedPersonDetails',
    component: AuthorizedPersonDetails,
    meta: { title: 'Complete Profile' }
  },


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.afterEach((to) => {
  document.title = to.meta.title || 'eROC System';
});

export default router
