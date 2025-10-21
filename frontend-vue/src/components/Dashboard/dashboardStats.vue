<template>
  <div>
    <!-- Stat Cards -->
    <div class="grid gap-6 md:grid-cols-3">
      <div v-for="card in statCards" :key="card.label" class="bg-white rounded-2xl shadow p-5">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-gray-600 text-sm font-medium">{{ card.label }}</h3>
          <i :class="card.icon"></i>
        </div>
        <p class="text-3xl font-bold text-indigo-600">{{ card.value }}</p>
        <p class="text-xs text-gray-500 mt-1">{{ card.subtext }}</p>
      </div>
    </div>

    <!-- Recent Registrations Table -->
    <div class="bg-white rounded-2xl shadow p-5 mt-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold text-gray-800">Recent Registrations</h3>
        <button class="text-sm text-indigo-600 hover:underline">View All</button>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm border-collapse">
          <thead class="bg-gray-100 sticky top-0">
            <tr class="text-gray-600 uppercase text-xs font-medium">
              <th class="text-left px-4 py-3">Company Name</th>
              <th class="text-left px-4 py-3">Reg. No</th>
              <th class="text-left px-4 py-3">Owner</th>
              <th class="text-left px-4 py-3">Date</th>
              <th class="text-right px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in recentRegistrations" :key="row.id" class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td class="px-4 py-3 font-medium text-gray-800">{{ row.company }}</td>
              <td class="px-4 py-3 text-gray-600">{{ row.regNo }}</td>
              <td class="px-4 py-3 text-gray-600">{{ row.owner }}</td>
              <td class="px-4 py-3 text-gray-600">{{ row.date }}</td>
              <td class="px-4 py-3 text-right">
                <span
                  class="inline-flex justify-center items-center w-24 py-1.5 text-xs font-semibold rounded-full uppercase"
                  :class="{
                    'bg-green-100 text-green-700': row.status === 'Approved',
                    'bg-yellow-100 text-yellow-700': row.status === 'Pending',
                    'bg-red-100 text-red-700': row.status === 'Rejected'
                  }"
                >
                  {{ row.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statCards: [
        { label: "Total Companies", value: 245, icon: "bi bi-building", subtext: "Active in system" },
        { label: "Beneficial Owners", value: 1320, icon: "bi bi-person-badge", subtext: "Registered entities" },
        { label: "Pending Approvals", value: 12, icon: "bi bi-hourglass-split", subtext: "Awaiting verification" },
      ],
      recentRegistrations: [
        { id: 1, company: "Alpha Holdings (Pvt) Ltd", regNo: "BO/2025/001", owner: "John Doe", date: "2025-10-12", status: "Approved" },
        { id: 2, company: "GreenEnergy Lanka", regNo: "BO/2025/002", owner: "Kavindu Perera", date: "2025-10-14", status: "Pending" },
        { id: 3, company: "Techwave Solutions", regNo: "BO/2025/003", owner: "Nimali Silva", date: "2025-10-15", status: "Approved" },
        { id: 4, company: "OceanTrade Imports", regNo: "BO/2025/004", owner: "Amal Fernando", date: "2025-10-16", status: "Rejected" },
      ],
    };
  },
};
</script>
