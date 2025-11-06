<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Header -->
    <header class="bg-gradient-to-r from-indigo-900 via-indigo-800 to-sky-700 text-white py-4 px-6 shadow">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 class="text-2xl font-semibold">Beneficial Ownership Dashboard</h1>
          <p class="text-sm text-indigo-100 mt-1">
            Welcome back, <span class="font-medium">{{ username }}</span> ({{ role }})
          </p>
        </div>
        <div class="flex gap-3 mt-3 sm:mt-0">
          <button
            class="bg-amber-500 text-white px-4 py-2 rounded-lg shadow hover:bg-amber-600 transition"
          >
            + Register New BO
          </button>
          <button
            class="bg-white text-indigo-800 px-4 py-2 rounded-lg shadow hover:bg-indigo-50 transition"
          >
            View All Companies
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 p-6 space-y-8">
      <!-- Stats Section -->
      <section>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="card in stats"
            :key="card.label"
            class="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
          >
            <div class="flex justify-between items-center">
              <div>
                <p class="text-sm text-gray-500">{{ card.label }}</p>
                <p class="text-2xl font-semibold text-gray-800 mt-1">{{ card.value }}</p>
              </div>
              <div class="text-indigo-600 text-3xl">
                <i :class="card.icon"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Grid -->
      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Company Cards -->
        <section class="lg:col-span-2">
          <h2 class="text-lg font-semibold text-gray-700 mb-4">Your Companies</h2>
          <div
            class="grid sm:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            <div
              v-for="company in companies"
              :key="company.approvalNo"
              class="bg-white p-5 rounded-xl shadow hover:shadow-lg border-t-4 transition"
              :class="{
                'border-green-500': company.status === 'Active',
                'border-yellow-500': company.status === 'Pending',
                'border-gray-400': company.status === 'Draft'
              }"
            >
              <p class="text-xs text-gray-500 mb-1">
                Name Approval No: {{ company.approvalNo }}
              </p>
              <h3 class="text-base font-semibold text-gray-800">
                {{ company.name }}
              </h3>
              <p class="text-sm text-gray-600">
                {{ company.type }}
              </p>

              <span
                class="inline-block mt-2 text-xs px-2 py-1 rounded-full font-medium"
                :class="{
                  'bg-green-100 text-green-700': company.status === 'Active',
                  'bg-yellow-100 text-yellow-700': company.status === 'Pending',
                  'bg-gray-100 text-gray-700': company.status === 'Draft'
                }"
              >
                {{ company.status }}
              </span>

              <div class="mt-4">
                <button
                  class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                  @click="goToRegister(company.approvalNo)"
                >
                  BO Register
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Sidebar -->
        <aside class="space-y-6">
          <!-- Recent Activities -->
          <div class="bg-white rounded-xl shadow p-5">
            <h2 class="text-lg font-semibold text-gray-700 mb-3">Recent Activities</h2>
            <ul class="space-y-2">
              <li
                v-for="(activity, i) in activities"
                :key="i"
                class="text-sm text-gray-600 flex items-start"
              >
                <span class="text-indigo-500 mt-1 mr-2">•</span>
                <span>{{ activity }}</span>
              </li>
            </ul>
          </div>

          <!-- Notifications -->
          <div class="bg-white rounded-xl shadow p-5">
            <h2 class="text-lg font-semibold text-gray-700 mb-3">Notifications</h2>
            <ul class="space-y-2">
              <li
                v-for="(note, i) in notifications"
                :key="i"
                class="text-sm text-gray-600 flex items-start"
              >
                <span class="text-yellow-500 mt-1 mr-2">
                  <i class="bi bi-bell-fill"></i>
                </span>
                <span>{{ note }}</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>

    <!-- Footer -->
    <footer
      class="bg-gray-800 text-gray-300 text-center py-3 text-sm mt-auto"
    >
      © 2025 Department of Registrar of Companies — Beneficial Ownership System
    </footer>
  </div>
</template>

<script>
export default {
  props: ['username'],
  data() {
    return {
      role: 'Secretary',
      stats: [
        { label: 'Total Companies', value: 8, icon: 'bi bi-building' },
        { label: 'Beneficial Owners', value: 26, icon: 'bi bi-people' },
        { label: 'Pending BOs', value: 3, icon: 'bi bi-hourglass-split' },
        { label: 'Completed BOs', value: 23, icon: 'bi bi-check-circle' },
      ],
      companies: [
        { approvalNo: 'NA12345', name: 'Sunrise Holdings (Pvt) Ltd', type: 'Private Limited', status: 'Active' },
        { approvalNo: 'NA67890', name: 'Blue Ocean PLC', type: 'Public Limited', status: 'Pending' },
        { approvalNo: 'NA24680', name: 'GreenTech Innovations', type: 'Private Limited', status: 'Draft' },
        { approvalNo: 'NA11122', name: 'Skyline Properties', type: 'Private Limited', status: 'Active' },
        { approvalNo: 'NA33344', name: 'NextWave Technologies', type: 'Private Limited', status: 'Pending' },
        { approvalNo: 'NA55566', name: 'Oceanic Exports', type: 'Public Limited', status: 'Active' },
      ],
      activities: [
        'Registered BO for GreenTech (Pvt) Ltd - 2 hours ago',
        'Updated company details: Blue Ocean PLC - 1 day ago',
        'Submitted Form 01 for Sunrise Holdings - 3 days ago',
      ],
      notifications: [
        '2 BO forms pending submission',
        '3 companies have incomplete details',
        'New company added recently',
      ],
    };
  },
  methods: {
    goToRegister(approvalNo) {
      this.$router.push(`/dashboard_bo/${this.username}/company-view/${approvalNo}/beneficial-owners`);
    },
  },
};
</script>

<style scoped>
h1, h2, h3 {
  font-family: 'Poppins', sans-serif;
}
</style>
