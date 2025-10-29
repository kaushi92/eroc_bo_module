<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 p-6">
    <div
      class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-7 transform transition duration-700 ease-out animate-fadeIn">

      <!-- Step Indicator -->
      <div class="flex items-center justify-center mb-8 opacity-0 animate-fadeIn delay-100 text-xs sm:text-sm">
        <span
          class="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-600 text-white font-medium text-xs">1</span>
        <span class="ml-3 text-gray-500 font-medium">Complete Your Profile</span>
      </div>

      <!-- Heading -->
      <div class="text-center mb-8 opacity-0 animate-fadeIn delay-200">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">
          Authorized Person Details
        </h2>
        <p class="text-gray-500 text-xs sm:text-sm">
          Please complete your profile to access the system.
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="submitDetails" class="space-y-3 opacity-0 animate-fadeIn delay-300">

        <!-- Full Name -->
        <div class="relative">
          <span class="absolute left-3 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" />
            </svg>
          </span>
          <input v-model="form.fullName" type="text" required placeholder="Full Name"
            class="w-full px-8 py-2 border rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs sm:text-sm transition" />
        </div>

        <!-- Designation -->
        <div class="relative">
          <span class="absolute left-3 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 10-8 0 4 4 0 008 0zM12 14v7" />
            </svg>
          </span>
          <input v-model="form.designation" type="text" required placeholder="Designation"
            class="w-full px-8 py-2 border rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs sm:text-sm transition" />
        </div>

        <!-- Email -->
        <div class="relative">
          <span class="absolute left-3 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m0 0l4 4m-4-4l4-4" />
            </svg>
          </span>
          <input v-model="form.email" type="email" required placeholder="Email"
            class="w-full px-8 py-2 border rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs sm:text-sm transition" />
        </div>

        <!-- Telephone & Mobile -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="relative">
            <span class="absolute left-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 12h18M3 19h18" />
              </svg>
            </span>
            <input v-model="form.telephone" type="text" placeholder="Telephone"
              class="w-full px-8 py-2 border rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs sm:text-sm transition" />
          </div>
          <div class="relative">
            <span class="absolute left-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14" />
              </svg>
            </span>
            <input v-model="form.mobile" type="text" required placeholder="Mobile"
              class="w-full px-8 py-2 border rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs sm:text-sm transition" />
          </div>
        </div>

        <!-- Address -->
        <div class="relative">
          <span class="absolute left-3 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </span>
          <textarea v-model="form.address" required rows="3" placeholder="Address"
            class="w-full px-8 py-2 border rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs sm:text-sm transition"></textarea>
        </div>

        <!-- Submit Button -->
        <button type="submit"
          class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-transform transform hover:-translate-y-1 text-xs sm:text-sm">
          Submit Details
        </button>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fullName: '',
        designation: '',
        email: '',
        telephone: '',
        mobile: '',
        address: '',
      },
    };
  },
  methods: {
    submitDetails() {
      console.log('Authorized person details submitted:', this.form);
      const username = this.form.fullName.replace(/\s+/g, '_'); // e.g., convert "John Doe" → "John_Doe"
      const designation = this.form.designation.replace(/\s+/g, '_');
      // this.$router.push(`/dashboard_bo/${username}`);
      this.$router.push(`/dashboard_bo/${username}?designation=${designation}`);
    },
  },
};
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

/* Animation */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}
</style>
