<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
  displayText: {
    type: String,
    required: true,
  }
});

const typeValue = ref("");
const typeStatus = ref(false);
const typingSpeed = ref(100);
const erasingSpeed = ref(100);
const newTextDelay = ref(2000);
const charIndex = ref(0);
const fontIndex = ref(0);

const fontClasses = ['font-poppins', 'font-mplus', 'font-playfairD', 'font-cantataOne'];

const handleFont = computed(() => fontClasses[fontIndex.value % fontClasses.length]);

console.log(fontIndex.value)

const handleType = () => {
  if (charIndex.value < props.displayText.length) {
    if (!typeStatus.value) typeStatus.value = true;
      typeValue.value += props.displayText.charAt(
        charIndex.value
      );
      charIndex.value += 1;
      setTimeout(handleType, typingSpeed.value);
    } else {
      typeStatus.value = false;
      setTimeout(handleErase, newTextDelay.value);
  }
};

const handleErase = () => {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;
      typeValue.value = props.displayText.substring(
        0,
        charIndex.value - 1
      );
      charIndex.value -= 1;
      setTimeout(handleErase, erasingSpeed.value);
    } else {
      typeStatus.value = false;
      if (fontIndex.value === 3) fontIndex.value = 0;
      fontIndex.value += 1;
      setTimeout(handleType, typingSpeed.value + 1000);
    }
}

onMounted(() => {
  setTimeout(handleType, newTextDelay.value + 200);
});

</script>
<template>
  <div class="flex justify-center min-h-12">
    <span class="sr-only">{{ props.displayText }}</span>
    <span
      class="text-5xl tracking-wider text-orange-700"
      :class="handleFont"
      aria-hidden="true"
    >
      {{ typeValue }}
    </span>
    <div class="text-5xl animate-cursor w-4 bg-gray-400 self-stretch"></div>
  </div>
</template>