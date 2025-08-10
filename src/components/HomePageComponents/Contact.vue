<template>
    <!-- Contact Us Section -->
    <section class="max-w-7xl mx-auto px-6 py-12 mt-30 md:py-1">
        <div id="contact" class="pt-20 -mt-5 bg-blue-100 rounded-lg p-8 shadow-inner">
            <h3 class="text-4xl font-bold text-blue-800 text-center mb-20">Contact Us</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <!-- Contact Information -->
                <div class="space-y-6">
                    <div class="flex items-center space-x-4">
                        <MapPin :size="28" class="text-blue-600" />
                        <div>
                            <p class="font-semibold text-lg text-gray-800">Address:</p>
                            <p class="text-gray-700">Municipal Hall, Real St., Bacacay, Albay, Philippines</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <PhoneCall :size="28" class="text-blue-600" />
                        <div>
                            <p class="font-semibold text-lg text-gray-800">Phone:</p>
                            <p class="text-gray-700">(052) 484-1234</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <Mail :size="28" class="text-blue-600" />
                        <div>
                            <p class="font-semibold text-lg text-gray-800">Email:</p>
                            <p class="text-gray-700">info@bacacay.gov.ph</p>
                        </div>
                    </div>
                </div>

                <!-- Map Placeholder -->
                <div class="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
                    <img src="/src/assets/bacacay-map.png"
                        alt="picture" class="w-full h-full object-cover" />
                    <!-- <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.3631799429677!2d123.7920179469798!3d13.293487187156545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1ab54417b6e83%3A0x595093fab33f14e!2s7QVV%2BV27%2C%20Marbella%20St%2C%20Bacacay%2C%204509%20Albay!5e0!3m2!1sen!2sph!4v1753932948772!5m2!1sen!2sph"
                        loading="lazy" r eferrerpolicy="no-referrer-when-downgrade" alt="Map of Bacacay"
                        class="w-full h-full object-cover">
                    </iframe> -->


                </div>
            </div>
        </div>
    </section>
</template>