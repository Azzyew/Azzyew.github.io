<script setup lang="ts">
const props = defineProps({
  school: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="w-full border-l border-r border-orange-700 text-center px-12 py-8 transition-colors duration-300 hover:bg-stone-900">
    <h3 class="font-regular text-xl">{{ props.school }}</h3>
    <span class="font-extralight text-lg tracking-wide text-orange-600">{{ props.course }}</span>
    <p class="font-extralight text-lg mb-4">{{ props.period }}</p>
  </div>
</template>
