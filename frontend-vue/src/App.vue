<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <Header v-if="showHeaderFooter" />

    <!-- Main content -->
    <main class="flex-grow">
      <router-view /> <!-- Dashboard or other pages render here -->
    </main>

    <!-- Footer -->
    <Footer v-if="showHeaderFooter" />
  </div>
</template>

<script>
import Header from './components/Framework/Header.vue'
import Footer from './components/Framework/Footer.vue'

export default {
  components: { Header, Footer },
  computed: {
    showHeaderFooter() {
      // Only show header/footer for dashboard route
      return this.$route.path.startsWith('/main-dashboard')
    }
  }
}
</script>
