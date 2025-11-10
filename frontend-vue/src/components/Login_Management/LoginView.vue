<template>
  <div class="bg_color">
    <div class="min-h-screen flex flex-col items-center justify-center p-6">
      <div class="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">

        <!-- Left Content -->
        <div class="max-w-lg max-md:mx-auto max-md:text-center">
          <img src="../../assets/img/Logo_gov.png" alt="ROC Logo" class="w-16 sm:w-24 mb-3 mx-auto block" />
          <p class="dep_name">Department of Registrar of Companies</p>
          <h1 class="Heading">Beneficial Ownership Registration</h1>
          <p class="Description text-gray-700 leading-relaxed text-justify mt-4 text-sm sm:text-base">
            The Beneficial Ownership Registration portal enables authorized users to
            register, update, and maintain company ownership information in one secure and
            centralized platform. Through this system, companies can accurately disclose
            their beneficial ownership details in compliance with the Companies Act and
            related regulations.
            <br />
            Designed and maintained by the Department of the Registrar of Companies, this
            online service promotes transparency, accountability, and corporate integrity
            across all registered entities. Log in using your ROC credentials to access
            company records, manage filings, and ensure your organization remains fully
            compliant with statutory requirements.
          </p>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin"
          class="bg-white rounded-xl p-6 sm:p-8 space-y-4 max-w-md md:ml-auto max-md:mx-auto w-full shadow-2xl">

          <h2 class="text-slate-900 text-2xl sm:text-3xl font-bold mb-6 text-center">Sign In</h2>

          <!-- Username -->
          <div>
            <label for="username" class="block text-gray-700 mb-1 font-medium">Username</label>
            <input type="text" id="username" v-model.trim="username" placeholder="Enter your ROC username"
              class="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-transparent transition" />
            <transition name="fade">
              <p v-if="errors.username" class="text-red-600 text-sm mt-1">{{ errors.username }}</p>
            </transition>
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-gray-700 mb-1 font-medium">Password</label>
            <div class="relative">
              <input :type="showPassword ? 'text' : 'password'" id="password" v-model.trim="password"
                placeholder="Enter your password"
                class="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-transparent transition" />
              <button type="button" @click="togglePassword"
                class="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-indigo-600">
                <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
              </button>
            </div>
            <transition name="fade">
              <p v-if="errors.password" class="text-red-600 text-sm mt-1">{{ errors.password }}</p>
            </transition>
          </div>

          <!-- Remember & Forgot -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm gap-2 sm:gap-0">
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="rememberMe" class="h-4 w-4 text-indigo-600" />
              <span class="ml-2 text-gray-700">Remember me</span>
            </label>
            <router-link to="/forgot-password" class="text-indigo-600 hover:underline">
              Forgot password?
            </router-link>
          </div>

          <!-- Login Button -->
          <button type="submit" class="login_btn">Login</button>

          <p class="mt-4 text-center text-gray-500 text-sm">
            Access the Beneficial Ownership Registration system using your eROC credentials.
          </p>

          <!-- Register Link -->
          <div class="mt-3 flex items-center justify-center gap-2 text-center">
            <p class="Register_Link text-gray-700 m-0">
              <a href="https://eroc.drc.gov.lk/" target="_blank" rel="noopener noreferrer" class="Hyper_link">
                Create New Account
              </a>
            </p>
            <a href="https://eroc.drc.gov.lk/" target="_blank" rel="noopener noreferrer">
              <img src="../../assets/img/eROC.png" alt="eROC Logo"
                class="w-14 h-14 object-contain hover:scale-105 transition-transform duration-200" />
            </a>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      rememberMe: false,
      showPassword: false,
      errors: {}
    };
  },
  mounted() {
    const rememberFlag = localStorage.getItem("rememberFlag");
    if (rememberFlag === "true") {
      this.username = localStorage.getItem("rememberedUsername") || "";
      this.password = localStorage.getItem("rememberedPassword") || "";
      this.rememberMe = true;
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    validateForm() {
      this.errors = {};
      if (!this.username) {
        this.errors.username = "Username is required.";
      } else if (/\s/.test(this.username)) {
        this.errors.username = "Username should not contain spaces.";
      }

      if (!this.password) {
        this.errors.password = "Password is required.";
      } else if (this.password.length < 6) {
        this.errors.password = "Password must be at least 6 characters.";
      }

      return Object.keys(this.errors).length === 0;
    },
    handleLogin() {
      if (!this.validateForm()) return;

      if (this.rememberMe) {
        localStorage.setItem("rememberedUsername", this.username);
        localStorage.setItem("rememberedPassword", this.password);
        localStorage.setItem("rememberFlag", "true");
      } else {
        localStorage.removeItem("rememberedUsername");
        localStorage.removeItem("rememberedPassword");
        localStorage.removeItem("rememberFlag");
      }
      // ✅ Save username for dashboard header
      localStorage.setItem("loggedInUser", this.username);

      // Redirect to main dashboard
      this.$router.push("/main-dashboard");
    }
  }
};
</script>

<style scoped>
/* fonts used in template (ensure you import these in index.html or main.css) */
h1,
h2 {
  font-family: 'Poppins', sans-serif;
}

/* Fade animation for error messages */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Background & layout */
.bg_color {
  background: linear-gradient(to right, #312e81, #3730a3, #0369a1);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* allow vertical scroll on small screens if content overflows */
  overflow-y: auto;
  padding: 1.5rem;
}

/* Ensure inner container can center content correctly */
.min-h-screen {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Inputs */
input:focus {
  outline: none;
}

input::placeholder {
  color: #9ca3af;
}

/* Left content description */
.Description {
  margin-top: 1rem;
  font-size: 17px;
  color: #e0e7ff;
  line-height: 1.6;
  text-align: justify;
  font-family: 'Tinos', serif;
  max-width: 530px;
  line-height: 1.8;
}

/* Heading/title */
.Heading {
  font-size: 33px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  font-family: 'Tinos', sans-serif;
  letter-spacing: 0.02em;
  margin-top: 20px;
}

/* Links */
.Hyper_link {
  color: #ff620d;
  font-weight: 600;
  margin-left: 0.3rem;
  font-size: 13px;
}

.Register_Link {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.2px;
}

/* Department name */
.dep_name {
  font-size: 20px;
  color: #fde7a0;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
  text-align: center;
  font-family: 'Tinos', serif;
}

/* Login button */
.login_btn {
  width: 100%;
  background-color: #4F46E5;
  height: 42px;
  color: #ffffff;
  padding: 0.3rem;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.15s ease;
}

.login_btn:hover {
  background-color: #4338CA;
  transform: translateY(-2px);
}

.login_btn:active {
  transform: translateY(0);
}

.login_btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.28);
}

/* Avatar circle for other views (keeps consistent style if reused) */
.header-avatar {
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
}

/* Make form and left column responsive */
@media (max-width: 768px) {
  .Heading {
    font-size: 24px;
  }

  .Description {
    font-size: 15px;
  }

  .dep_name {
    font-size: 18px;
  }
}
</style>
