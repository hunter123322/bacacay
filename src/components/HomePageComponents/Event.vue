<template>
    <section class="max-w-7xl mx-auto px-6 py-12 mt-30 md:py-1">
        <div id="events" class="mb-16 md:mb-5 pt-20 -mt-10 bg-blue-50 rounded-lg p-8 shadow-inner">
            <h3 class="text-4xl font-bold text-blue-800 text-center mb-10">Upcoming Events</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Event Card 1 -->
                <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div class="flex items-center space-x-4 mb-4">
                        <Calendar :size="32" class="text-blue-600" />
                        <div>
                            <h4 class="text-xl font-semibold text-blue-700">Coastal Clean-up Drive</h4>
                            <p class="text-gray-600 text-sm">August 10, 2025 | 7:00 AM - 12:00 PM</p>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed">
                        Join us in our effort to preserve Bacacay's beautiful coastlines. Meeting point: Bacacay
                        Public Beach. Volunteers are welcome!
                    </p>
                </div>
                <!-- Event Card 2 -->
                <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div class="flex items-center space-x-4 mb-4">
                        <Calendar :size="32" class="text-blue-600" />
                        <div>
                            <h4 class="text-xl font-semibold text-blue-700">Livelihood Training Workshop</h4>
                            <p class="text-gray-600 text-sm">August 22-24, 2025 | 9:00 AM - 4:00 PM</p>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed">
                        A free workshop on various livelihood skills (e.g., handicraft making, baking) for
                        interested residents. Venue: Municipal Training Center.
                    </p>
                </div>
                <!-- Event Card 3 -->
                <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div class="flex items-center space-x-4 mb-4">
                        <Calendar :size="32" class="text-blue-600" />
                        <div>
                            <h4 class="text-xl font-semibold text-blue-700">
                                Bacacay Inter-Barangay Basketball League
                            </h4>
                            <p class="text-gray-600 text-sm">Starts September 1, 2025</p>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed">
                        Cheer for your favorite barangay as teams compete for the championship title. Games will
                        be held at Bacacay Sports Complex.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
