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
  <div class="w-full flex items-center even:flex-row-reverse">
    <div class="w-[49%] border border-orange-700 rounded-md px-12 py-8 transition-colors duration-300 hover:bg-stone-900">
      <h3 class="font-semibold text-lg">{{ props.company }}</h3>
      <span class="font-extralight tracking-wide text-orange-600">{{ props.jobTitle }}</span>
      <p class="font-extralight mb-4">{{ props.period }}</p>
      <slot name="description"></slot>
    </div>
    <div class="w-[51%] space-x-4 flex justify-center">
      <slot name="stack"></slot>
    </div>
  </div>
</template>
