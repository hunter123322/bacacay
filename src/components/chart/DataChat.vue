<template>
    <div class="max-w-7xl mx-auto px-6 py-12 mt-30 md:py-1">
        <h1 class="text-4xl sm:text-5xl font-bold text-blue-800 mb-8 text-center rounded-lg p-4">
            Bacacay Performance Indicators (2014-2024)
        </h1>

        <div v-if="loading" class="text-center text-blue-700 text-xl">Loading chart data...</div>
        <div v-else-if="error" class="text-center text-red-500 text-xl">Error loading data: {{ error }}</div>
        <div v-else class="max-w-7xl mx-auto bg-blue-200 rounded-lg lg:p-12">
            <!-- Single Chart Display Area -->
            <div class="bg-gray-800 rounded-xl shadow-lg p-6 max-h-100">
                <h2 class="text-2xl font-semibold text-blue-200 mb-4">{{ displayedChart.title }}</h2>
                <Line :data="displayedChart.data" :options="chartOptions" />
            </div>

            <!-- Navigation Buttons -->
            <div class="flex justify-between mt-6 px-6">
                <button @click="prevChart" :disabled="currentChartIndex === 0"
                    class="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    &larr; Previous
                </button>
                <button @click="nextChart" :disabled="currentChartIndex === allChartsData.length - 1"
                    class="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    Next &rarr;
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'; // Import ref and computed
import { Line } from 'vue-chartjs';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

// Import the new composable function
import { useBacacayChartData } from '@/assets/script/data.chart'; // Adjust path as needed

// Use the composable function to get all the reactive data and functions
const {
    loading,
    error,
    allChartsData, // Now we get allChartsData directly
    chartOptions,
} = useBacacayChartData();

// Reactive index to track the currently displayed chart
const currentChartIndex = ref(0);

// Computed property to get the chart data for the currently displayed chart
const displayedChart = computed(() => {
    // Ensure allChartsData is available before trying to access elements
    if (!allChartsData.value || allChartsData.value.length === 0) {
        return { title: 'No Data', data: { labels: [], datasets: [] } };
    }
    return allChartsData.value[currentChartIndex.value];
});

// Function to navigate to the next chart
const nextChart = () => {
    if (currentChartIndex.value < allChartsData.value.length - 1) {
        currentChartIndex.value++;
    }
};

// Function to navigate to the previous chart
const prevChart = () => {
    if (currentChartIndex.value > 0) {
        currentChartIndex.value--;
    }
};
</script>