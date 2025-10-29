<template>
  <section class="bg-gray-50 min-h-screen pt-6">
    <div class="max-w-8xl mx-auto space-y-8">
      
      <!-- Header -->
      <header class="text-center mb-10 mt-4">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">
          <i class="bi bi-person-badge text-indigo-600 text-2xl"></i>
          AUTHORIZED PERSON
        </h1>
        <p class="text-[16px] font-semibold text-[#4f46e5] mb-2">
          Register authorized person for Beneficial Ownership management
        </p>
      </header>

      <!-- 🏢 Company Information -->
      <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8">
        <h2 class="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <i class="bi bi-building text-indigo-500"></i>
          Company Information
        </h2>

        <form @submit.prevent="handleSubmit" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-3">Number of the Company</label>
            <input v-model="form.companyNumber" type="text" required placeholder="Enter company number" class="input-field" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-3">Name of the Company</label>
            <input v-model="form.companyName" type="text" required placeholder="Enter company name" class="input-field" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-3">Type of the Company</label>
            <select v-model="form.companyType" required class="input-field">
              <option disabled value="">Select type</option>
              <option value="Private">Private Limited</option>
              <option value="Public">Public Limited</option>
              <option value="Guarantee">Company Limited by Guarantee</option>
            </select>
          </div>
        </form>
      </div>

<div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8">
  <h2 class="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
    <i class="bi bi-person-circle text-indigo-500"></i>
    Authorized Person Information
  </h2>

  <form @submit.prevent="handleSubmit" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    <!-- Disclosure Type -->
    <div class="sm:col-span-2 lg:col-span-3">
      <label class="block text-sm font-medium text-gray-600 mb-3">Disclosure Type</label>
      <div class="flex flex-wrap gap-6 text-gray-700 text-sm">
        <label class="flex items-center gap-2">
          <input type="radio" v-model="form.disclosureType" value="Registered" class="text-indigo-600" />
          Company Registered under Companies Act No. 7 of 2007
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" v-model="form.disclosureType" value="Incorporation" class="text-indigo-600" />
          At the time of incorporation
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" v-model="form.disclosureType" value="Change" class="text-indigo-600" />
          Any subsequent changes
        </label>
      </div>
    </div>

    <!-- Title -->
    <div>
      <label class="block text-sm font-medium text-gray-600 mb-3">Title</label>
      <select v-model="form.title" required class="input-field">
        <option disabled value="">Select title</option>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Ms">Ms</option>
        <option value="Dr">Dr</option>
        <option value="Prof">Prof</option>
      </select>
    </div>

    <!-- Gender -->
    <div>
      <label class="block text-sm font-medium text-gray-600 mb-3">Gender</label>
      <div class="flex gap-6 text-gray-700 text-sm">
        <label class="flex items-center gap-2">
          <input type="radio" v-model="form.gender" value="Male" class="text-indigo-600" />
          Male
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" v-model="form.gender" value="Female" class="text-indigo-600" />
          Female
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" v-model="form.gender" value="Other" class="text-indigo-600" />
          Other
        </label>
      </div>
    </div>

    <!-- Full Name -->
    <div>
      <label class="block text-sm font-medium text-gray-600 mb-3">Full Name</label>
      <input v-model="form.fullName" type="text" placeholder="As per NIC / Passport" class="input-field" />
    </div>

    <!-- NIC / Passport -->
    <div>
      <label class="block text-sm font-medium text-gray-600 mb-3">NIC / Passport No. & Country</label>
      <input v-model="form.nicPassport" type="text" placeholder="Enter NIC or Passport number" class="input-field" />
    </div>

    <!-- Nationality -->
    <div>
      <label class="block text-sm font-medium text-gray-600 mb-3">Nationality</label>
      <input v-model="form.nationality" type="text" placeholder="Enter nationality" class="input-field" />
    </div>

    <!-- Residential Address -->
    <div class="sm:col-span-2 lg:col-span-3">
      <label class="block text-sm font-medium text-gray-600 mb-3">Residential Address</label>
      <input v-model="form.residentialAddress" type="text" placeholder="Enter residential address" class="input-field" />
    </div>

    <!-- Business Address -->
    <div class="sm:col-span-2 lg:col-span-3">
      <label class="block text-sm font-medium text-gray-600 mb-3">Business Address</label>
      <input v-model="form.businessAddress" type="text" placeholder="Enter business address" class="input-field" />
    </div>

    <!-- Telephone -->
    <div>
      <label class="block text-sm font-medium text-gray-600 mb-3">Telephone</label>
      <input v-model="form.telephone" type="text" placeholder="Enter telephone number" class="input-field" />
    </div>

    <!-- Mobile -->
    <div>
      <label class="block text-sm font-medium text-gray-600 mb-3">Mobile</label>
      <input v-model="form.mobile" type="text" placeholder="Enter mobile number" class="input-field" />
    </div>

    <!-- Email -->
    <div>
      <label class="block text-sm font-medium text-gray-600 mb-3">Email</label>
      <input v-model="form.email" type="email" placeholder="Enter email address" class="input-field" />
    </div>

    <!-- Date of Appointment -->
    <div>
      <label class="block text-sm font-medium text-gray-600 mb-3">Date of Appointment</label>
      <input v-model="form.dateOfAppointment" type="date" class="input-field" />
    </div>

    <!-- Submit Button -->
    <div class="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-end mt-6">
      <button type="submit" class="btn-add-owner flex items-center gap-2">
        <i class="bi bi-save"></i>
        Submit Form
      </button>
    </div>

  </form>
</div>
    </div>
  </section>
</template>

<script setup>

import { reactive } from "vue";

const form = reactive({
  companyNumber: "",
  companyName: "",
  companyType: "",
  disclosureType: "Registered",
  title: "",            // new field
  fullName: "",
  gender: "",           // new field
  nicPassport: "",
  nationality: "",
  residentialAddress: "",
  businessAddress: "",
  telephone: "",
  mobile: "",
  email: "",
  dateOfAppointment: "",
});

const handleSubmit = () => {
  console.log("Form submitted ✅", form);
  alert("Authorized Person details submitted successfully!");
};
</script>

<style scoped>
.input-field {
  width: 100%;
  padding: 0.3rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  font-size: 0.95rem;
  transition: all 0.2s;
}
.input-field:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 1px #3b82f6;
}
.btn-add-owner {
  background: linear-gradient(to right, #4f46e5, #6366f1);
  color: white;
  font-weight: 500;
  padding: 0.5rem 1.4rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 3px 6px rgba(99, 102, 241, 0.2);
  font-size: 15px;
}
.btn-add-owner:hover {
  background: linear-gradient(to right, #4338ca, #4f46e5);
  box-shadow: 0 4px 8px rgba(99, 102, 241, 0.3);
}
</style>
