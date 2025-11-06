<template>
  <section class="min-h-screen bg-gray-50 py-10 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Page Title -->
      <h1 class="text-2xl font-bold text-gray-900 mb-8 text-center">
        My Companies
      </h1>

      <!-- Company Cards Grid -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="company in companies"
          :key="company.id"
          class="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-6 border border-gray-100 flex flex-col justify-between"
        >
          <div>
            <h2 class="text-lg font-semibold text-indigo-700 mb-2">
              {{ company.name }}
            </h2>
            <p class="text-sm text-gray-600 mb-1">
              <span class="font-medium text-gray-800">Name Approval No:</span>
              {{ company.approvalNo }}
            </p>
            <p class="text-sm text-gray-600 mb-4">
              <span class="font-medium text-gray-800">Type of Company:</span>
              {{ company.type }}
            </p>
          </div>

          <div class="mt-4">
            <button
              @click="registerBO(company)"
              class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Register BO
            </button>
          </div>
        </div>
      </div>

      <!-- Message if no companies -->
      <div v-if="companies.length === 0" class="text-center text-gray-500 mt-10">
        No companies found for your profile.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Company_List",
  props: ["username"], // from route param
  data() {
    return {
      companies: [
        {
          id: 1,
          name: "Sunrise Holdings (Pvt) Ltd",
          approvalNo: "NA-2023-4587",
          type: "Private Limited",
        },
        {
          id: 2,
          name: "Blue Ocean Developers PLC",
          approvalNo: "NA-2024-1123",
          type: "Public Limited",
        },
        {
          id: 3,
          name: "GreenTech Innovations",
          approvalNo: "NA-2025-0099",
          type: "Private Limited",
        },
      ],
    };
  },
  methods: {
    registerBO(company) {
      alert(`Redirecting to BO Registration for ${company.name}`);
      // Later, navigate to actual registration route
      // this.$router.push(`/dashboard_bo/${this.username}/company-view/${company.approvalNo}/beneficial-owners`);
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: 'Poppins', sans-serif;
}

button {
  font-weight: 600;
  letter-spacing: 0.3px;
}
</style>
