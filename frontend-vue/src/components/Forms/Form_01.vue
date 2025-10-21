<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <header class="text-center mb-10">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">FORM BO 01</h1>
        <p class="text-lg font-semibold text-gray-800 mb-2">
          Notice of Details of Beneficial Ownership of a Company
        </p>
      </header>

      <form @submit.prevent="submitForm" class="space-y-8">

        <!-- Company Information -->
        <section class="bg-white rounded-md shadow-sm p-8 space-y-8">
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

        <!-- Beneficial Owner 1 -->
        <section class="bg-white rounded-md shadow-sm p-8 space-y-8">
          <h2 class="text-xl font-semibold text-gray-900">👤 Beneficial Owner Details</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input type="text" v-model="form.owner1.fullName" required class="input-field"
                placeholder="Full name as per NIC or Passport" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Previous Full Name</label>
              <input type="text" v-model="form.owner1.previousName" class="input-field"
                placeholder="Previous name (if any)" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
              <input type="date" v-model="form.owner1.dob" required class="input-field" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Place of Birth *</label>
              <input type="text" v-model="form.owner1.placeOfBirth" required class="input-field"
                placeholder="Place of Birth" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nationality *</label>
              <input type="text" v-model="form.owner1.nationality" required class="input-field"
                placeholder="Nationality" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Country of Residence *</label>
              <input type="text" v-model="form.owner1.countryOfResidence" required class="input-field"
                placeholder="Country of Residence" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Residential Address *</label>
              <input type="text" v-model="form.owner1.residentialAddress" required class="input-field"
                placeholder="Residential Address" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
              <input type="text" v-model="form.owner1.businessAddress" class="input-field"
                placeholder="Business Address (if any)" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Last Known Address</label>
              <input type="text" v-model="form.owner1.lastKnownAddress" class="input-field"
                placeholder="If different from the addresses mentioned here" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Postal Address *</label>
            <input type="text" v-model="form.owner1.postalAddress" required class="input-field"
              placeholder="Postal Address" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input type="email" v-model="form.owner1.email" required class="input-field"
                placeholder="Email Address" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Contact Details *</label>
              <input type="text" v-model="form.owner1.contactDetails" required class="input-field"
                placeholder="Contact Number(s)" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">NIC / Passport / Tax ID *</label>
            <input type="text" v-model="form.owner1.identificationNumber" required class="input-field"
              placeholder="NIC / Passport / Tax ID" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Statement of Beneficial Ownership *</label>
            <textarea v-model="form.owner1.ownershipStatement" rows="4" required class="input-field"
              placeholder="Describe nature and extent of ownership"></textarea>
          </div>

          <!-- Signature -->
          <div>
            <h3 class="text-sm font-semibold text-gray-800 mb-2">Digital Signature</h3>
            <canvas ref="ownerSignaturePad" class="signature-canvas"></canvas>
            <div class="flex justify-between mt-4">
              <button type="button" @click="clearSignature('owner')" class="btn-clear">Clear Signature</button>
            </div>
          </div>
        </section>

        <!-- Additional Beneficial Owners -->
