<template>
    <section class="bg-gray-50 min-h-screen pt-6">
        <div class="max-w-8xl mx-auto space-y-8">

            <!-- Header -->
            <header class="text-center mb-10 mt-4">
                <h1 class="text-2xl font-bold text-gray-900 mb-2 text-transform: uppercase">
                    <i class="bi bi-person-badge text-indigo-600 text-2xl"></i>
                    Reporting, Receiving Details of Beneficial Owners
                </h1>
                <p class="text-[16px] font-semibold text-[#4f46e5] mb-2">
                    Please provide accurate and complete details of the beneficial owner as per company records.
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
                        <input v-model="form.companyNumber" type="text" required placeholder="Enter company number"
                            class="input-field" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Name of the Company</label>
                        <input v-model="form.companyName" type="text" required placeholder="Enter company name"
                            class="input-field" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Type of the Company</label>
                        <select v-model="form.companyType" required class="input-field text-gray-700">
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
                    Beneficial Owner/ Owners Information
                </h2>

                <!-- Form -->
                <form @submit.prevent="handleSubmit" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <!-- Full Name -->
                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Full Name</label>
                        <input v-model="form.fullName" type="text" placeholder="Enter full name" class="input-field" />
                    </div>

                    <!-- Previous Full Name -->
                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Previous Full Name</label>
                        <input v-model="form.previousFullName" type="text" placeholder="Enter previous full name"
                            class="input-field" />
                    </div>

                    <!-- Date of Birth -->
                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Date of Birth</label>
                        <input v-model="form.dateOfBirth" type="date" class="input-field" />
                    </div>

                    <!-- Place of Birth -->
                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Place of Birth</label>
                        <input v-model="form.placeOfBirth" type="text" placeholder="Enter place of birth"
                            class="input-field" />
                    </div>

                    <!-- Nationality -->
                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Nationality</label>
                        <input v-model="form.nationality" type="text" placeholder="Enter nationality"
                            class="input-field" />
                    </div>

                    <!-- Country of Residence -->
                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Country of Residence</label>
                        <input v-model="form.countryOfResidence" type="text" placeholder="Enter country of residence"
                            class="input-field" />
                    </div>

                    <!-- Residential & Business Address (same row) -->
                    <div class="sm:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-600 mb-3">Residential Address</label>
                            <input v-model="form.residentialAddress" type="text" placeholder="Enter residential address"
                                class="input-field" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-600 mb-3">Business Address</label>
                            <input v-model="form.businessAddress" type="text" placeholder="Enter business address"
                                class="input-field" />
                        </div>
                    </div>

                    <!-- Last Known Address -->
                    <div class="sm:col-span-2 lg:col-span-3">
                        <label class="block text-sm font-medium text-gray-600 mb-3">Last Known Address</label>
                        <input v-model="form.lastKnownAddress" type="text" placeholder="Enter last known address"
                            class="input-field" />
                    </div>

                    <!-- Postal Address -->
                    <div class="sm:col-span-2 lg:col-span-3">
                        <label class="block text-sm font-medium text-gray-600 mb-3">Postal Address</label>
                        <input v-model="form.postalAddress" type="text" placeholder="Enter postal address"
                            class="input-field" />
                    </div>

                    <!-- Email Address -->
                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Email Address</label>
                        <input v-model="form.email" type="email" placeholder="Enter email address"
                            class="input-field" />
                    </div>

                    <!-- Contact Details -->
                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Contact Details</label>
                        <input v-model="form.contact" type="text" placeholder="Enter contact number"
                            class="input-field" />
                    </div>

                    <!-- NIC / Passport / Tax ID -->
                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">NIC / Passport / Tax Identification
                            Number</label>
                        <input v-model="form.idNumber" type="text" placeholder="Enter identification number"
                            class="input-field" />
                    </div>

                    <!-- Statement -->
                    <div class="sm:col-span-2 lg:col-span-3">
                        <label class="block text-sm font-medium text-gray-600 mb-3">
                            Full Statement Describing the Nature and Content of the Beneficial Ownership
                        </label>
                        <textarea v-model="form.statement" rows="4" placeholder="Provide a detailed description..."
                            class="input-field resize-none"></textarea>
                    </div>

                    <!-- Submit -->
                    <div class="sm:col-span-2 lg:col-span-3 flex justify-end mt-8">
                        <button type="submit"
                            class="bg-indigo-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-indigo-700">
                            Submit Details
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
