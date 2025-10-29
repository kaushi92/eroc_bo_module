<template>
    <section class="bg-gray-50 min-h-screen pt-6">
        <div class="max-w-8xl mx-auto space-y-8">

            <!-- Header -->
            <header class="text-center mb-10 mt-4">
                <h1 class="text-2xl font-bold text-gray-900 mb-2">
                    <i class="bi bi-building-fill text-indigo-600 text-2xl"></i>
                    COMPANY INFORMATION
                </h1>
                <p class="text-[16px] font-semibold text-[#4f46e5] mb-2">
                    Enter company details for Beneficial Ownership registration
                </p>
            </header>

            <!-- 🏢 Add Company Card -->
            <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8">
                <h2 class="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <i class="bi bi-building text-indigo-500"></i>
                    Add New Company
                </h2>

                <form @submit.prevent="addCompany" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Name Approval Number</label>
                        <input v-model="newCompany.approvalNo" type="text" required placeholder="Enter approval number"
                            class="input-field" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Company Name</label>
                        <input v-model="newCompany.name" type="text" required placeholder="Enter company name"
                            class="input-field" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Type of Company</label>
                        <select v-model="newCompany.type" required
                            class="input-field">
                            <option disabled value="">Select type</option>
                            <option value="Private">Private Limited</option>
                            <option value="Public">Public Limited</option>
                            <option value="Guarantee">Company Limited by Guarantee</option>
                        </select>
                    </div>

                    <!-- Button spans full row and is anchored bottom-right -->
                    <div class="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-end mt-2">
                        <button type="submit" class="btn-add-company flex items-center cursor-pointer">
                            <i
                                :class="editIndex !== null ? 'bi bi-check-circle text-lg mr-2' : 'bi bi-plus-circle text-lg mr-2'"></i>
                            {{ editIndex !== null ? 'Update Company' : 'Add Company' }}
                        </button>
                    </div>

                </form>
            </div>

            <!-- 📋 Company List Table -->
            <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8">
                <h2 class="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <i class="bi bi-card-list text-indigo-500"></i> Company List
                </h2>

                <!-- 🔍 Search -->
                <div class="flex flex-col md:flex-row items-center justify-between gap-3 mb-6">
                    <input v-model="searchQuery" type="text" placeholder="Search by company name or approval number..."
                        class="w-full md:w-1/2 border border-gray-300 rounded-lg text-sm px-4 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-400 text-gray-700" />
                    <button @click="resetSearch" v-if="searchQuery"
                        class="flex items-center gap-2 px-3 h-8 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-indigo-700 transition duration-200 shadow-sm cursor-pointer">
                        <i class="bi bi-x-circle text-base font-semibold"></i>
                        <span class="text-sm font-medium">Clear</span>
                    </button>
                </div>

                <!-- 🧾 Table -->
                <div class="overflow-x-auto">
                    <table class="min-w-full text-sm md:text-base border border-gray-200 rounded-lg overflow-hidden">
                        <thead class="bg-indigo-100 text-indigo-800 uppercase text-xs font-semibold tracking-wider">
                            <tr>
                                <th class="px-4 py-3 text-left cursor-pointer w-1/5" @click="sortBy('approvalNo')">
                                    Approval No. <i v-if="sortKey === 'approvalNo'" :class="sortIcon"></i>
                                </th>
                                <th class="px-4 py-3 text-left cursor-pointer w-2/5" @click="sortBy('name')">
                                    Company Name <i v-if="sortKey === 'name'" :class="sortIcon"></i>
                                </th>
                                <th class="px-4 py-3 text-left cursor-pointer W-1/5" @click="sortBy('type')">
                                    Type <i v-if="sortKey === 'type'" :class="sortIcon"></i>
                                </th>
                                <th class="px-4 py-3 text-center W-1/5">Actions</th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="(company, index) in filteredCompanies" :key="index"
                                class="hover:bg-gray-50 transition duration-150 ease-in-out text-base">
                                <td class="px-4 py-3 text-gray-700 font-sm font-semibold tracking-wider">{{
                                    company.approvalNo }}</td>
                                <td class="px-4 py-3 text-gray-700">{{ company.name }}</td>
                                <td class="px-4 py-3 text-gray-700 capitalize">{{ company.type }}</td>
                                <!-- <td class="px-4 py-3 text-center">
                                    <div class="flex justify-center items-center gap-3">
                                        <button @click="onEditCompany(index)"
                                            class="text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                                            <i class="bi bi-pencil-square"></i> Edit
                                        </button>
                                        <button @click="deleteCompany(index)"
                                            class="text-red-600 hover:text-red-800 flex items-center gap-1">
                                            <i class="bi bi-trash"></i> Delete
                                        </button>
                                    </div>
                                </td> -->
                                <td class="px-4 py-3 text-center">
                                    <div class="flex justify-center items-center gap-3 flex-wrap">
                                        <!-- Edit Button -->
                                        <button @click="onEditCompany(index)"
                                            class="flex items-center justify-center cursor-pointer w-7 h-7 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-md transition duration-200 cursor"
                                            title="Edit">
                                            <i class="bi bi-pencil-square text-sm font-semibold"></i>
                                        </button>

                                        <!-- Delete Button -->
                                        <button @click="deleteCompany(index)"
                                            class="flex items-center justify-center cursor-pointer w-7 h-7 rounded-lg bg-red-500 text-white hover:bg-red-600 hover:shadow-md transition duration-200 cursor"
                                            title="Delete">
                                            <i class="bi bi-trash text-sm font-semibold"></i>
                                        </button>

                                        <!-- Add / Register BO Button -->
                                        <button @click="goToBeneficialOwners(company)"
                                            class="flex items-center justify-center cursor-pointer w-7 h-7 rounded-lg bg-[#00a65a] border border-[#008d4c] text-white hover:bg-green-600 hover:shadow-md transition duration-200 cursor"
                                            title="Add Beneficial Owners">
                                            <i class="bi bi-person-plus text-base font-semibold"></i>
                                        </button>
                                    </div>
                                </td>



                            </tr>

                            <tr v-if="filteredCompanies.length === 0">
                                <td colspan="4" class="text-center py-6 text-gray-500 italic">
                                    No companies found.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
        <!-- Toast Notifications -->
        <div class="fixed top-6 right-6 space-y-3 z-50">
            <transition-group name="toast" tag="div">
                <div v-for="(toast, i) in toasts" :key="toast.id" :class="[
                    'px-4 py-2 rounded-lg shadow-md text-white font-medium flex items-center gap-2 transform transition-all',
                    toast.type === 'success' ? 'bg-green-500' :
                        toast.type === 'info' ? 'bg-blue-500' : 'bg-red-500'
                ]">
                    <i class="bi bi-check-circle"></i>
                    {{ toast.message }}
                </div>
            </transition-group>
        </div>
    </section>
