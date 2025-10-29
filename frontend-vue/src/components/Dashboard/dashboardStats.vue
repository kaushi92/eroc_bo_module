<template>
  <div class="pt-6 space-y-8">
    <!-- Quick Actions -->
    <div class="flex justify-end gap-3">
      <button
        class="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-1">
        <i class="bi bi-plus-lg"></i> New Registration
      </button>
      <button
        class="border border-indigo-600 text-indigo-600 text-sm px-4 py-2 rounded-lg hover:bg-indigo-50 flex items-center gap-1">
        <i class="bi bi-download"></i> Export Report
      </button>
    </div>

    <!-- Stat Cards -->
    <div class="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
      <div v-for="card in statCards" :key="card.label" class="bg-white rounded-2xl shadow p-5">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-gray-600 text-sm font-medium">{{ card.label }}</h3>
          <i :class="card.icon"></i>
        </div>
        <p class="text-3xl font-bold text-indigo-600">{{ card.value }}</p>
        <p class="text-xs text-gray-500 mt-1">{{ card.subtext }}</p>
      </div>
    </div>

    <!-- Trends Chart -->
    <div class="bg-white rounded-2xl shadow p-5">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Registration Trends (Last 6 Months)</h3>
      <canvas id="registrationsChart" height="100"></canvas>
    </div>

    <!-- Recent Registrations Table -->
    <div class="bg-white rounded-2xl shadow p-5">
      <div class="flex justify-between items-center mb-6 mt-2">
        <h3 class="text-lg font-semibold text-gray-800">Recent Registrations</h3>
        <button
          class="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-indigo-700 rounded-lg hover:text-indigo-800 cursor-pointer">
          View All
          <i class="bi bi-arrow-right-short text-base"></i>
        </button>
      </div>
      <div class="overflow-x-auto rounded-lg">
        <table class="min-w-full text-sm border-collapse rounded-lg">
          <thead class="bg-indigo-100 text-indigo-800 uppercase text-xs font-semibold tracking-wider">
            <tr>
              <th class="text-left px-4 py-3">Company Name</th>
              <th class="text-left px-4 py-3">Reg. No</th>
              <th class="text-left px-4 py-3">Owner</th>
              <th class="text-left px-4 py-3">Date</th>
              <th class="text-center px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in recentRegistrations" :key="row.id"
              class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td class="px-4 py-3 font-medium text-gray-800">{{ row.company }}</td>
              <td class="px-4 py-3 text-gray-600">{{ row.regNo }}</td>
              <td class="px-4 py-3 text-gray-600">{{ row.owner }}</td>
              <td class="px-4 py-3 text-gray-600">{{ row.date }}</td>
              <td class="px-4 py-3 text-center">
                <span
                  class="inline-flex justify-center items-center w-24 py-1.5 text-xs font-semibold rounded-full uppercase"
                  :class="{
                    'bg-green-100 text-green-700': row.status === 'Approved',
                    'bg-yellow-100 text-yellow-700': row.status === 'Pending',
                    'bg-red-100 text-red-700': row.status === 'Rejected'
                  }">
                  {{ row.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Recent Activities -->
    <div class="bg-white rounded-2xl shadow p-5">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
      <ul class="space-y-4">
        <li v-for="activity in activities" :key="activity.id" class="flex items-start">
          <i :class="activity.icon + ' text-indigo-600 mr-3 text-lg'"></i>
          <div>
            <p class="text-gray-800 text-sm font-medium">{{ activity.text }}</p>
            <p class="text-xs text-gray-500">{{ activity.time }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      statCards: [
        { label: "Total Companies", value: 245, icon: "bi bi-building-fill text-indigo-600", subtext: "Active in system" },
        { label: "Beneficial Owners", value: 1320, icon: "bi bi-person-badge-fill text-indigo-600", subtext: "Registered entities" },
        { label: "Pending Approvals", value: 12, icon: "bi bi-hourglass-split text-indigo-600", subtext: "Awaiting verification" },
        { label: "Rejected Forms", value: 5, icon: "bi bi-x-circle-fill text-red-500", subtext: "Need correction" },
        { label: "Monthly Registrations", value: 58, icon: "bi bi-calendar-check text-indigo-600", subtext: "This month" },
        { label: "Positive Feedback", value: "92%", icon: "bi bi-emoji-smile text-green-500", subtext: "User satisfaction" },
      ],
      recentRegistrations: [
        { id: 1, company: "Alpha Holdings (Pvt) Ltd", regNo: "BO/2025/001", owner: "John Doe", date: "2025-10-12", status: "Approved" },
        { id: 2, company: "GreenEnergy Lanka", regNo: "BO/2025/002", owner: "Kavindu Perera", date: "2025-10-14", status: "Pending" },
        { id: 3, company: "Techwave Solutions", regNo: "BO/2025/003", owner: "Nimali Silva", date: "2025-10-15", status: "Approved" },
        { id: 4, company: "OceanTrade Imports", regNo: "BO/2025/004", owner: "Amal Fernando", date: "2025-10-16", status: "Rejected" },
      ],
      activities: [
        { id: 1, text: "BO/2025/004 rejected by verification team", time: "2 hours ago", icon: "bi bi-x-circle" },
        { id: 2, text: "New company registered: OceanTrade Imports", time: "5 hours ago", icon: "bi bi-building" },
        { id: 3, text: "BO details updated for GreenEnergy Lanka", time: "Yesterday", icon: "bi bi-pencil-square" },
        { id: 4, text: "Officer Priyan logged in", time: "2 days ago", icon: "bi bi-person-check" },
      ],
    };
  },
  mounted() {
    const ctx = document.getElementById("registrationsChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: [
          {
            label: "Registrations",
            data: [30, 45, 60, 48, 75, 58],
            borderColor: "#4f46e5",
            backgroundColor: "rgba(79,70,229,0.1)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } },
      },
    });
  },
};
</script>

<style scoped>
canvas {
  width: 100% !important;
}
</style>
