<template>
  <div class="bg_color">
    <div class="min-h-screen flex flex-col items-center justify-center p-6">
      <div class="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">

        <!-- Left Content -->
        <div class="max-w-lg max-md:mx-auto max-md:text-center">
          <!-- Logo -->
          <img src="../../assets/img/Logo_gov.png" alt="ROC Logo" class="w-16 sm:w-24 mb-3 mx-auto block" />

          <!-- Department Name -->
          <p class="dep_name">
            Department of Registrar of Companies
          </p>

          <!-- Heading -->
          <h1 class="Heading">
            Beneficial Ownership Registration
          </h1>

          <!-- Description -->
          <p class="Description">
            Easily register, update, and manage beneficial ownership details for companies.
            Ensure compliance with regulatory requirements and maintain transparency in company ownership records.
            Securely log in using your ROC credentials.
          </p>

          <!-- Register Link -->
          <p class="Register_Link">
            New to the system?
            <router-link to="/register" class="Hyper_link">
              Register here
            </router-link>
          </p>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin"
          class="bg-white rounded-xl p-6 sm:p-8 space-y-4 max-w-md md:ml-auto max-md:mx-auto w-full shadow-2xl">

          <h2 class="text-slate-900 text-2xl sm:text-3xl font-bold mb-6">
            Sign In
          </h2>

          <!-- Username -->
          <div>
            <label for="username" class="block text-gray-700 mb-1 font-medium">Username</label>
            <input type="text" id="username" v-model="username" placeholder="Enter your ROC username" required
              class="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-transparent transition" />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-gray-700 mb-1 font-medium">Password</label>
            <input type="password" id="password" v-model="password" placeholder="Enter your password" required
              class="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-transparent transition" />
          </div>

          <!-- Remember & Forgot -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm gap-2 sm:gap-0">
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="rememberMe" class="h-4 w-4 text-indigo-600">
              <span class="ml-2 text-gray-700">Remember me</span>
            </label>
            <router-link to="/forgot-password" class="text-indigo-600 hover:underline">
              Forgot password?
            </router-link>
          </div>

          <!-- Login Button -->
          <button type="submit" class="login_btn">
            Login
          </button>

          <!-- Info Note -->
          <p class="mt-4 text-center text-gray-500 text-sm">
            Access the Beneficial Ownership Registration system using your ROC credentials.
          </p>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
    };
  },
  methods: {
    handleLogin() {
      if (this.username && this.password) {
        this.$router.push({
          path: `/dashboard_bo/${this.username}`  // redirect to dashboard with username
        });
      } else {
        alert('Please enter your username and password');
      }
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-family: 'Poppins', sans-serif;
}

.bg_color {
  background: linear-gradient(to right, #312e81, #3730a3, #0369a1);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: #9ca3af;
}

.Register_Link {
  margin-top: 2rem;
  font-size: 14px;
  color: #ffffff;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.2px;

}

.Description {
  margin-top: 1rem;
  font-size: 17px;
  color: #e0e7ff;
  line-height: 1.6;
  text-align: justify;
  font-family: 'tinos', serif;
  font-style: normal;
  font-weight: 400;
}

.Heading {
  font-size: 34px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  font-family: 'tinos', sans-serif;
  letter-spacing: 0.01em;
  margin-top: 30px;
  ;
}

.Hyper_link {
  color: #FCD34D;
  font-weight: 600;
  text-decoration: underline;
  margin-left: 0.3rem;
}

.dep_name {
  font-size: 20px;
  color: #fde7a0;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
  text-align: center;
  font-family: 'tinos', serif;
}

.login_btn {
  width: 100%;
  background-color: #4F46E5;
  /* Indigo-600 */
  height: 42px;
  color: #ffffff;
  padding: 0.3rem;
  font-size: 1.125rem;
  /* 18px */
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  /* 8px */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.15s ease;
}

.login_btn:hover {
  background-color: #4338CA;
  /* Indigo-700 */
  transform: translateY(-2px);
}

.login_btn:active {
  transform: translateY(0);
}

.login_btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.5);
  /* Indigo-500 */
}
</style>