<section class="bg-white rounded-lg shadow-md p-8 space-y-4">
  <div class="flex justify-between items-center select-none border-b border-gray-200 pb-3">
    <h2 class="text-lg font-semibold text-gray-900">
      👥 Additional Beneficial Owners
    </h2>
    <button type="button" @click="addAdditionalOwner"
      class="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md transition-shadow shadow-sm hover:shadow-md">
      + Add Owner
    </button>
  </div>

          <div v-for="(owner, index) in form.additionalOwners" :key="index" class="border border-gray-200 rounded-md">
            <!-- Header -->
            <div class="flex justify-between items-center bg-gray-50 px-5 py-3 cursor-pointer"
              @click="toggleOwnerCollapse(index)">
              <h2 class="text-base font-medium text-gray-800">
                Beneficial Owner {{ index + 1 }} — {{ owner.fullName || 'Unnamed' }}
              </h2>
              <div class="flex items-center gap-3">
                <button type="button" @click.stop="removeAdditionalOwner(index)"
                  class="text-red-600 hover:text-red-800 text-sm font-medium">
                  Remove
                </button>
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-gray-600 transform transition-transform duration-300"
                  :class="{ 'rotate-180': !collapsedOwners[index] }" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <!-- Collapsible Body -->
            <transition name="fade">
              <div v-if="!collapsedOwners[index]" class="p-6 space-y-5 bg-white">

                <!-- Full Name -->
                <div>
                  <label class="form-label">Full Name</label>
                  <input type="text" v-model="owner.fullName" placeholder="Full Name" class="input-field" />
                </div>

                <!-- Short Fields in 3 Columns -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label class="form-label">Date of Birth</label>
                    <input type="date" v-model="owner.dateOfBirth" class="input-field" />
                  </div>
                  <div>
                    <label class="form-label">Place of Birth</label>
                    <input type="text" v-model="owner.placeOfBirth" class="input-field" />
                  </div>
                  <div>
                    <label class="form-label">Nationality</label>
                    <input type="text" v-model="owner.nationality" class="input-field" />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label class="form-label">Country of Residence</label>
                    <input type="text" v-model="owner.countryOfResidence" class="input-field" />
                  </div>
                  <div>
                    <label class="form-label">Contact Details</label>
                    <input type="text" v-model="owner.contactNumber" class="input-field" />
                  </div>
                  <div>
                    <label class="form-label">NIC / Passport No.</label>
                    <input type="text" v-model="owner.idOrPassport" class="input-field" />
                  </div>
                </div>

                <!-- Addresses -->
                <div>
                  <label class="form-label">Residential Address</label>
                  <input type="text" v-model="owner.residentialAddress" class="input-field" />
                </div>

                <div>
                  <label class="form-label">Business Address</label>
                  <input type="text" v-model="owner.businessAddress" class="input-field" />
                </div>

                <div>
                  <label class="form-label">Last Known Address</label>
                  <input type="text" v-model="owner.lastKnownAddress" class="input-field" />
                </div>

                <div>
                  <label class="form-label">Postal Address</label>
                  <input type="text" v-model="owner.postalAddress" class="input-field" />
                </div>

                <div>
                  <label class="form-label">Statement on Ownership</label>
                  <textarea v-model="owner.statement" rows="3"
                    placeholder="Describe the nature and extent of the ownership" class="input-field"></textarea>
                </div>

                <div>
                  <label class="form-label">Signature</label>
                  <input type="text" v-model="owner.signature" class="input-field" />
                </div>

              </div>
            </transition>
          </div>
        </section>


        <!-- Presented By -->
        <section class="bg-white rounded-md shadow-sm p-8 space-y-8">
          <h2 class="text-xl font-semibold text-gray-900">🧾 Presented By</h2>
          <div>
            <input type="text" v-model="form.presentedBy.fullName" placeholder="Full Name" class="input-field" />
          </div>
          <select v-model="form.presentedBy.designation" class="input-field">
            <option value="">Select designation</option>
            <option value="director">Director</option>
            <option value="secretary">Secretary</option>
            <option value="other">Other</option>
          </select>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" v-model="form.presentedBy.email" placeholder="Email" class="input-field" />
            <input type="text" v-model="form.presentedBy.telephone" placeholder="Telephone" class="input-field" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" v-model="form.presentedBy.mobile" placeholder="Mobile" class="input-field" />
            <input type="text" v-model="form.presentedBy.address" placeholder="Address" class="input-field" />
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-800 mb-2">Digital Signature</h3>
            <canvas ref="presentedBySignaturePad" class="signature-canvas"></canvas>
            <div class="flex justify-between mt-4">
              <button type="button" @click="clearSignature('presentedBy')" class="btn-clear">Clear Signature</button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Date *</label>
            <input type="date" v-model="form.presentedBy.date" required class="input-field" />
          </div>
        </section>

        <!-- Submit Buttons -->
        <div class="flex justify-end gap-4">
          <button type="button" @click="$router.back()" class="btn-cancel">Cancel</button>
          <button type="submit" :disabled="!isFormValid" class="btn-submit">Submit Registration</button>
        </div>

      </form>
    </div>
  </div>
</template>


<style scoped>
.input-field {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  transition: all 0.2s;
}

.input-field:focus {
  border-color: #3b82f6;       /* Blue border on focus */
  outline: none;               /* Remove default outline */
  box-shadow: 0 0 0 1px #3b82f6; /* Adds a subtle blue focus ring */
}

.signature-canvas {
  width: 100%;
  height: 150px;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: #ffffff;
  cursor: crosshair;
}

