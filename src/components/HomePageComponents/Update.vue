<template>
    <section class="max-w-7xl mx-auto px-6 py-12 mt-30 md:py-1">
        <div id="updates" class="mb-16 md:mb-5 pt-20 bg-blue-50 rounded-lg p-8 shadow-inner">
            <h3 class="text-4xl font-bold text-blue-800 text-center mb-10">Latest Updates</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(update, index) in visibleUpdates" :key="index"
                    class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <h4 class="text-xl font-semibold text-blue-700 mb-2">{{ update.title }}</h4>
                    <p class="text-gray-600 text-sm mb-4">{{ update.date }}</p>
                    <p class="text-gray-700 leading-relaxed">{{ update.info }}</p>
                    <a href="#UpdatePage" @click="isUpdateVisible = true"
                        class="text-blue-600 hover:underline mt-auto pt-4">
                        Read More
                    </a>

                </div>
            </div>
            <div>
                <ShowMore />
            </div>
        </div>
    </section>
</template>

<script setup>
import { provide } from 'vue'
import updates from '@/assets/script/update'
import { useShowMoreCards } from '@/assets/script/show.more'

// Components
import ShowMore from '../showMore/ShowMore.vue'

// Function
const { visibleUpdates, hasMore, showMore, showLess } = useShowMoreCards(updates)

// Provide
provide('visibleUpdates', visibleUpdates)
provide('hasMore', hasMore)
provide('showMore', showMore)
provide('showLess', showLess)
</script>
