<script setup lang="ts">
import { ref } from 'vue';
import { Home, Newspaper, Info, Calendar, Phone, Menu, X, MapPin, Mail, PhoneCall, Facebook, Twitter, Instagram} from 'lucide-vue-next'; // Import from lucide-vue-next
import backgroundImage from '@/assets/main-background.jpg'

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
  <div class="font-inter antialiased text-gray-800 bg-gray-50">
    <header class="bg-white shadow-md py-4 px-6 fixed w-full z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <img src="@/assets/bacacay-logo.jpg" class="w-1/15" />
          <h1 class="text-2xl font-bold text-blue-800">Bacacay Municipality</h1>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <button @click="scrollToSection('home')"
            class="text-gray-600 hover:text-blue-600 font-medium transition duration-300 flex items-center space-x-1 cursor-pointer">
            <Home :size="18" /> <span>Home</span>
          </button>
          <button @click="scrollToSection('updates')"
            class="text-gray-600 hover:text-blue-600 font-medium transition duration-300 flex items-center space-x-1 cursor-pointer">
            <Newspaper :size="18" /> <span>Updates</span>
          </button>
          <button @click="scrollToSection('news')"
            class="text-gray-600 hover:text-blue-600 font-medium transition duration-300 flex items-center space-x-1 cursor-pointer">
            <Newspaper :size="18" /> <span>News</span>
          </button>
          <button @click="scrollToSection('about')"
            class="text-gray-600 hover:text-blue-600 font-medium transition duration-300 flex items-center space-x-1 w-23 cursor-pointer">
            <Info :size="18" /> <span>About Us</span>
          </button>
          <button @click="scrollToSection('events')"
            class="text-gray-600 hover:text-blue-600 font-medium transition duration-300 flex items-center space-x-1 cursor-pointer">
            <Calendar :size="18" /> <span>Events</span>
          </button>
          <button @click="scrollToSection('contact')"
            class="text-gray-600 hover:text-blue-600 font-medium transition duration-300 flex items-center space-x-1 cursor-pointer">
            <Phone :size="18" /> <span>Contact</span>
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-600 hover:text-blue-600 focus:outline-none">
            <X v-if="isMenuOpen" :size="28" />
            <Menu v-else :size="28" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <nav v-if="isMenuOpen" class="md:hidden bg-white mt-4 py-2 space-y-2 border-t border-gray-200">
        <button @click="scrollToSection('home')"
          class=" w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300 flex items-center space-x-2">
          <Home :size="18" /> <span>Home</span>
        </button>
        <button @click="scrollToSection('updates')"
          class=" w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300 flex items-center space-x-2">
          <Newspaper :size="18" /> <span>Updates</span>
        </button>
        <button @click="scrollToSection('news')"
          class=" w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300 flex items-center space-x-2">
          <Newspaper :size="18" /> <span>News</span>
        </button>
        <button @click="scrollToSection('about')"
          class=" w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300 flex items-center space-x-2">
          <Info :size="18" /> <span>About Us</span>
        </button>
        <button @click="scrollToSection('events')"
          class=" w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300 flex items-center space-x-2">
          <Calendar :size="18" /> <span>Events</span>
        </button>
        <button @click="scrollToSection('contact')"
          class=" w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300 flex items-center space-x-2">
          <Phone :size="18" /> <span>Contact</span>
        </button>
      </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
      :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 text-center px-4">
        <h2 class="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Welcome to Bacacay
        </h2>
        <p class="mt-4 text-xl md:text-2xl font-light drop-shadow-lg">
          A vibrant community, rich in culture and natural beauty.
        </p>
        <button @click="scrollToSection('about')"
          class="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
          Learn More About Us
        </button>
      </div>
    </section>
  </div>
</template>
