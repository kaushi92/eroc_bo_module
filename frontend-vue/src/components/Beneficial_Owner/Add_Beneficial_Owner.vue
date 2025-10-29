<template>
    <section class="min-h-screen sm:px-4 lg:px-8 bg-gray-50">

        <!-- Header with Back Button -->
        <div
            class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 p-4 sm:p-6 sticky top-0 bg-gray-50 z-20 border-b border-gray-200 gap-2 sm:gap-0">
            <!-- Company Info -->
            <div class="w-full sm:w-auto text-center sm:text-left">
                <span
                    class="outline-2 bg-white text-black border font-medium rounded-lg px-3 sm:px-5 py-3 text-center">
                    <i class="bi bi-people-fill text-black mr-2"></i>
                    <span class="text-base sm:text-base">Register Beneficial Owner for</span>
                    <i class="text-lg font-semibold ml-2 bi bi-arrow-right-short text-black mr-1"></i>
                    <span class="ml-1 font-bold text-[#eb2415] max-w-[200px] sm:max-w-md inline-block text-base">
                        {{ companyName }}
                    </span> -<span class="ml-1 font-bold text-[#000000] text-base">{{ approvalNo }}</span>
                </span>
            </div>

            <!-- Back Button -->
            <div class="flex justify-center sm:justify-end w-full sm:w-auto mt-2 sm:mt-0">
                <button @click="goBack"
                    class="flex items-center justify-center text-white bg-gradient-to-r from-green-500 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 hover:shadow-lg font-medium rounded-lg text-sm sm:text-base px-4 sm:px-5 py-1.5 w-full sm:w-auto">
                    <i class="bi bi-arrow-left-circle text-lg mr-2 font-bold"></i>
                    Company List
                </button>
            </div>
        </div>


        <!-- Beneficial Owner Form -->
        <div class="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100 mb-10">
            <h3 class="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-6">
                <i class="bi bi-person-circle text-indigo-500"></i>
                Beneficial Owner
            </h3>

            <div class="space-y-4">
                <!-- Full Name -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input v-model="owner.fullName" type="text" required class="input-field" placeholder="Full Name" />
                </div>

                <!-- NIC / Passport & Nationality -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">NIC / Passport *</label>
                        <input v-model="owner.idOrPassport" type="text" required class="input-field"
                            placeholder="NIC / Passport" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Nationality *</label>
                        <input v-model="owner.nationality" type="text" required class="input-field"
                            placeholder="Nationality" />
                    </div>
                </div>

                <!-- Date of Birth & Country -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                        <input v-model="owner.dob" type="date" required class="input-field" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Country of Residence *</label>
                        <input v-model="owner.countryOfResidence" type="text" required class="input-field"
                            placeholder="Country of Residence" />
                    </div>
                </div>

                <!-- Residential & Business Address -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Residential Address *</label>
                    <input v-model="owner.residentialAddress" type="text" required class="input-field"
                        placeholder="Residential Address" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Business Address</label>
                    <input v-model="owner.businessAddress" type="text" class="input-field"
                        placeholder="Business Address (if any)" />
                </div>

                <!-- Postal Address -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Postal Address *</label>
                    <input v-model="owner.postalAddress" type="text" required class="input-field"
                        placeholder="Postal Address" />
                </div>

                <!-- Email & Contact -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input v-model="owner.email" type="email" required class="input-field"
                            placeholder="Email Address" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
                        <input v-model="owner.contactNumber" type="text" required class="input-field"
                            placeholder="Contact Number" />
                    </div>
                </div>

                <!-- Ownership & Statement -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">% Ownership *</label>
                    <input v-model="owner.ownership" type="number" min="0" max="100" required class="input-field"
                        placeholder="Ownership Percentage" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Statement on Ownership *</label>
                    <textarea v-model="owner.statement" rows="3" required class="input-field"
                        placeholder="Describe the nature and extent of ownership"></textarea>
                </div>

                <!-- Submit -->
                <div class="flex justify-end mt-4">
                    <button type="button" @click="submitOwner" class="btn-add-owner">
                        <i class="bi bi-check-circle-fill text-base mr-1"></i>
                        Submit Owner
                    </button>
                </div>
            </div>
        </div>

        <!-- Registered Owners Table -->
        <div class="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100 overflow-x-auto">
            <h3 class="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <i class="bi bi-card-list text-indigo-500"></i> Registered Owners
            </h3>
            <table class="min-w-full text-sm md:text-base border border-gray-200 rounded-lg">
                <thead class="bg-indigo-100 text-indigo-800 uppercase text-xs font-semibold tracking-wider">
                    <tr>
                        <th class="px-4 py-2 text-left">Name</th>
                        <th class="px-4 py-2 text-left">NIC / Passport</th>
                        <th class="px-4 py-2 text-left">% Ownership</th>
                        <th class="px-4 py-2 text-left">Contact</th>
                        <th class="px-4 py-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="(o, index) in registeredOwners" :key="index" class="hover:bg-gray-50">
                        <td class="px-4 py-2">{{ o.fullName }}</td>
                        <td class="px-4 py-2">{{ o.idOrPassport }}</td>
                        <td class="px-4 py-2">{{ o.ownership }}%</td>
                        <td class="px-4 py-2">{{ o.contactNumber }}</td>
                        <td class="px-4 py-2 text-center">
                            <button @click="deleteRegisteredOwner(index)" class="text-red-600 hover:text-red-800">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr v-if="!registeredOwners.length">
                        <td colspan="5" class="text-center py-6 text-gray-500 italic">No owners added yet.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            approvalNo: this.$route.params.approvalNo,
            companyName: this.$route.query.name,
            owner: {
                fullName: "",
                idOrPassport: "",
                nationality: "",
                dob: "",
                countryOfResidence: "",
                residentialAddress: "",
                businessAddress: "",
                postalAddress: "",
                email: "",
                contactNumber: "",
                ownership: "",
                statement: "",
            },
            registeredOwners: [],
        };
    },
    methods: {
        submitOwner() {
            // Basic validation
            if (!this.owner.fullName || !this.owner.idOrPassport) {
                alert("Please fill in all required fields.");
                return;
            }
            // Add to table
            this.registeredOwners.push({ ...this.owner });
            // Reset form
            this.owner = {
                fullName: "",
                idOrPassport: "",
                nationality: "",
                dob: "",
                countryOfResidence: "",
                residentialAddress: "",
                businessAddress: "",
                postalAddress: "",
                email: "",
                contactNumber: "",
                ownership: "",
                statement: "",
            };
            alert("Owner added successfully!");
        },
        deleteRegisteredOwner(index) {
            this.registeredOwners.splice(index, 1);
        },
        goBack() {
            const username = this.$route.params.username;
            this.$router.push(`/dashboard_bo/${username}/company-view`);
        },
    },
    mounted() {
        document.title = `Register Beneficial Owner - ${this.companyName}`;
    },
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
    padding: 0.4rem 1.2rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 3px 6px rgba(99, 102, 241, 0.2);
    font-size: 14px;
}
</style>