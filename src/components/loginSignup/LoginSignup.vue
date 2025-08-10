<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import { ref, reactive } from 'vue';

// --- State Management ---
// Controls which form is currently visible
const isLoginView = ref(true);

// Reactive object to store login form data
const loginForm = reactive({
    email: '',
    password: '',
});

// Reactive object to store signup form data
const signupForm = reactive({
    email: '',
    password: '',
    confirmPassword: '',
});

// --- Form Submission Handlers ---
// Handles the login form submission
const handleLogin = () => {
    // In a real application, you would send this data to an API
    console.log('Logging in with:', loginForm);
    alert(`Attempting to log in with email: ${loginForm.email}`);
};

// Handles the signup form submission
const handleSignup = () => {
    if (signupForm.password !== signupForm.confirmPassword) {
        alert('Error: Passwords do not match!');
        return;
    }
    // In a real application, you would send this data to a signup API
    console.log('Signing up with:', signupForm);
    alert(`Attempting to sign up with email: ${signupForm.email}`);
};

const hideLoginSignupPanel = () => {
    const el = document.getElementById('auth')
    if (el) {
        el.classList.remove('translate-x-0')
        el.classList.add('translate-x-full')
        setTimeout(() => {
            el.classList.add('hidden')
        }, 50) // match your duration-500
    }
}
</script>

<template>
    <!-- Main container for the component -->
    <div id="auth"
        class="hidden absolute right-0 flex-col items-center justify-center min-h-screen md:w-1/3 bg-gray-100/80 pt-30 rounded-lg transition-transform duration-500 transform translate-x-1.1 overflow-hidden">

        <!-- Card container for the form -->
        <div
            class="w-full max-w-sm p-8 bg-white rounded-2xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] disabled:opacity-80">
            <!-- Login Form (Visible when isLoginView is true) -->
            <div v-if="isLoginView" class="animate-fade-in-up">
                <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h2>
                <form @submit.prevent="handleLogin" class="space-y-6">
                    <div>
                        <label for="login-email" class="block text-sm font-medium text-gray-700">Email address</label>
                        <input id="login-email" type="email" v-model="loginForm.email" placeholder="you@example.com"
                            required
                            class="text-gray-950 mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" />
                    </div>
                    <div>
                        <label for="login-password" class="block text-sm font-medium text-gray-700">Password</label>
                        <input id="login-password" type="password" v-model="loginForm.password" placeholder="••••••••"
                            required
                            class="text-gray-950 mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" />
                    </div>
                    <button type="submit"
                        class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">
                        Sign in
                    </button>
                </form>
                <div class="mt-6 text-center">
                    <p class="text-sm text-gray-600">
                        Don't have an account?
                        <a @click.prevent="isLoginView = false" href="#"
                            class="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>

            <!-- Signup Form (Visible when isLoginView is false) -->
            <div v-else class="animate-fade-in-up">
                <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">
                    Create Account
                </h2>
                <form @submit.prevent="handleSignup" class="space-y-6">
                    <div>
                        <label for="signup-email" class="block text-sm font-medium text-gray-700">Email address</label>
                        <input id="signup-email" type="email" v-model="signupForm.email" placeholder="you@example.com"
                            required
                            class="text-gray-950 mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" />
                    </div>
                    <div>
                        <label for="signup-password" class="block text-sm font-medium text-gray-700">Password</label>
                        <input id="signup-password" type="password" v-model="signupForm.password" placeholder="••••••••"
                            required
                            class="text-gray-950 mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" />
                    </div>
                    <div>
                        <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm
                            Password</label>
                        <input id="confirm-password" type="password" v-model="signupForm.confirmPassword"
                            placeholder="••••••••" required
                            class="text-gray-950 mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" />
                    </div>
                    <button type="submit"
                        class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">
                        Create account
                    </button>
                </form>
                <div class="mt-6 text-center">
                    <p class="text-sm text-gray-600">
                        Already have an account?
                        <a @click.prevent="isLoginView = true" href="#"
                            class="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <button @click="hideLoginSignupPanel()"
            class="text-red-700 p-2.5 bg-gray-50 m-5 flex flex-row rounded-lg hover:text-white hover:bg-red-500 transition duration-300">
            <ArrowRight :size="20" />

        </button>
    </div>
</template>