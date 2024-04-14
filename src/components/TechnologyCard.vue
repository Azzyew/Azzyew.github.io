<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
  technology: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
});

const isHovered = ref(false);
const iconColor = computed(() => isHovered.value ? '#c2410c' : '#ffffff');
</script>

<template>
  <div
    class="w-72 px-8 py-2 rounded-md bg-orange-700 text-white space-x-3 flex justify-center items-center mt-24 mr-12 group bg-[linear-gradient(#fff_0_0)] bg-[length:0] bg-no-repeat duration-300 hover:bg-[length:100%]"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <box-icon type="logo" :name="props.iconName" :color="iconColor" size="lg"></box-icon>
    <span class="text-lg group-hover:text-orange-700">{{ props.technology }}</span>
  </div>
</template>