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
  <section class="mt-12 p-16 flex flex-col items-center min-h-dvh w-full">
    <h2
      class="
        text-2xl text-orange-600 font-light tracking-wider relative w-fit
        after:bg-orange-600 after:absolute after:h-px after:w-full after:-bottom-1 after:left-0 after:scale-x-0 after:transition-transform after:duration-500  
      "
      :class="{ 'animate-fadeIn after:scale-x-100': props.isOnScreen }"
      :id="$props.idName"
    >{{ props.title }}</h2>
    <div class="mt-12 flex flex-col space-y-4">
      <slot></slot>
    </div>
  </section>
</template>