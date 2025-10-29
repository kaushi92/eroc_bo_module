<template>
  <div class="min-h-screen bg-gray-50 p-6 sm:p-8">
    <div class="max-w-5xl mx-auto space-y-6">

      <!-- Profile Card -->
      <div class="bg-white shadow-lg rounded-2xl p-6 sm:p-8">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Authorized Person Profile</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
          <div><span class="font-medium">Full Name:</span> {{ profile.fullName }}</div>
          <div><span class="font-medium">Designation:</span> {{ profile.designation }}</div>
          <div><span class="font-medium">Email:</span> {{ profile.email }}</div>
          <div><span class="font-medium">Mobile:</span> {{ profile.mobile }}</div>
          <div class="sm:col-span-2"><span class="font-medium">Address:</span> {{ profile.address }}</div>
        </div>
      </div>

      <!-- Companies Section -->
      <div class="bg-white shadow-lg rounded-2xl p-6 sm:p-8">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl sm:text-2xl font-semibold text-gray-800">Your Companies</h2>
          <button @click="openModal = true"
                  class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md text-sm sm:text-base">
            + Add Company
          </button>
        </div>

        <!-- Companies Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm sm:text-base">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-4 py-2">Company Name</th>
                <th class="px-4 py-2">Reg. Number</th>
                <th class="px-4 py-2">Address</th>
                <th class="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(company, index) in companies" :key="index" class="border-b hover:bg-gray-50">
                <td class="px-4 py-2">{{ company.name }}</td>
                <td class="px-4 py-2">{{ company.regNumber }}</td>
                <td class="px-4 py-2">{{ company.address }}</td>
                <td class="px-4 py-2 text-center">
                  <button @click="editCompany(index)" class="text-indigo-600 hover:underline mr-2">Edit</button>
                  <button @click="deleteCompany(index)" class="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
              <tr v-if="companies.length === 0">
                <td colspan="4" class="px-4 py-4 text-center text-gray-500">No companies added yet.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Add/Edit Company Modal -->
      <div v-if="openModal" class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div class="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 sm:p-8 relative">
          <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            {{ editIndex !== null ? 'Edit Company' : 'Add Company' }}
          </h3>
          <form @submit.prevent="submitCompany" class="space-y-3">

            <input v-model="companyForm.name" type="text" placeholder="Company Name" required
                   class="w-full px-3 py-2 border rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition" />

            <input v-model="companyForm.regNumber" type="text" placeholder="Registration Number" required
                   class="w-full px-3 py-2 border rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition" />

            <textarea v-model="companyForm.address" rows="2" placeholder="Address" required
                      class="w-full px-3 py-2 border rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition"></textarea>

            <div class="flex justify-end space-x-2 mt-2">
              <button type="button" @click="closeModal"
                      class="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg text-sm">Cancel</button>
              <button type="submit"
                      class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm">
                {{ editIndex !== null ? 'Update' : 'Add' }}
              </button>
            </div>
          </form>

          <button @click="closeModal"
                  class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-lg">&times;</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        fullName: 'John Doe',
        designation: 'Manager',
        email: 'john@example.com',
        mobile: '0712345678',
        address: '123 Main Street, City'
      },
      companies: [],
      openModal: false,
      editIndex: null,
      companyForm: {
        name: '',
        regNumber: '',
        address: ''
      }
    };
  },
  methods: {
    submitCompany() {
      if (this.editIndex !== null) {
        this.companies[this.editIndex] = { ...this.companyForm };
      } else {
        this.companies.push({ ...this.companyForm });
      }
      this.closeModal();
    },
    editCompany(index) {
      this.editIndex = index;
      this.companyForm = { ...this.companies[index] };
      this.openModal = true;
    },
    deleteCompany(index) {
      if (confirm('Are you sure you want to delete this company?')) {
        this.companies.splice(index, 1);
      }
    },
    closeModal() {
      this.openModal = false;
      this.editIndex = null;
      this.companyForm = { name: '', regNumber: '', address: '' };
    }
  }
};
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}
</style>
