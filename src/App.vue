<script setup lang="ts">
import HeaderComponent from './components/Header/HeaderComponent.vue';
import TypewriterAnimation from './components/TypewriterAnimation.vue';
</script>

<template>
  <main class="text-orange-50 h-dvh bg-neutral-900">
    <div class="flex justify-center">
      <HeaderComponent />
    </div>

    <div class="flex flex-col -mt-16 h-[calc(100%_-_2.25rem)] items-center text-center justify-center">
      <h1 class="text-4xl font-light tracking-wider mb-4">prazer, sou a Laisa!</h1>
      <TypewriterAnimation display-text="desenvolvedora front-end" />
    </div>
  </main>
</template>