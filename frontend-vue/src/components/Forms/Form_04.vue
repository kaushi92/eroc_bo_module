<template>
    <section class="bg-gray-50 min-h-screen pt-6">
        <div class="max-w-8xl mx-auto space-y-8">

            <!-- Header -->
            <header class="text-center mb-10 mt-4">
                <h1 class="text-2xl font-bold text-gray-900 mb-2">
                    <i class="bi bi-building-fill text-indigo-600 text-2xl"></i>
                    AUTHORIZED PERSON
                </h1>
                <p class="text-[16px] font-semibold text-[#4f46e5] mb-2">
                    Register authorized person for Beneficial Ownership management
                </p>
            </header>

            <!-- 🏢 Add Company Card -->
            <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8">
                <h2 class="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <i class="bi bi-building text-indigo-500"></i>
                    Add New Company
                </h2>

                <form  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Name Approval Number</label>
                        <input  type="text" required placeholder="Enter approval number"
                            class="input-field" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Company Name</label>
                        <input  type="text" required placeholder="Enter company name"
                            class="input-field" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-600 mb-3">Type of Company</label>
                        <select required
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
                    <input type="text" placeholder="Search by company name or approval number..."
                        class="w-full md:w-1/2 border border-gray-300 rounded-lg text-sm px-4 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-400 text-gray-700" />
                    <button 
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
                                <th class="px-4 py-3 text-left cursor-pointer w-1/5">
                                    Approval No. <i></i>
                                </th>
                                <th class="px-4 py-3 text-left cursor-pointer w-2/5">
                                    Company Name <i></i>
                                </th>
                                <th class="px-4 py-3 text-left cursor-pointer W-1/5">
                                    Type <i></i>
                                </th>
                                <th class="px-4 py-3 text-center W-1/5">Actions</th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-200">
                            <tr
                                class="hover:bg-gray-50 transition duration-150 ease-in-out text-base">
                                <td class="px-4 py-3 text-gray-700 font-sm font-semibold tracking-wider"></td>
                                <td class="px-4 py-3 text-gray-700"></td>
                                <td class="px-4 py-3 text-gray-700 capitalize"></td>
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
                                        <button 
                                            class="flex items-center justify-center cursor-pointer w-7 h-7 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-md transition duration-200 cursor"
                                            title="Edit">
                                            <i class="bi bi-pencil-square text-sm font-semibold"></i>
                                        </button>

                                        <!-- Delete Button -->
                                        <button
                                            class="flex items-center justify-center cursor-pointer w-7 h-7 rounded-lg bg-red-500 text-white hover:bg-red-600 hover:shadow-md transition duration-200 cursor"
                                            title="Delete">
                                            <i class="bi bi-trash text-sm font-semibold"></i>
                                        </button>

                                        <!-- Add / Register BO Button -->
                                        <button
                                            class="flex items-center justify-center cursor-pointer w-7 h-7 rounded-lg bg-[#00a65a] border border-[#008d4c] text-white hover:bg-green-600 hover:shadow-md transition duration-200 cursor"
                                            title="Add Beneficial Owners">
                                            <i class="bi bi-person-plus text-base font-semibold"></i>
                                        </button>
                                    </div>
                                </td>



                            </tr>

                            <tr >
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
                <div>
                </div>
            </transition-group>
        </div>
    </section>
</template>

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