<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-center p-6">
    <!-- Animated Illustration -->
    <div class="w-64 mb-6 animate-bounce">
<img 
  src="../../assets/img/underconstruction.png" 
  alt="Under Construction" 
  class="w-48 sm:w-64 md:w-72 lg:w-80 mx-auto mb-6"
/>
    </div>

    <!-- Heading -->
    <h1 class="text-3xl font-bold text-gray-800 mb-2">
      Page Under Construction 🚧
    </h1>
    <p class="text-gray-600 mb-4 max-w-md">
      We're working hard to bring this feature online soon. Please check back later!
    </p>

    <!-- Countdown -->
    <div class="text-xl font-semibold text-blue-700 mb-6">
      <span>{{ countdown.days }}</span>d :
      <span>{{ countdown.hours }}</span>h :
      <span>{{ countdown.minutes }}</span>m :
      <span>{{ countdown.seconds }}</span>s
    </div>

    <!-- Back Button -->
    <router-link
      to="/"
      class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Go Back Home
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countdown: { days: 0, hours: 0, minutes: 0, seconds: 0 },
      targetDate: new Date().getTime() + 35 * 24 * 60 * 60 * 1000, // 35 days from now
    };
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      setInterval(() => {
        const now = new Date().getTime();
        const distance = this.targetDate - now;

        if (distance <= 0) {
          this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
          return;
        }

        this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.countdown.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.countdown.minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }, 1000);
    },
  },
};
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
