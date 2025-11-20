<template>
  <div class="flex h-screen bg-slate-100 overflow-hidden">
    <!-- Sidebar -->
    <aside :class="[
      'fixed lg:static inset-y-0 left-0 z-20 bg-indigo-900 text-white flex flex-col transition-all duration-300 ease-in-out',
      sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0 lg:w-64'
    ]">
      <div class="p-6 text-xl font-semibold border-b border-indigo-700 flex justify-between items-center">
        <!-- Left: Logo + Text -->
        <div class="flex items-center gap-3">
          <img src="../../assets/img/Logo_gov.png" alt="Government Logo" class="w-13 h-13 object-contain">
          <span>eROC Portal</span>
        </div>

        <!-- Close button for mobile -->
        <button @click="toggleSidebar" class="lg:hidden text-white">
          <i class="bi bi-x-lg text-2xl"></i>
        </button>
      </div>
      <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
        <router-link v-for="item in menuItems" :key="item.id" :to="getMenuRoute(item.id)"
          class="block px-4 py-2 rounded-lg transition flex items-center" :class="[
            activeMenu === item.id
              ? 'bg-indigo-700 text-white font-medium'
              : 'text-gray-200 hover:bg-indigo-800 hover:text-white',
          ]" @click.native="setActive(item.id)">
          <i :class="item.icon + ' mr-2 text-lg'"></i>
          <span class="truncate">{{ item.label }}</span>
        </router-link>
      </nav>

      <!-- Logout Button -->
      <div class="p-4 border-t border-indigo-700">
        <button @click="handleLogout"
          class="flex items-center gap-2 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition">
          <i class="bi bi-box-arrow-right"></i> Logout
        </button>
      </div>
    </aside>

    <!-- Overlay for mobile when sidebar open -->
    <div v-if="sidebarOpen && !isLargeScreen" @click="toggleSidebar"
      class="fixed inset-0 bg-black opacity-30 z-10 lg:hidden"></div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col bg-gray-100">
      <!-- Header -->
      <!-- Header -->
      <header
        class="bg-gradient-to-r from-indigo-900 via-indigo-800 to-sky-700 text-white py-4 px-6 shadow flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-center text-center sm:text-left">
        <div class="flex items-center gap-4 w-full justify-start sm:justify-start">
          <!-- Hamburger button -->
          <button @click="toggleSidebar" class="lg:hidden text-white text-2xl">
            <i class="bi bi-list"></i>
          </button>
          <div class="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
            <h1 class="text-2xl font-semibold">{{ pageTitle }}</h1>
            <p class="text-sm text-gray-200 mt-1">
              Welcome, {{ username }} — {{ role }}
            </p>
          </div>

        </div>

        <!-- Action Buttons (only for Dashboard) -->
        <div v-if="activeMenu === 'dashboard'"
          class="flex flex-wrap sm:flex-nowrap gap-2 mt-4 sm:mt-0 justify-center sm:justify-end w-full sm:w-auto">
          <button
            class="flex-1 sm:flex-none min-w-[120px] xs:min-w-[100px] bg-white text-indigo-700 font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow hover:bg-indigo-100 transition text-xs sm:text-sm">
            Register New BO
          </button>
          <button
            class="flex-1 sm:flex-none min-w-[120px] xs:min-w-[100px] bg-sky-600 text-white font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow hover:bg-sky-500 transition text-xs sm:text-sm">
            View All Companies
          </button>
        </div>

      </header>


      <!-- Page Content -->
      <main class="flex-1 p-4 overflow-y-auto lg:ml-0">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props: ["username"],
  data() {
    return {
      sidebarOpen: false,
      activeMenu: "",
      username: "",
      role: "Director",
      isLargeScreen: window.innerWidth >= 1024,
      menuItems: [
        { id: "dashboard", label: "Dashboard Stats", icon: "bi bi-grid" },
        { id: "registrations", label: "BO Registration", icon: "bi bi-people" },
        { id: "company", label: "Company Information", icon: "bi bi-building" },
        { id: "reg_auth_person", label: "Register Authorized Person", icon: "bi bi-person-badge" },
        { id: "form_06", label: "Reporting Details", icon: "bi bi-journal-text" },
        { id: "form_01", label: "Registration Form", icon: "bi bi-file-earmark-plus" },
        { id: "company_list", label: "Company List", icon: "bi bi-list" },
      ],
    };
  },
  computed: {
    pageTitle() {
      const routeName = this.$route.name;
      if (routeName === "BeneficialOwners") return "Beneficial Owners Registration";

      const active = this.menuItems.find((item) => item.id === this.activeMenu);
      return active ? active.label : "Dashboard";
    },
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    setActive(menu) {
      this.activeMenu = menu;
    },
    getMenuRoute(id) {
      const username = this.username || this.$route.params.username || "demoUser";
      switch (id) {
        case "dashboard":
          return `/dashboard_bo/${username}`;
        case "registrations":
          return `/dashboard_bo/${username}/form_01`;
        case "company":
          return `/dashboard_bo/${username}/company-view`;
        case "reg_auth_person":
          return `/dashboard_bo/${username}/register-authorized-person`;
        case "form_06":
          return `/dashboard_bo/${username}/form_06`;
        case "form_01":
          return `/dashboard_bo/${username}/registration`;
        case "company_list":
          return `/dashboard_bo/${username}/company-list`;
        default:
          return `/dashboard_bo/${username}`;
      }
    },
    handleLogout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
    handleResize() {
      this.isLargeScreen = window.innerWidth >= 1024;
      if (this.isLargeScreen) this.sidebarOpen = false;
    },
  },
  mounted() {
    const storedName = localStorage.getItem("loggedInUser");
    this.username = storedName ? storedName : "User";

    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  overflow: hidden;
  /* prevent body scroll */
}

.router-link-active {
  background-color: #150b81;
  color: #fff !important;
}
aside {
  background-color: #08045b; /* Deep Blue */
  
}
header {
  background: linear-gradient(to right, #08045b, #2c1b99, #623be1);
}
</style>
