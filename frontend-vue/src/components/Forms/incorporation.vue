<template>
    <section class="bg-gray-50 min-h-screen pt-6">
        <div class="max-w-8xl mx-auto space-y-8">

            <!-- Header -->
            <header class="text-center mb-10 mt-4">
                <h1 class="text-2xl font-bold text-gray-900 mb-2">
                    <i class="bi bi-person-badge text-indigo-600 text-2xl"></i>
                    FORM BO 01
                </h1>
                <p class="text-[16px] font-semibold text-[#4f46e5] mb-2">
                    Notice of Details of Beneficial Ownership of a Company
                </p>
            </header>

            <!-- 🏢 Company Information -->
            <section class="bg-white rounded-md shadow-sm p-8 space-y-6">
                <h2 class="text-xl font-semibold text-gray-900">🏢 Company Information</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 space-y-2">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Name Approval Number *</label>
                        <input type="text" v-model="form.nameApprovalNumber" required
                            placeholder="Enter name approval number" class="input-field" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Name of the Company *</label>
                        <input type="text" v-model="form.companyName" required placeholder="Enter company name"
                            class="input-field" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Type of the Company *</label>
                        <select v-model="form.companyType" required class="input-field">
                            <option value="">Select company type</option>
                            <option value="private">Private Limited</option>
                            <option value="public">Public Limited</option>
                            <option value="partnership">Partnership</option>
                            <option value="sole">Sole Proprietorship</option>
                        </select>
                    </div>
                </div>
            </section>

            <section class="bg-white rounded-md shadow-sm p-8 space-y-3">
  <h2 class="text-xl font-semibold text-gray-900 mb-6">
    👤 Beneficial Owner Details
  </h2>

  <!-- Row 1: Full Name + Previous Full Name -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
      <input
        type="text"
        v-model="form.fullName"
        required
        class="input-field"
        placeholder="Full name as per NIC or Passport"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Previous Full Name</label>
      <input
        type="text"
        v-model="form.previousFullName"
        class="input-field"
        placeholder="Previous full name (if any)"
      />
    </div>
  </div>

  <!-- Row 2: Date of Birth, Place of Birth, Nationality -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
      <input type="date" v-model="form.dateOfBirth" required class="input-field" />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Place of Birth *</label>
      <input
        type="text"
        v-model="form.placeOfBirth"
        required
        class="input-field"
        placeholder="Place of Birth"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Nationality *</label>
      <input
        type="text"
        v-model="form.nationality"
        required
        class="input-field"
        placeholder="Nationality"
      />
    </div>
  </div>

  <!-- Row 3: Country of Residence + Residential Address -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Country of Residence *</label>
      <input
        type="text"
        v-model="form.countryOfResidence"
        required
        class="input-field"
        placeholder="Country of Residence"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Residential Address *</label>
      <input
        type="text"
        v-model="form.residentialAddress"
        required
        class="input-field"
        placeholder="Residential Address"
      />
    </div>
  </div>

  <!-- Row 4: Business Address + Last Known Address -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
      <input
        type="text"
        v-model="form.businessAddress"
        class="input-field"
        placeholder="Business Address (if any)"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Last Known Address</label>
      <input
        type="text"
        v-model="form.lastKnownAddress"
        class="input-field"
        placeholder="If different from current address"
      />
    </div>
  </div>

  <!-- Postal Address -->
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-2">Postal Address *</label>
    <input
      type="text"
      v-model="form.postalAddress"
      required
      class="input-field"
      placeholder="Postal Address"
    />
  </div>

  <!-- Row 5: Email + Contact -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
      <input
        type="email"
        v-model="form.email"
        required
        class="input-field"
        placeholder="Email Address"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Contact Details *</label>
      <input
        type="text"
        v-model="form.contact"
        required
        class="input-field"
        placeholder="Contact Number(s)"
      />
    </div>
  </div>

  <!-- NIC / Passport / Tax ID -->
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-2"
      >NIC / Passport / Tax Identification Number *</label
    >
    <input
      type="text"
      v-model="form.idNumber"
      required
      class="input-field"
      placeholder="Enter identification number"
    />
  </div>

  <!-- Statement -->
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-2"
      >Statement of Beneficial Ownership *</label
    >
    <textarea
      v-model="form.statement"
      rows="4"
      required
      class="input-field resize-none"
      placeholder="Describe the nature and extent of beneficial ownership"
    ></textarea>
  </div>

  <!-- Submit Button -->
  <div class="flex justify-end mt-8">
    <button
      type="submit"
      class="bg-indigo-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-indigo-700"
    >
      Submit Details
    </button>
  </div>
</section>

        </div>
    </section>
</template>

<script setup>

import { reactive } from "vue";

const form = reactive({
    companyNumber: "",
    companyName: "",
    companyType: "",
    title: "",
    gender: "",
    fullName: "",
    previousFullName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    nationality: "",
    countryOfResidence: "",
    residentialAddress: "",
    businessAddress: "",
    lastKnownAddress: "",
    postalAddress: "",
    email: "",
    contact: "",
    idNumber: "",
    statement: "",
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
