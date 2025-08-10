<template>
  <div class="flex-row mt-6 text-center space-x-5">
    <button @click="showMore" v-if="hasMore"
      class="bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
      <ArrowDown size="20" />
    </button>
    <button @click="showLess"
      class="bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
      <ArrowUp size="20" />
    </button>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { ArrowDown, ArrowUp } from 'lucide-vue-next'

const showMore = inject('showMore')
const showLess = inject('showLess')
const hasMore = inject('hasMore')
</script>