.btn-clear {
  padding: 0.25rem 0.5rem;
  background-color: #6b7280;
  color: white;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.btn-clear:hover {
  background-color: #4b5563;
}

.btn-submit {
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color: white; /* text-white */
  background-color: #4f46e5; /* bg-indigo-600 */
  padding: 0.375rem 1rem; /* px-4 py-1.5 */
  border-radius: 0.375rem; /* rounded-md */
  transition: all 0.3s ease; /* transition-shadow */
  box-shadow: 0 1px 2px rgba(0,0,0,0.05); /* shadow-sm */
}

.btn-submit:hover {
  background-color: #4338ca; /* hover:bg-indigo-700 */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* hover:shadow-md */
}

.btn-cancel {
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color: #374151; /* text-gray-700 */
  background-color: white; /* bg-white */
  border: 1px solid #d1d5db; /* border-gray-300 */
  padding: 0.375rem 1rem; /* px-4 py-1.5 */
  border-radius: 0.375rem; /* rounded-md */
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05); /* subtle shadow */
}
.btn-cancel:hover {
  background-color: #f3f4f6; /* hover:bg-gray-100 */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* hover shadow */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.signature-canvas {
  height: 150px;
  width: 100%;
  cursor: crosshair;
  touch-action: none;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
}

@media (max-width: 768px) {
  .signature-canvas {
    height: 120px;
  }
}
</style>


