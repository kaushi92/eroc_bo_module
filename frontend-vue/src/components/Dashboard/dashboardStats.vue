<template>
  <div class="min-h-screen flex flex-col bg-gray-50">

    <!-- Main Content -->
    <main class="flex-1 p-6 space-y-8">
      <!-- Stats Section -->
      <section>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="card in stats" :key="card.label" :class="['p-5 rounded-xl shadow hover:shadow-md transition',
            card.label === 'Total Companies' ? 'bg-[#507dbc] text-white font-semibold' :
              card.label === 'Beneficial Owners' ? 'bg-[#a1c6ea] text-[#1a3f5c] font-semibold' :
                card.label === 'Pending BOs' ? 'bg-[#bbd1ea] text-[#1a3f5c] font-semibold' :
                  'bg-[#dae3e5] text-[#1a3f5c] font-semibold']">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-sm opacity-80">{{ card.label }}</p>
                <p class="text-2xl font-semibold mt-1">{{ card.value }}</p>
              </div>
              <div class="text-3xl">
                <i :class="card.icon"></i>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- Main Grid -->
      <div class="grid lg:grid-cols-1 gap-6">
        <!-- Company Cards -->
        <section>
          <h2 class="text-lg font-semibold text-gray-700 mb-4">Your Companies</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div v-for="company in companies" :key="company.approvalNo" class="relative bg-white p-6 sm:p-8 rounded-xl shadow hover:shadow-lg border-t-4 transition
            sm:min-h-[240px] lg:min-h-[280px]" :class="{
              'border-green-500': company.status === 'Active',
              'border-yellow-500': company.status === 'Pending',
              'border-gray-400': company.status === 'Draft'
            }">

              <!-- Status Badge: Positioned Top-Right -->
              <span class="absolute top-4 right-4 text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium" :class="{
                'text-[#2ecc71]': company.status === 'Active',   // bright green
                'text-[#f1c40f]': company.status === 'Pending',  // bright yellow
                'text-[#e74c3c]': company.status === 'Draft'     // bright red
              }">
                {{ company.status }}
              </span>


              <!-- Card Content -->
              <p class="text-base sm:text-sm text-gray-500 mb-2">
                Name Approval No: {{ company.approvalNo }}
              </p>
              <h3 class="text-lg sm:text-xl font-semibold text-gray-800">
                {{ company.name }}
              </h3>
              <p class="text-sm sm:text-base text-gray-600 mb-2">
                {{ company.type }}
              </p>

              <!-- Action Buttons -->
              <div class="mt-12 flex flex-wrap gap-3">
                <button
                  class="flex-1 sm:flex-none min-w-[120px] bg-[#6ea8b5] text-white py-2 sm:py-3 rounded-lg hover:bg-[#5b8b9b] transition">
                  BO Register
                </button>
                <button
                  class="flex-1 sm:flex-none min-w-[120px] bg-[#845ec2] text-white py-2 sm:py-3 rounded-lg hover:bg-[#6f4ca8] transition">
                  Update Info
                </button>
                <button
                  class="flex-1 sm:flex-none min-w-[120px] bg-[#B3AC87] text-white py-2 sm:py-3 rounded-lg hover:bg-[#645c50] transition">
                  View Reports
                </button>
                <button
                  class="flex-1 sm:flex-none min-w-[120px] bg-[#c34a36] text-white py-2 sm:py-3 rounded-lg hover:bg-[#a73828] transition">
                  Other Changes 
                </button>
              </div>

            </div>
          </div>
        </section>

        <!-- Recent Activities and Notifications below -->
        <section class="grid sm:grid-cols-2 gap-6 mt-6">
          <!-- Recent Activities -->
          <div class="bg-white rounded-xl shadow p-5">
            <h2 class="text-lg font-semibold text-gray-700 mb-3">Recent Activities</h2>
            <ul class="space-y-2">
              <li v-for="(activity, i) in activities" :key="i" class="text-sm text-gray-600 flex items-start">
                <span class="text-indigo-500 mt-1 mr-2">•</span>
                <span>{{ activity }}</span>
              </li>
            </ul>
          </div>

          <!-- Notifications -->
          <div class="bg-white rounded-xl shadow p-5">
            <h2 class="text-lg font-semibold text-gray-700 mb-3">Notifications</h2>
            <ul class="space-y-2">
              <li v-for="(note, i) in notifications" :key="i" class="text-sm text-gray-600 flex items-start">
                <span class="text-yellow-500 mt-1 mr-2">
                  <i class="bi bi-bell-fill"></i>
                </span>
                <span>{{ note }}</span>
              </li>
            </ul>
          </div>
        </section>
      </div>

    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 text-center py-3 text-sm mt-auto">
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
h1,
h2,
h3 {
  font-family: 'Poppins', sans-serif;
}
</style>
