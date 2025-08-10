 <template>
    <footer class="bg-gray-800 text-white py-8 px-6">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div class="mb-4 md:mb-0">
                <p>&copy; {{ new Date().getFullYear() }} Bacacay Municipality. All rights reserved.</p>
                <p class="text-sm text-gray-400">Powered by the People of Bacacay</p>
            </div>
            <div class="flex space-x-6">
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
                <a href="https://maps.app.goo.gl/FmPxDYiEVLE2jHV78"
                    class="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</a>
            </div>
            <div class="flex space-x-10 mt-4 md:mt-0">
                <a href="https://web.facebook.com/BacacayNewsOnline"
                    class="text-gray-400 hover:text-blue-400 transition-colors duration-300" aria-label="Facebook">
                    <Facebook :size="24" />
                </a>
                <a href="https://x.com/search?q=%23Bacacay&src=typed_query"
                    class="text-gray-400 hover:text-blue-400 transition-colors duration-300" aria-label="Twitter">
                    <Twitter :size="24" />
                </a>
                <a href="https://www.instagram.com/bacacay.info/"
                    class="text-gray-400 hover:text-blue-400 transition-colors duration-300" aria-label="Instagram">
                    <Instagram :size="24" />
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { Facebook, Twitter, Instagram } from 'lucide-vue-next';
</script>