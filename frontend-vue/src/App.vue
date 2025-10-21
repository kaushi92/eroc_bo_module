<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <Header v-if="!isBOPage" />

    <!-- Main content -->
    <main class="flex-grow mt-4">
      <router-view /> <!-- Dashboard will render here automatically -->
    </main>

    <!-- Footer -->
    <Footer v-if="!isBOPage" />
  </div>
</template>

<script>
import Header from './components/Framework/Header.vue'
import Footer from './components/Framework/Footer.vue'
export default {
  components: { Header, Footer },
  computed: {
    isBOPage() {
      // Hide Header/Footer on Login, UnderConstruction, BeneficialOwnership, and dashboard_bo routes
      const hiddenRoutes = [
        '/login',
        '/under-construction',
        '/beneficial-ownership-dashboard',
        '/dashboard_bo'
      ]
      return hiddenRoutes.some(path => this.$route.path.startsWith(path))
    }
  }
}
</script>
