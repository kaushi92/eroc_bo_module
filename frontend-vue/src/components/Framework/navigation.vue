<template>
  <div>
    <nav class="navbar">
      <div class="nav-container">
        <!-- Logo + Department Name -->
        <router-link to="/" class="logo-group">
          <img
            src="../../assets/img/Logo_gov.png"
            alt="Sri Lanka Government Logo"
            class="logo-img"
          />
          <span class="dept-name">Department of Registrar of Companies</span>
        </router-link>

        <!-- Mobile menu toggle -->
        <button class="menu-btn" @click="toggleMenu">
          <svg
            v-if="!menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="menu-icon"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="menu-icon"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Menu Links -->
        <transition name="slide-fade">
          <div
            v-show="menuOpen || isDesktop"
            class="menu-container"
            id="navbar-default"
          >
            <ul>
              <li><router-link to="/landing-page" active-class="active">Home</router-link></li>
              <li><router-link to="/about" active-class="active">About</router-link></li>
              <li><router-link to="/services" active-class="active">Services</router-link></li>
              <li><router-link to="/pricing" active-class="active">Pricing</router-link></li>
              <li><router-link to="/contact" active-class="active">Contact</router-link></li>
            </ul>
          </div>
        </transition>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      isDesktop: window.innerWidth >= 768,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleResize() {
      this.isDesktop = window.innerWidth >= 768;
      if (this.isDesktop) this.menuOpen = false;
    },
  },
};
</script>

<style scoped>
/* --- Navbar Container --- */
.navbar {
  background-color: white;
  color: #111827;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-family: sans-serif;
  width: 100%;
  position: relative;
  z-index: 50;
}

/* --- Full-width flexible container --- */
.nav-container {
  width: 100%;
  max-width: 1800px; /* supports large screens */
  margin: 0 auto;
  padding: 0.75rem 3rem; /* spacious for large screens */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* --- Logo and Dept Name --- */
.logo-group {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
}

.logo-img {
  height: 64px;
  transition: height 0.3s ease;
}

.dept-name {
  font-family: "Tinos", serif;
  font-weight: 400;
  font-size: 1.4rem;
  transition: font-size 0.3s ease;
  letter-spacing: 0.02em;
}

/* --- Mobile Menu Button --- */
.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #4b5563;
  padding: 0.5rem;
  border-radius: 0.375rem;
}

.menu-icon {
  width: 1.75rem;
  height: 1.75rem;
}

/* --- Menu Links --- */
.menu-container {
  width: 100%;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem 0;
  margin: 0;
  text-align: center;
}

li a {
  text-decoration: none;
  color: #333;
  padding: 8px 14px;
  border-radius: 6px;
  transition: 0.3s ease;
  font-weight: 600;
  display: block;
}

li a:hover {
  color: #0a53a1;
}

li a.active {
  background-color: #007bff;
  color: #fff;
}

/* --- Animation --- */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* --- Responsive --- */
@media (min-width: 768px) {
  .menu-container {
    width: auto !important;
  }

  ul {
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    padding: 0;
  }

  .menu-btn {
    display: none;
  }

  .dept-name {
    font-size: 1.3rem;
  }
}

/* --- Large desktops (2K - 4K) --- */
@media (min-width: 1600px) {
  .nav-container {
    max-width: 2000px;
    padding: 1rem 6rem; /* more spacing on ultra-wide screens */
  }

  .logo-img {
    height: 80px;
  }

  .dept-name {
    font-size: 1.6rem;
  }

  ul li a {
    font-size: 1.05rem;
    padding: 10px 18px;
  }
}

/* --- Mobile --- */
@media (max-width: 767px) {
  .nav-container {
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
  }

  .logo-img {
    height: 48px;
  }

  .dept-name {
    font-size: 1rem;
  }

  ul {
    background-color: #f9fafb;
    border-radius: 8px;
  }
}

@media (max-width: 480px) {
  .dept-name {
    font-size: 0.9rem;
  }

  .logo-img {
    height: 42px;
  }
}
</style>