<script>
export default {
  name: "BeneficialOwnershipForm",
  data() {
    return {
      form: {
        nameApprovalNumber: "",
        companyName: "",
        companyType: "",
        owner1: {
          fullName: "",
          previousName: "",
          identificationNumber: "",
          dob: "",
          placeOfBirth: "",
          nationality: "",
          countryOfResidence: "",
          residentialAddress: "",
          businessAddress: "",
          lastKnownAddress: "",
          postalAddress: "",
          email: "",
          contactDetails: "",
          ownershipStatement: "",
          digitalSignature: "",
          signatureDate: "",
          declaration: false,
          signatureSaved: false,
        },
        additionalOwners: [],
        beneficialOwnerSignature: "",
        beneficialOwnerDate: "",
        beneficialSignatureSaved: false,
        presentedBy: {
          fullName: "",
          designation: "",
          email: "",
          telephone: "",
          mobile: "",
          address: "",
          digitalSignature: "",
          date: "",
          signatureSaved: false,
          declaration: false,
        },
      },
      isDrawing: false,
      currentSignatureType: null,
      lastX: 0,
      lastY: 0,
      collapsedOwners: [],
    };
  },
  computed: {
    isFormValid() {
      const baseValid =
        this.form.nameApprovalNumber &&
        this.form.companyName &&
        this.form.companyType &&
        this.form.owner1.fullName &&
        this.form.owner1.dob &&
        this.form.owner1.placeOfBirth &&
        this.form.owner1.nationality &&
        this.form.owner1.countryOfResidence &&
        this.form.owner1.residentialAddress &&
        this.form.owner1.ownershipStatement &&
        this.form.owner1.digitalSignature &&
        this.form.owner1.signatureDate &&
        this.form.owner1.declaration &&
        this.form.beneficialOwnerSignature &&
        this.form.beneficialOwnerDate &&
        this.form.presentedBy.fullName &&
        this.form.presentedBy.designation &&
        this.form.presentedBy.email &&
        this.form.presentedBy.mobile &&
        this.form.presentedBy.address &&
        this.form.presentedBy.digitalSignature &&
        this.form.presentedBy.date &&
        this.form.presentedBy.declaration;

      // Check additional owners signatures
      const additionalOwnersValid = this.form.additionalOwners.every(
        (owner) =>
          owner.digitalSignature &&
          owner.fullName &&
          owner.dob &&
          owner.nationality &&
          owner.ownershipPercentage
      );

      return baseValid && additionalOwnersValid;
    },
  },
  mounted() {
    this.initializeCanvases();
    // Set current date and time for signature dates
    this.form.owner1.signatureDate = new Date().toISOString().slice(0, 16);
    this.form.beneficialOwnerDate = new Date().toISOString().slice(0, 10);
    this.form.presentedBy.date = new Date().toISOString().slice(0, 10);
  },
  methods: {
    initializeCanvases() {
      // All canvases will be initialized when the template renders
      // We'll handle drawing in the event methods
    },
    getCanvas(signatureType, index = null) {
      if (signatureType === "owner") {
        return this.$refs.ownerSignaturePad;
      } else if (signatureType === "beneficial") {
        return this.$refs.beneficialOwnerSignaturePad;
      } else if (signatureType === "presentedBy") {
        return this.$refs.presentedBySignaturePad;
      } else if (signatureType.startsWith("additional")) {
        const refName = `additionalOwnerSignaturePad${index || signatureType.replace("additional", "")
          }`;
        return this.$refs[refName]?.[0] || this.$refs[refName];
      }
      return null;
    },
    getContext(signatureType, index = null) {
      const canvas = this.getCanvas(signatureType, index);
      if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = "#000000";
        return ctx;
      }
      return null;
    },
    startDrawing(event, signatureType) {
      this.isDrawing = true;
      this.currentSignatureType = signatureType;

      const canvas = this.getCanvas(signatureType);
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX || event.touches[0].clientX) - rect.left;
      const y = (event.clientY || event.touches[0].clientY) - rect.top;

      this.lastX = x;
      this.lastY = y;

      event.preventDefault();
    },
    draw(event, signatureType) {
      if (!this.isDrawing || this.currentSignatureType !== signatureType)
        return;

      const canvas = this.getCanvas(signatureType);
      const ctx = this.getContext(signatureType);
      if (!canvas || !ctx) return;

      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX || event.touches[0].clientX) - rect.left;
      const y = (event.clientY || event.touches[0].clientY) - rect.top;

      ctx.beginPath();
      ctx.moveTo(this.lastX, this.lastY);
      ctx.lineTo(x, y);
      ctx.stroke();

      this.lastX = x;
      this.lastY = y;

      // Auto-save signature
      this.saveSignature(signatureType);

      event.preventDefault();
    },
    stopDrawing(signatureType) {
      if (this.isDrawing && this.currentSignatureType === signatureType) {
        this.isDrawing = false;
        this.saveSignature(signatureType);
      }
    },
    saveSignature(signatureType) {
      const canvas = this.getCanvas(signatureType);
      if (!canvas) return;

      const signatureData = canvas.toDataURL();

      if (signatureType === "owner") {
        this.form.owner1.digitalSignature = signatureData;
        this.form.owner1.signatureSaved = true;
      } else if (signatureType === "beneficial") {
        this.form.beneficialOwnerSignature = signatureData;
        this.form.beneficialSignatureSaved = true;
      } else if (signatureType === "presentedBy") {
        this.form.presentedBy.digitalSignature = signatureData;
        this.form.presentedBy.signatureSaved = true;
      } else if (signatureType.startsWith("additional")) {
        const index = parseInt(signatureType.replace("additional", ""));
        if (!isNaN(index) && this.form.additionalOwners[index]) {
          this.form.additionalOwners[index].digitalSignature = signatureData;
          this.form.additionalOwners[index].signatureSaved = true;
        }
      }
    },
    clearSignature(signatureType) {
      const canvas = this.getCanvas(signatureType);
      const ctx = this.getContext(signatureType);
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (signatureType === "owner") {
          this.form.owner1.digitalSignature = "";
          this.form.owner1.signatureSaved = false;
        } else if (signatureType === "beneficial") {
          this.form.beneficialOwnerSignature = "";
          this.form.beneficialSignatureSaved = false;
        } else if (signatureType === "presentedBy") {
          this.form.presentedBy.digitalSignature = "";
          this.form.presentedBy.signatureSaved = false;
        } else if (signatureType.startsWith("additional")) {
          const index = parseInt(signatureType.replace("additional", ""));
          if (!isNaN(index) && this.form.additionalOwners[index]) {
            this.form.additionalOwners[index].digitalSignature = "";
            this.form.additionalOwners[index].signatureSaved = false;
          }
        }
      }
    },
    addOwner() {
      this.form.additionalOwners.push({
        fullName: "",
        previousName: "",
        identificationNumber: "",
        dob: "",
        placeOfBirth: "",
        nationality: "",
        countryOfResidence: "",
        residentialAddress: "",
        businessAddress: "",
        lastKnownAddress: "",
        postalAddress: "",
        email: "",
        contactDetails: "",
        ownershipStatement: "",
        nationalityIdentificationNumber: "", // Added this field
        digitalSignature: "",
        signatureDate: new Date().toISOString().slice(0, 16),
        declaration: false, // Added declaration
        signatureSaved: false,
      });
    },
    removeOwner(index) {
      this.form.additionalOwners.splice(index, 1);
    },
    submitForm() {
      if (!this.isFormValid) {
        alert(
          "Please fill in all required fields, provide all signatures, and accept all declarations."
        );
        return;
      }

      console.log("Form submitted:", this.form);
      alert("Beneficial ownership registration submitted successfully!");
      this.$router.push("/");
    },
    addAdditionalOwner() {
      this.form.additionalOwners.push({
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
        contactNumber: "",
        idOrPassport: "",
        statement: "",
        signature: "",
      });
      this.collapsedOwners.push(false); // Default: expanded
    },
    removeAdditionalOwner(index) {
      this.form.additionalOwners.splice(index, 1);
      this.collapsedOwners.splice(index, 1);
    },
    toggleOwnerCollapse(index) {
      this.collapsedOwners[index] = !this.collapsedOwners[index];
    },
  },
};
</script>