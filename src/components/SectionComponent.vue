<script setup lang="ts">
const props = defineProps({
  isOnScreen: {
    type: Boolean,
    required: true,
  },
  idName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <section class="p-16 flex flex-col items-center">
    <h2
      class="
        text-2xl text-orange-600 font-light tracking-wider relative w-fit
        after:bg-orange-600 after:absolute after:h-px after:w-full after:-bottom-1 after:left-0 after:scale-x-0 after:transition-transform after:duration-500  
      "
      :class="{ 'animate-fadeIn after:scale-x-100': props.isOnScreen }"
      :id="$props.idName"
    >{{ props.title }}</h2>
    <p class="mt-12">
      <slot></slot>
    </p>
  </section>
</template>