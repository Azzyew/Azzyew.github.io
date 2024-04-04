<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HeaderComponent from './components/Header/HeaderComponent.vue';
import TypewriterAnimation from './components/TypewriterAnimation.vue';

const isOnScreen = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isOnScreen.value = true;
      } else {
        isOnScreen.value = false;
      }
    });
  });

  const target = document.getElementById('#about-me') as HTMLElement;

  observer.observe(target);
});

</script>

<template>
  <main class="text-orange-50 bg-neutral-900 px-16">
    <div class="flex justify-center">
      <HeaderComponent />
    </div>

    <div class="flex flex-col -mt-16 h-[calc(100dvh_-_2.25rem)] items-center text-center justify-center">
      <h1 class="text-4xl font-light tracking-wider mb-4">prazer, sou a Laisa!</h1>
      <TypewriterAnimation display-text="desenvolvedora front-end" />
    </div>

    <div class="p-16 flex flex-col items-center">
      <h2
        class="
          text-2xl text-orange-600 font-light tracking-wider relative w-fit
          after:bg-orange-600 after:absolute after:h-px after:w-full after:-bottom-1 after:left-0 after:scale-x-0 after:transition-transform after:duration-500  
        "
        :class="{ 'animate-fadeIn after:scale-x-100': isOnScreen }"
        id="#about-me"
      >quem sou eu</h2>
      <p class="mt-12">me chamo Laisa, tenho mais de 2.5 anos de experiência e sou apaixonada por desenvolvimento web, principalmente front-end! já trabalhei com diferentes frameworks para aplicações em produção, e tenho sempre muita vontade de aprender e facilidade para isso. levo sempre em consideração acessibilidade, performance e developer experience nos projetos em que participo, e claro user experience acima de tudo.</p>
    </div>


  </main>
</template>