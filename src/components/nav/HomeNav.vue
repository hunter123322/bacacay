<script setup lang="ts">
import { ref } from 'vue';
import { Home, Newspaper, Info, Calendar, Phone, Menu, X, LogIn, ChartAreaIcon } from 'lucide-vue-next';


// Reactive state for mobile menu
const isMenuOpen = ref(false);

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        isMenuOpen.value = false; // Close menu after selection on mobile
    }
};

const showLoginSignup = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        if (el.classList.contains('hidden')) {
            el.classList.remove('hidden');
            el.classList.add('flex');
            requestAnimationFrame(() => {
                el.classList.remove('translate-x-full');
                el.classList.add('translate-x-0');
            });
        } else {
            el.classList.remove('translate-x-0');
            el.classList.add('translate-x-full');
            el.classList.remove('flex');
            el.classList.add('hidden');
        }
    }
}
</script>

<template>
    <section class="bg-white shadow-md py-4 px-6 fixed w-full z-50">
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
                <div @click="showLoginSignup('dropDown')"
                    class="text-gray-600 hover:text-blue-600 font-medium transition duration-300 flex items-center space-x-1 w-23 cursor-pointer flex-col ">
                    <div class="flex flex-row space-x-2 items-center">
                        <Info :size="18" />
                        <span>About</span>
                    </div>
                    <div id="dropDown"
                        class="hidden absolute flex-col w-35 h-auto bg-white justify-center my-12 rounded-lg z-50">
                        <button @click="$router.push('/dataChart')"
                            class="text-gray-600 hover:text-blue-600 font-medium transition duration-300 flex w-full items-center space-x-1 px-1 cursor-pointer">
                            <ChartAreaIcon :size="18" />
                            <span>Chart</span>
                        </button>
                        <button @click="scrollToSection('about')"
                            class="text-gray-600 hover:text-blue-600 font-medium transition duration-300 flex w-full items-center space-x-1 px-1 cursor-pointer">
                            <Info :size="18" />
                            <span>About Us</span>
                        </button>

                    </div>
                </div>
                <button @click="scrollToSection('events')"
                    class="text-gray-600 hover:text-blue-600 font-medium transition duration-300 flex items-center space-x-1 cursor-pointer">
                    <Calendar :size="18" /> <span>Events</span>
                </button>
                <button @click="scrollToSection('contact')"
                    class="text-gray-600 hover:text-blue-600 font-medium transition duration-300 flex items-center space-x-1 cursor-pointer">
                    <Phone :size="18" /> <span>Contact</span>
                </button>
                <button @click="() => { showLoginSignup('auth'); scrollToSection('home') }"
                    class="text-gray-600 hover:text-blue-600 font-medium transition duration-300 flex items-center space-x-1 cursor-pointer w-30">
                    <LogIn :size="18" /> <span>Login Signup</span>
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
        <nav v-if="isMenuOpen"
            class="md:hidden bg-white mt-4 py-2 space-y-2 border-t border-gray-200 transition-all duration-300 ease-in-out">
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
            <button @click="$router.push('/auth')"
                class="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300 flex items-center space-x-2">
                <LogIn :size="18" /> <span>Login Signup</span>
            </button>

        </nav>
    </section>
</template>