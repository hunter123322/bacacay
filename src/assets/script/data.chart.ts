import { ref, computed, onMounted } from 'vue';
import type { ChartData, ChartOptions } from 'chart.js';

// Define the interface for the raw data from JSON, matching your Bacacay.json structure
interface IndicatorData {
    'title': string; // Corrected key based on your JSON output
    [year: string]: number | string | null; // Years as keys, values can be number, string ('-'), or null
}

// Define the type for a single Chart.js dataset
export type ChartDataset = {
    label: string;
    data: (number | null)[];
    borderColor: string;
    backgroundColor: string;
    tension: number;
    pointRadius?: number; // Optional as not all datasets might have it
    pointBackgroundColor: string;
    pointBorderColor?: string;
    pointHoverBackgroundColor?: string;
    pointHoverBorderColor?: string;
};

/**
 * Composable function to fetch and process Bacacay performance indicator data for Chart.js.
 * @returns An object containing reactive chart data, loading state, error state, and chart options.
 */
export function useBacacayChartData() {
    const rawData = ref<IndicatorData[] | null>(null);
    const loading = ref(true);
    const error = ref<string | null>(null);

    // Function to fetch data from Bacacay.json, runs when the component using this composable is mounted
    onMounted(async () => {
        try {
            // Assuming Bacacay.json is in the public folder and accessible via root path
            const response = await fetch('/src/assets/bacacayData.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            rawData.value = await response.json();
        } catch (e: any) {
            console.error('Failed to load Bacacay.json:', e);
            error.value = e.message;
        } finally {
            loading.value = false;
        }
    });

    // Extract years from the data (assuming consistent year columns)
    const years = computed<string[]>(() => {
        if (!rawData.value || rawData.value.length === 0) return [];
        // Get all keys except the indicator name, then filter to only years (numeric keys)
        const allKeys = Object.keys(rawData.value[0]);
        return allKeys
            .filter(key => !isNaN(parseInt(key)) && key !== 'title')
            .sort((a, b) => parseInt(a) - parseInt(b)); // Sort years numerically
    });

    // Helper function to get data for a specific indicator by its 'PILLAR / INDICATOR' name
    const getIndicatorValues = (indicatorName: string): (number | null)[] => {
        if (!rawData.value) return [];
        const indicatorRow = rawData.value.find(row => row['title'].trim() === indicatorName.trim());
        if (!indicatorRow) return [];

        return years.value.map(year => {
            const value = indicatorRow[year];
            // Convert '-' or other non-numeric strings to null
            return typeof value === 'number' ? value : null;
        });
    };

    // Chart options (common for all line charts)
    const chartOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#E0F2F7',
                },
            },
            tooltip: {
                backgroundColor: 'rgba(30, 58, 138, 0.9)',
                titleColor: '#E0F2F7',
                bodyColor: '#FFFFFF',
                borderColor: '#60A5FA',
                borderWidth: 1,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',
                    color: '#E0F2F7',
                },
                ticks: {
                    color: '#9CA3AF',
                },
                grid: {
                    color: 'rgba(156, 163, 175, 0.2)',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Score',
                    color: '#E0F2F7',
                },
                ticks: {
                    color: '#9CA3AF',
                },
                grid: {
                    color: 'rgba(156, 163, 175, 0.2)',
                },
            },
        },
    };

    // Define a mapping of indicator names to their desired chart dataset properties
    // This replaces your hardcoded 'data' array and individual computed properties
    const indicatorConfigs = ref([
        { name: 'Overall Score', borderColor: '#60A5FA', backgroundColor: 'rgba(96, 165, 250, 0.2)' },
        { name: 'Economic Dynamism', borderColor: '#3B82F6', backgroundColor: 'rgba(59, 130, 246, 0.2)' },
        { name: 'Government Efficiency', borderColor: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.2)' },
        { name: 'Infrastructure', borderColor: '#F97316', backgroundColor: 'rgba(249, 115, 22, 0.2)' },
        { name: 'Resiliency', borderColor: '#EF4444', backgroundColor: 'rgba(239, 68, 68, 0.2)' },
        { name: 'Innovation', borderColor: '#A855F7', backgroundColor: 'rgba(168, 85, 247, 0.2)' },
        { name: 'Local Economy Size', borderColor: '#22D3EE', backgroundColor: 'rgba(34, 211, 238, 0.1)' },
        { name: 'Local Economy Growth', borderColor: '#FACC15', backgroundColor: 'rgba(250, 204, 21, 0.1)' },
        { name: 'Active Establishments in the Locality', borderColor: '#14B8A6', backgroundColor: 'rgba(20, 184, 166, 0.1)' },
        { name: 'Safety Compliant Business', borderColor: '#EC4899', backgroundColor: 'rgba(236, 72, 153, 0.1)' },
        { name: 'Employment Generation', borderColor: '#0EA5E9', backgroundColor: 'rgba(14, 165, 233, 0.1)' },
        { name: 'Cost of Living', borderColor: '#E11D48', backgroundColor: 'rgba(225, 29, 72, 0.1)' },
        { name: 'Cost of Doing Business', borderColor: '#16A34A', backgroundColor: 'rgba(22, 163, 74, 0.1)' },
        { name: 'Financial Deepening', borderColor: '#7C3AED', backgroundColor: 'rgba(124, 58, 237, 0.1)' },
        { name: 'Productivity', borderColor: '#F43F5E', backgroundColor: 'rgba(244, 63, 94, 0.1)' },
        { name: 'Presence of Business and Professional Organizations', borderColor: '#3B82F6', backgroundColor: 'rgba(59, 130, 246, 0.1)' },
        { name: 'Compliance to National Directives', borderColor: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)' },
        { name: 'Presence of Investment Promotion Unit', borderColor: '#6366F1', backgroundColor: 'rgba(99, 102, 241, 0.1)' },
        { name: 'Compliance to ARTA Citizens Charter', borderColor: '#F97316', backgroundColor: 'rgba(249, 115, 22, 0.1)' },
        { name: 'Capacity to Generate Local Resource', borderColor: '#EF4444', backgroundColor: 'rgba(239, 68, 68, 0.1)' },
        { name: 'Capacity of Health Services', borderColor: '#8B5CF6', backgroundColor: 'rgba(139, 92, 246, 0.1)' },
        { name: 'Capacity of School Services', borderColor: '#22D3EE', backgroundColor: 'rgba(34, 211, 238, 0.1)' },
        { name: 'Recognition of Performance', borderColor: '#FACC15', backgroundColor: 'rgba(250, 204, 21, 0.1)' },
        { name: 'Getting Business Permits', borderColor: '#14B8A6', backgroundColor: 'rgba(20, 184, 166, 0.1)' },
        { name: 'Peace and Order', borderColor: '#EC4899', backgroundColor: 'rgba(236, 72, 153, 0.1)' },
        { name: 'Social Protection', borderColor: '#0EA5E9', backgroundColor: 'rgba(14, 165, 233, 0.1)' },
        { name: 'Road Network', borderColor: '#E11D48', backgroundColor: 'rgba(225, 29, 72, 0.1)' },
        { name: 'Distance to Ports', borderColor: '#16A34A', backgroundColor: 'rgba(22, 163, 74, 0.1)' },
        { name: 'Availability of Basic Utilities', borderColor: '#7C3AED', backgroundColor: 'rgba(124, 58, 237, 0.1)' },
        { name: 'Transportation Vehicles', borderColor: '#F43F5E', backgroundColor: 'rgba(244, 63, 94, 0.1)' },
        { name: 'Education', borderColor: '#3B82F6', backgroundColor: 'rgba(59, 130, 246, 0.1)' },
        { name: 'Health', borderColor: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)' },
        { name: 'LGU Investment', borderColor: '#6366F1', backgroundColor: 'rgba(99, 102, 241, 0.1)' },
        { name: 'Accommodation Capacity', borderColor: '#F97316', backgroundColor: 'rgba(249, 115, 22, 0.1)' },
        { name: 'Information Technology Capacity', borderColor: '#EF4444', backgroundColor: 'rgba(239, 68, 68, 0.1)' },
        { name: 'Financial Technology Capacity', borderColor: '#8B5CF6', backgroundColor: 'rgba(139, 92, 246, 0.1)' },
        { name: 'Land Use Plan', borderColor: '#22D3EE', backgroundColor: 'rgba(34, 211, 238, 0.1)' },
        { name: 'Disaster Risk Reduction Plan', borderColor: '#FACC15', backgroundColor: 'rgba(250, 204, 21, 0.1)' },
        { name: 'Annual Disaster Drill', borderColor: '#14B8A6', backgroundColor: 'rgba(20, 184, 166, 0.1)' },
        { name: 'Early Warning System', borderColor: '#EC4899', backgroundColor: 'rgba(236, 72, 153, 0.1)' },
        { name: 'Budget for DRRMP', borderColor: '#0EA5E9', backgroundColor: 'rgba(14, 165, 233, 0.1)' },
        { name: 'Local Risk Assessments', borderColor: '#E11D48', backgroundColor: 'rgba(225, 29, 72, 0.1)' },
        { name: 'Emergency Infrastructure', borderColor: '#16A34A', backgroundColor: 'rgba(22, 163, 74, 0.1)' },
        { name: 'Utilities', borderColor: '#7C3AED', backgroundColor: 'rgba(124, 58, 237, 0.1)' },
        { name: 'Employed Population', borderColor: '#F43F5E', backgroundColor: 'rgba(244, 63, 94, 0.1)' },
        { name: 'Sanitary System', borderColor: '#3B82F6', backgroundColor: 'rgba(59, 130, 246, 0.1)' },
        { name: 'ICT Plan', borderColor: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)' },
        { name: 'Innovation Financing: R&D Expenditures Allotment', borderColor: '#6366F1', backgroundColor: 'rgba(99, 102, 241, 0.1)' },
        { name: 'ICT Use: E-BPLS Software', borderColor: '#F97316', backgroundColor: 'rgba(249, 115, 22, 0.1)' },
        { name: 'Online Payment Facilities', borderColor: '#EF4444', backgroundColor: 'rgba(239, 68, 68, 0.1)' },
        { name: 'STEM graduates', borderColor: '#8B5CF6', backgroundColor: 'rgba(139, 92, 246, 0.1)' },
        { name: 'Intellectual Property Registration', borderColor: '#22D3EE', backgroundColor: 'rgba(34, 211, 238, 0.1)' },
        { name: 'Internet Capability', borderColor: '#FACC15', backgroundColor: 'rgba(250, 204, 21, 0.1)' },
        { name: 'Availability of Basic Internet Service', borderColor: '#14B8A6', backgroundColor: 'rgba(20, 184, 166, 0.1)' },
        { name: 'Start Up and Innovation Facilities', borderColor: '#EC4899', backgroundColor: 'rgba(236, 72, 153, 0.1)' },
        { name: 'New Technology', borderColor: '#0EA5E9', backgroundColor: 'rgba(14, 165, 233, 0.1)' },
    ]);

    // Computed property to generate all chart data objects
    const allChartsData = computed<Array<{ title: string; data: ChartData<'line'> }>>(() => {
        if (!rawData.value) return [];

        return indicatorConfigs.value.map(config => {
            const dataset: ChartDataset = {
                label: config.name,
                data: getIndicatorValues(config.name),
                borderColor: config.borderColor,
                backgroundColor: config.backgroundColor,
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: config.borderColor, // Use borderColor for point background
                pointBorderColor: '#FFFFFF',
                pointHoverBackgroundColor: '#FFFFFF',
                pointHoverBorderColor: config.borderColor,
            };

            return {
                title: `${config.name} Trend`, // Add "Trend" to the title for display
                data: {
                    labels: years.value,
                    datasets: [dataset],
                },
            };
        });
    });

    return {
        loading,
        error,
        allChartsData, // Export the array of all chart data objects
        chartOptions,
    };
}
