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

      <!-- Company Information -->
      <section class="bg-white rounded-md shadow-sm p-8 space-y-6">
        <h2 class="text-xl font-semibold text-gray-900">🏢 Company Information</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Name Approval Number *</label>
            <input type="text" v-model="form.nameApprovalNumber" required placeholder="Enter name approval number"
              class="input-field" />
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

      <!-- Beneficial Owner Details -->
      <section class="bg-white rounded-md shadow-sm p-8 space-y-6">
        <h2 class="text-xl font-semibold text-gray-900">👤 Beneficial Owner Details</h2>

        <form @submit.prevent="handleSubmit" class="space-y-6">

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Title -->
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-3">Title *</label>
              <select v-model="form.title" required class="input-field">
                <option disabled value="">Select title</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Miss</option>
                <option>Ms</option>
                <option>Dr</option>
                <option>Prof</option>
              </select>
            </div>

            <!-- Gender -->
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-3">Gender *</label>
              <div class="flex gap-6 text-gray-700 text-sm">
                <label class="flex items-center gap-2">
                  <input type="radio" v-model="form.gender" value="Male" required /> Male
                </label>
                <label class="flex items-center gap-2">
                  <input type="radio" v-model="form.gender" value="Female" /> Female
                </label>
                <label class="flex items-center gap-2">
                  <input type="radio" v-model="form.gender" value="Other" /> Other
                </label>
              </div>
            </div>
          </div>

          <!-- Row 1 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input type="text" v-model="form.fullName" required class="input-field"
                placeholder="Full name as per NIC / Passport" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Previous Full Name</label>
              <input type="text" v-model="form.previousFullName" class="input-field"
                placeholder="Previous full name (if any)" />
            </div>
          </div>

          <!-- Row 2 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
              <input type="date" v-model="form.dateOfBirth" required class="input-field" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Place of Birth *</label>
              <input type="text" v-model="form.placeOfBirth" required placeholder="Place of Birth"
                class="input-field" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nationality *</label>
              <input type="text" v-model="form.nationality" required placeholder="Nationality" class="input-field" />
            </div>
          </div>

          <!-- Row 3 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Country of Residence *</label>
              <input type="text" v-model="form.countryOfResidence" required placeholder="Country of Residence"
                class="input-field" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Residential Address *</label>
              <input type="text" v-model="form.residentialAddress" required placeholder="Residential Address"
                class="input-field" />
            </div>
          </div>

          <!-- Row 4 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
              <input type="text" v-model="form.businessAddress" placeholder="Business Address" class="input-field" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Last Known Address</label>
              <input type="text" v-model="form.lastKnownAddress" placeholder="If different from current address"
                class="input-field" />
            </div>
          </div>

          <!-- Postal Address -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Postal Address *</label>
            <input type="text" v-model="form.postalAddress" required placeholder="Postal Address" class="input-field" />
          </div>

          <!-- Row 5 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input type="email" v-model="form.email" required placeholder="Email address" class="input-field" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Contact Details *</label>
              <input type="text" v-model="form.contact" required placeholder="Contact Number" class="input-field" />
            </div>
          </div>

          <!-- NIC Number -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">NIC Number</label>
            <input v-model="form.nic" type="text" class="input-field" placeholder="Enter NIC number" />
          </div>

          <!-- Passport Number -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Passport Number</label>
            <input v-model="form.passport" type="text" class="input-field" placeholder="Enter Passport number" />
          </div>

          <!-- Error message -->
          <p v-if="errors.nicOrPassport" class="text-red-600 text-sm mt-1">
            {{ errors.nicOrPassport }}
          </p>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Tax Identification Number</label>
            <input type="text" v-model="form.taxId" class="input-field" placeholder="TIN Number" />
          </div>
    </div>

    <!-- Statement of Beneficial Ownership -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Statement of Beneficial Ownership *
      </label>

      <div class="space-y-3 text-gray-700 text-sm">

        <label class="flex items-center gap-2">
          <input type="radio" v-model="form.statementType" value="shares" required />
          Ownership or control of shares (over 10%)
        </label>

        <label class="flex items-center gap-2">
          <input type="radio" v-model="form.statementType" value="voting" required />
          Voting rights (over 10%)
        </label>

        <label class="flex items-center gap-2">
          <input type="radio" v-model="form.statementType" value="control" required />
          Effective control
        </label>
      </div>

      <!-- Extra field only if control is selected -->
      <div v-if="form.statementType === 'control'" class="mt-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Describe the nature of effective control *
        </label>
        <textarea v-model="form.effectiveControlDetails" rows="4" class="input-field resize-none"
          placeholder="Describe the nature of effective control" required></textarea>
      </div>
    </div>

    <!-- Submit -->
    <div class="flex justify-end mt-8">
      <button class="bg-indigo-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-indigo-700">
        Submit Details
      </button>
    </div>

    </form>
  </section>


</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  nicOrPassport: "",
  nameApprovalNumber: "",
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

  nic: "",
  passport: "",
  taxId: "",

  statementType: "",
  effectiveControlDetails: "",
});

const handleSubmit = () => {
  if (!validateForm()) {
    return;
  }

  console.log("Form submitted", form);
  alert("Beneficial Owner details submitted successfully!");
};


const validateForm = () => {
  errors.nicOrPassport = "";

  // At least ONE field must be filled
  if (!form.nic && !form.passport) {
    errors.nicOrPassport = "Please enter NIC or Passport Number.";
    return false;
  }

  return true;
};
</script>

<style scoped>
.input-field {
  width: 100%;
  padding: 0.45rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.input-field:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 1px #4f46e5;
}
</style>
