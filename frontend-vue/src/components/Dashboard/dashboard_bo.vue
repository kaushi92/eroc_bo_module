<template>
  <div class="flex h-screen font-poppins bg-gray-50 overflow-hidden m-0 p-0">
    <!-- Sidebar -->
    <aside :class="[
      'fixed lg:static inset-y-0 left-0 z-20 bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out',
      sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0 lg:w-64'
    ]">
      <!-- Sidebar header -->
      <div class="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <div class="flex items-center gap-3">
          <img src="/src/assets/img/Logo_gov.png" alt="Logo" class="h-12 w-9" />
          <span v-if="sidebarOpen || isLargeScreen" class="text-lg font-semibold text-gray-800">eROC BO</span>
        </div>
        <!-- Close button for mobile -->
        <button @click="toggleSidebar" class="text-gray-500 hover:text-gray-700 lg:hidden">
          <i class="bi bi-x-lg text-xl"></i>
        </button>
      </div>

      <!-- Sidebar menu -->
      <nav class="flex-1 overflow-y-auto mt-2 space-y-1">
        <router-link v-for="item in menuItems" :key="item.id" :to="getMenuRoute(item.id)"
          class="flex items-center gap-3 w-full px-4 py-2.5 text-gray-700 rounded-lg transition" :class="{
            'bg-indigo-500 text-white font-medium': activeMenu === item.id,
            'hover:bg-indigo-100 hover:text-indigo-700': activeMenu !== item.id
          }" @click="setActive(item.id)">
          <i :class="item.icon + ' text-lg'"></i>
          <span v-if="sidebarOpen || isLargeScreen" class="truncate">{{ item.label }}</span>
        </router-link>
      </nav>

      <!-- Logout -->
      <div class="mt-auto border-t border-gray-200 px-4 py-3">
        <button @click="handleLogout"
          class="flex items-center gap-3 w-full px-4 py-2.5 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200">
          <i class="bi bi-box-arrow-right text-lg"></i>
          <span v-if="sidebarOpen || isLargeScreen" class="font-medium">Logout</span>
        </button>
      </div>
    </aside>

    <!-- Overlay (mobile only) -->
    <div v-if="sidebarOpen && !isLargeScreen" @click="toggleSidebar"
      class="fixed inset-0 bg-black opacity-30 z-10 lg:hidden"></div>

    <!-- Main content -->
    <main class="flex flex-col flex-1 min-h-0">
      <!-- Header -->
      <header
        class="flex-shrink-0 bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex items-center justify-between shadow-sm">
        <div class="flex items-center gap-3">
          <!-- Hamburger toggle (only visible on small screens) -->
          <button @click="toggleSidebar" class="text-gray-600 lg:hidden">
            <i class="bi bi-list text-2xl"></i>
          </button>
          <h2 class="text-lg md:text-xl font-semibold text-gray-800">{{ pageTitle }}</h2>
        </div>

        <!-- Right Section -->
        <div class="flex items-center gap-4">
          <input type="text" placeholder="Search..."
            class="hidden md:block border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300" />
          <div class="flex items-center gap-2">
            <div class="text-right hidden md:block">
              <p class="text-sm font-medium text-gray-700">{{ displayUsername }}</p>
              <p class="text-xs text-gray-500">{{ displayDesignation }}</p>
            </div>
            <div
              class="header-avatar bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold rounded-full w-10 h-10">
              {{ avatarInitials }}
            </div>
          </div>
        </div>
      </header>

      <!-- Router Content -->
      <section class="flex-1 overflow-y-auto px-4 md:px-6 py-0">
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  props: ["username"],
  data() {
    return {
      sidebarOpen: false,
      activeMenu: "dashboard",
      isLargeScreen: window.innerWidth >= 1024, // Track screen size (lg breakpoint)
      menuItems: [
        { id: "dashboard", label: "Dashboard Stats", icon: "bi bi-grid", route: "/dashboard_bo" },
        { id: "registrations", label: "BO Registration", icon: "bi bi-people", route: "/dashboard_bo/form_01" },
        { id: "company", label: "Company Information", icon: "bi bi-building", route: "/dashboard_bo/company-view" },
        { id: "reg_auth_person", label: "Register Authorized Person", icon: "bi bi-person-badge", route: "/dashboard_bo/register-authorized-person" },
        { id: "form_06", label: "Reporting, Receiving Details", icon: "bi bi-person-badge", route: "/dashboard_bo/form_06" },
        { id: "form_01", label: "Registration", icon: "bi bi-person-badge", route: "/dashboard_bo/incorporation" },
      ],
    };
  },
  computed: {
    pageTitle() {
      // Check the current route name first
      const routeName = this.$route.name;

      if (routeName === "BeneficialOwners") {
        return "Beneficial Owners Registration";
      }

      const active = this.menuItems.find((item) => item.id === this.activeMenu);
      return active ? active.label : "Dashboard";
    },
    displayUsername() {
      return this.username || this.$route.params.username || "User";
    },
    displayDesignation() {
      return this.$route.query.designation
        ? this.$route.query.designation.replace(/_/g, " ")
        : "";
    },
    avatarInitials() {
      const words = this.displayUsername.trim().split(" ");
      if (words.length === 1) return words[0].charAt(0).toUpperCase();
      return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
    },
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    setActive(menu) {
      this.activeMenu = menu;
      localStorage.setItem("activeMenu", menu);
    },
    getMenuRoute(id) {
      const username = this.username || this.$route.params.username;
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
        default:
          return "#";
      }
    },
    handleLogout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
    handleResize() {
      this.isLargeScreen = window.innerWidth >= 1024;
      if (this.isLargeScreen) this.sidebarOpen = false; // reset state for large screens
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);

    // detect active menu based on route path
    const path = this.$route.path;

    if (path.includes("company-view")) {
      this.activeMenu = "company";
    } else if (path.includes("form_01")) {
      this.activeMenu = "registrations";
    } else {
      this.activeMenu = "dashboard";
    }

    localStorage.setItem("activeMenu", this.activeMenu);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
