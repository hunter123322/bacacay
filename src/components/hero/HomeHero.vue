<script setup lang="ts">
import { ref } from 'vue';
import backgroundImage from '@/assets/main-background.jpg'
import LoginSignup from '@/components/loginSignup/LoginSignup.vue';

// Reactive state for mobile menu
const isMenuOpen = ref(false);

// Function to smoothly scroll to a section
const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        isMenuOpen.value = false; // Close menu after selection on mobile
    }
};
</script>

<template>
    <section class="flex">
        <div id="home" class="relative bg-cover bg-center h-screen w-screen flex items-center justify-center text-white"
            :style="{ backgroundImage: `url(${backgroundImage})` }">
            <div class="absolute inset-0 bg-black opacity-50"></div>
                <LoginSignup />
            <div class="relative z-10 text-center px-4">
                <h2 class="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                    Welcome to Bacacay
                </h2>
                <p class="mt-4 text-xl md:text-2xl font-light drop-shadow-lg">
                    A vibrant community, rich in culture and natural beauty.
                </p>
                <button @click="scrollToSection('about')"
                    class="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 animate-bounce cursor-pointer">
                    Learn More About Us
                </button>
            </div>
        </div>
    </section>
</template>