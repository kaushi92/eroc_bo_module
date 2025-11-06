<template>
  <div class="p-6 pt-4 max-w-7xl mx-auto">

    <!-- Header -->
    <div class="mb-8 text-center relative">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl opacity-100 -z-10"></div>
      <h1 class="text-lg pb-2 font-bold text-gray-800 py-4">
        Business Registration Portal
      </h1>
      <p class="text-gray-600 max-w-2xl pb-4 mx-auto">
        Manage your company registrations and compliance requirements in one place
      </p>
    </div>

    <!-- ✅ Cards Section (Flex-based for centering last row) -->
    <div class="flex flex-wrap justify-center gap-8 mb-8">

      <!-- Beneficial Ownership Card -->
      <div @click="goToBeneficialOwnership"
        class="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden w-full sm:w-[46%] lg:w-[31%] max-w-lg min-w-[300px]">
        <img src="https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
          alt="Beneficial Ownership" class="w-full h-60 object-cover" />
        <div class="card-content">
          <h2 class="card-title">Beneficial Ownership</h2>
          <p class="card-text">
            Register and manage beneficial ownership of companies.
          </p>
        </div>
      </div>

      <!-- Card 2 -->
      <div @click="goToUnderConstruction"
        class="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden w-full sm:w-[46%] lg:w-[31%] max-w-lg min-w-[300px]">
        <img src="https://images.unsplash.com/photo-1472148439583-1f4cf81b80e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331"
          alt="Portcity Module" class="w-full h-60 object-cover" />
        <div class="card-content">
          <h2 class="card-title">Portcity Module</h2>
          <p class="card-text">
            Manage business operations related to Port City projects.
          </p>
        </div>
      </div>

      <!-- Card 3 -->
      <div @click="goToUnderConstruction"
        class="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden w-full sm:w-[46%] lg:w-[31%] max-w-lg min-w-[300px]">
        <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172"
          alt="Secretary Registration" class="w-full h-60 object-cover" />
        <div class="card-content">
          <h2 class="card-title">Secretary Registration</h2>
          <p class="card-text">
            Register and manage company secretaries and records.
          </p>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-lg shadow p-6">
      <div v-if="selected === 'portcity'">
        <h2 class="text-xl font-semibold mb-2">Portcity Module</h2>
        <p class="text-gray-700">
          Manage business operations and registrations related to Port City projects seamlessly.
        </p>
      </div>

      <div v-else-if="selected === 'secretary'">
        <h2 class="text-xl font-semibold mb-2">Secretary Registration</h2>
        <p class="text-gray-700">
          Register and manage company secretaries, ensuring accurate and up-to-date records.
        </p>
      </div>

      <div v-else>
        <p class="text-gray-500 text-center">
          Select a card above to view its details.
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      username: localStorage.getItem('username') || 'User', // retrieve saved login username
      selected: null
    };
  },
  methods: {
    goToBeneficialOwnership() {
      this.$router.push(`/dashboard_bo/${this.username}`);
    },
    goToUnderConstruction() {
      this.$router.push("/under-construction");
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-family: "Poppins", sans-serif;
}

.cursor-pointer:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}

/* Card content styling */
.card-content {
  padding: 1.5rem;
  text-align: center;
}

.card-title {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #1f2937;
}

.card-text {
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #4b5563;
  margin: 0;
  line-height: 1.5;
}
</style>
