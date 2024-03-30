<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
});

</script>

<template>
  <li>
    <a
      class="
        relative scroll-smooth
        after:bg-orange-600 after:absolute after:h-px after:w-full after:-bottom-1 after:left-0 after:scale-x-0 after:transition-transform after:duration-500
        hover:after:scale-x-100
      "
      :href="props.link"
    >{{ props.title }}</a>
  </li>
</template>
