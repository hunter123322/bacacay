<script setup lang="ts">
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

// Import the composable
import { useBacacayChartData } from '@/assets/script/data.chart';
import Footer from '@/components/Footer.vue';
import { ArrowBigLeft } from 'lucide-vue-next';

const { loading, error, allChartsData, chartOptions } = useBacacayChartData();
</script>

<template>
    <div @click="$router.push('/')" class="flex flex-row bg-blue-500 w-25 h-auto p-2 m-2 rounded-2xl hover:bg-blue-700 transition duration-300 cursor-pointer">
       <ArrowBigLeft />
       <span>Home</span>
    </div>
    <div class="w-full p-6 mt-20 md:py-1">
        <h1 class="text-4xl sm:text-5xl font-bold text-blue-800 mb-8 text-center rounded-lg p-4">
            Bacacay Performance Indicators (2014-2024)
        </h1>

        <div v-if="loading" class="text-center text-blue-700 text-xl">
            Loading chart data...
        </div>
        <div v-else-if="error" class="text-center text-red-500 text-xl">
            Error loading data: {{ error }}
        </div>
        <div v-else class="w-full bg-blue-200 rounded-lg lg:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Loop through and display all charts -->
            <div v-for="(chart, index) in allChartsData" :key="index"
                class="bg-gray-800 rounded-xl shadow-lg p-6 max-h-120 transition duration-300 hover:-translate-y-2 cursor-pointer">
                <h2 class="text-xl font-semibold text-blue-200 mb-4">{{ chart.title }}</h2>
                <Line :data="chart.data" :options="chartOptions" />
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center h-20 bg-blue-400">
        <span>All data represented from: </span>
        <a href="https://cmci.dti.gov.ph/lgu-profile.php?lgu=Bacacay&year=2021"
            class="font-bold ml-2">@cmci.dti.gov.ph</a>
    </div>
    <Footer />
</template>
