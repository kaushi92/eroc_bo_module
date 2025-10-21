<template>
  <div class="flex h-screen bg-gray-50 font-poppins overflow-hidden">
    <aside
      :class="['bg-white border-r border-gray-200 flex flex-col transition-all duration-300', sidebarOpen ? 'w-64' : 'w-20']">
      <!-- Sidebar header and toggle button -->
      <div class="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <img src="/src/assets/img/Logo_gov.png" alt="Logo" class="h-12 w-9" />
        <span v-if="sidebarOpen" class="text-lg font-semibold text-gray-800">eROC BO</span>

        <button @click="toggleSidebar" class="text-gray-500 hover:text-gray-700"><i
            class="bi bi-list text-xl"></i></button>
      </div>

      <!-- Sidebar menu -->
      <nav class="flex-1 mt-4 space-y-1">
        <router-link v-for="item in menuItems" :key="item.id" :to="getMenuRoute(item.id)"
          class="flex items-center gap-3 w-full px-4 py-2.5 text-gray-700 rounded-lg transition" :class="{
            'bg-indigo-500 text-white font-medium': activeMenu === item.id,
            'hover:bg-indigo-100 hover:text-indigo-700': activeMenu !== item.id
          }" @click="setActive(item.id)">
          <i :class="item.icon + ' text-lg'"></i>
          <span v-if="sidebarOpen">{{ item.label }}</span>
        </router-link>
      </nav>

      <!-- Logout -->
      <div class="mt-auto border-t border-gray-200 px-4 py-3">
        <button @click="handleLogout"
          class="flex items-center gap-3 w-full px-4 py-2.5 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200">
          <i class="bi bi-box-arrow-right text-lg"></i>
          <span v-if="sidebarOpen" class="font-medium">Logout</span>
        </button>
      </div>

    </aside>

    <main class="flex-1 flex flex-col overflow-y-auto">
      <header
        class="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <!-- Page Title -->
        <h2 class="text-xl font-semibold text-gray-800">
          Beneficiary Ownership Registration
        </h2>

        <!-- Right Section: Search + User Info -->
        <div class="flex items-center gap-4">
          <!-- Search Box -->
          <input type="text" placeholder="Search..."
            class="hidden md:block border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300" />

          <!-- User Info -->
          <div class="flex items-center gap-2">
            <!-- Username + Role -->
            <div class="text-right hidden md:block">
              <p class="text-sm font-medium text-gray-700">{{ displayUsername }}</p>
              <!-- <p class="text-xs text-gray-500">ICT Officer</p> -->
            </div>
            <!-- Avatar -->
            <div
              class="header-avatar bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold rounded-full w-10 h-10">
              {{ avatarInitials }}
            </div>
          </div>
        </div>
      </header>


      <!-- Main content area -->
      <section class="p-6 flex-1">
        <router-view></router-view> <!-- child route will render here -->
      </section>
    </main>
  </div>
</template>

<script>
export default {
  props: ['username'],
  data() {
    return {
      sidebarOpen: true,
      activeMenu: "dashboard",
      menuItems: [
        { id: "dashboard", label: "Dashboard Stats", icon: "bi bi-grid", route: "/dashboard_bo" },
        { id: "registrations", label: "BO Registration", icon: "bi bi-people", route: "/dashboard_bo/form_01" },
      ],
    };
  },
  computed: {
    activeMenuLabel() {
      const active = this.menuItems.find(item => item.id === this.activeMenu);
      return active ? active.label : "";
    },
    displayUsername() {
      return this.username || this.$route.params.username || 'User';
    },
    avatarInitials() {
      const words = this.displayUsername.trim().split(' ');
      if (words.length === 1) {
        return words[0].charAt(0).toUpperCase();
      }
      return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
    }
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
        default:
          return "#";
      }
    },
    handleLogout() {
      // Clear session/localStorage if needed
      localStorage.clear();
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>
