<script setup lang="ts">
import { ref } from 'vue';
import HomeHero from '@/components/hero/HomeHero.vue';
import Update from '@/components/HomePageComponents/Update.vue';
import News from '@/components/HomePageComponents/News.vue';
import AboutUs from '@/components/HomePageComponents/AboutUs.vue';
import Event from '@/components/HomePageComponents/Event.vue';
import Contact from '@/components/HomePageComponents/Contact.vue';
import Footer from '@/components/Footer.vue';
import HomeNav from '@/components/nav/HomeNav.vue';


// Reactive state for mobile menu
const isMenuOpen = ref(false);


</script>

<template>
  <div class="font-inter antialiased text-gray-800 bg-gray-50">
    <HomeNav />
    <HomeHero />
    <Update />
    <News />
    <AboutUs />
    <Event />
    <Contact />
    <Footer class="mt-30" />



  </div>
</template>
