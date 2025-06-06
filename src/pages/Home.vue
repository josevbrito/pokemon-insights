<template>
  <div class="home">
    <div class="container">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </div>
  </div>
</template>


<script lang="ts">
import HeroSection from '../components/home/HeroSection.vue'
import FeaturesSection from '../components/home/FeaturesSection.vue'
import StatsSection from '../components/home/StatsSection.vue'
import CTASection from '../components/home/CTASection.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    FeaturesSection,
    StatsSection,
    CTASection
  }
}
</script>

<style scoped>
/* ===== HOME SECTION ===== */
.home {
  flex: 1;
  padding: 2rem 0 0;
}

</style>