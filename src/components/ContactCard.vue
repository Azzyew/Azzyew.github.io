<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
  contactName: {
    type: String,
    required: true,
  }
});

const isHovered = ref(false);
const iconColor = computed(() => isHovered.value ? '#ffffff' : '#c2410c');

</script>

<template>
  <a
    class="text-lg cursor-pointer w-72 px-8 py-2 rounded-md border border-orange-700 text-orange-700 flex justify-evenly items-center mt-24 group hover:border-white lg:mr-12"
    :href="props.url"
    target="_blank"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <box-icon type="logo" :name="props.iconName" :color="iconColor" size="lg"></box-icon>
    <span class="group-hover:text-white">{{ props.contactName }}</span>
  </a>
</template>