</template>

<script>
export default {
    name: "CompanyPage",
    data() {
        return {
            newCompany: {
                approvalNo: "",
                name: "",
                type: "",
            },
            companies: [
                { approvalNo: "PV-5421", name: "Tech Lanka Pvt Ltd", type: "Private" },
                { approvalNo: "PV-4867", name: "Green Energy PLC", type: "Public" },
            ],
            searchQuery: "",
            sortKey: "",
            sortOrder: 1,
            editIndex: null, // track which row is being edited
            toasts: [],
        };
    },
    computed: {
        filteredCompanies() {
            let result = this.companies.filter(
                (c) =>
                    c.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    c.approvalNo.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            if (this.sortKey) {
                result.sort((a, b) => {
                    let valA = a[this.sortKey].toLowerCase();
                    let valB = b[this.sortKey].toLowerCase();
                    return valA < valB ? -1 * this.sortOrder : valA > valB ? 1 * this.sortOrder : 0;
                });
            }
            return result;
        },
        sortIcon() {
            return this.sortOrder === 1 ? "bi bi-sort-alpha-down" : "bi bi-sort-alpha-up";
        },
        isFormValid() {
            return this.newCompany.approvalNo && this.newCompany.name && this.newCompany.type;
        }
    },
    methods: {
        showToast(message, type = "success") {
            const id = Date.now();
            this.toasts.push({ message, type, id });

            setTimeout(() => {
                this.toasts = this.toasts.filter(t => t.id !== id);
            }, 3000);
        },
        addCompany() {
            if (!this.isFormValid) return;

            if (this.editIndex !== null) {
                this.companies.splice(this.editIndex, 1, { ...this.newCompany });
                this.showToast("Company updated successfully!", "info");
                this.editIndex = null;
            } else {
                this.companies.push({ ...this.newCompany });
                this.showToast("Company added successfully!", "success");
            }

            this.newCompany = { approvalNo: "", name: "", type: "" };
        },
        deleteCompany(index) {
            if (confirm("Are you sure you want to delete this company?")) {
                this.companies.splice(index, 1);
                this.showToast("Company deleted successfully!", "success");

                // If editing the same company, reset the form
                if (this.editIndex === index) {
                    this.newCompany = { approvalNo: "", name: "", type: "" };
                    this.editIndex = null;
                }
            }
        },
        goToBeneficialOwners(company) {
            const username = this.$route.params.username; // since it’s nested under dashboard_bo/:username
            this.$router.push({
                name: 'BeneficialOwners',
                params: { username, approvalNo: company.approvalNo },
                query: { name: company.name }
            });
        },

        // when user clicks Edit
        onEditCompany(index) {
            // copy selected company to form and set editIndex
            this.newCompany = { ...this.companies[index] };
            this.editIndex = index;
            // scroll to top of page / form
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        sortBy(key) {
            if (this.sortKey === key) this.sortOrder *= -1;
            else {
                this.sortKey = key;
                this.sortOrder = 1;
            }
        },

        resetSearch() {
            this.searchQuery = "";
        },
    },

    mounted() {
        document.title = "Company Information"; // Set default title
    },
};
</script>

<style scoped>
/* keep your existing styles */
input,
select {
    transition: box-shadow 0.2s ease;
}

.input-field {
    width: 100%;
    padding: 0.3rem 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    outline: none;
    font-size: 0.95rem;
    transition: all 0.2s;
}

.btn-add-company {
    background: linear-gradient(to right, #4f46e5, #6366f1);
    color: white;
    font-weight: 500;
    padding: 0.4rem 1.2rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 3px 6px rgba(99, 102, 241, 0.2);
}

.btn-add-company:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(99, 102, 241, 0.35);
}

@media (max-width: 640px) {
    .btn-add-company {
        width: 100%;
        text-align: center;
    }
}

/* Toast animation */
.toast-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.toast-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.toast-enter-active {
    transition: all 0.3s ease-out;
}

.toast-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.toast-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

.toast-leave-active {
    transition: all 0.3s ease-in;
}
</style>
