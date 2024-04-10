<script setup lang="ts">
const props = defineProps({
  company: {
    type: String,
    required: true,
  },
  jobTitle: {
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
  <div class="border border-orange-700 rounded-md px-12 py-8 w-[50%] odd:self-start even:self-end">
    <h3 class="font-semibold text-lg">{{ props.company }}</h3>
    <span class="font-extralight tracking-wide text-orange-600">{{ props.jobTitle }}</span>
    <p class="font-extralight mb-4">{{ props.period }}</p>
    <slot></slot>
  </div>
</template>
