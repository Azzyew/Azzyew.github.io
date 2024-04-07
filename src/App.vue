<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HeaderComponent from './components/Header/HeaderComponent.vue';
import TypewriterAnimation from './components/TypewriterAnimation.vue';
import SectionComponent from './components/SectionComponent.vue';

const isOnScreen = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    const intersectingCount = entries.filter(entry => entry.isIntersecting).length;

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isOnScreen.value = true;
      };

    if (intersectingCount === 0) isOnScreen.value = false;
      
    });
  }, { threshold: 1, rootMargin: "-5px" } );

  const targets = document.querySelectorAll('h2');

  for (const target of targets) {
    observer.observe(target);
  }
});

</script>

<template>
  <main class="text-orange-50 bg-neutral-900 px-16">
    <div class="flex justify-center">
      <HeaderComponent />
    </div>

    <div class="flex flex-col -mt-13 h-dvh items-center text-center justify-center">
      <h1 class="text-4xl font-light tracking-wider mb-4">prazer, sou a Laisa!</h1>
      <TypewriterAnimation display-text="desenvolvedora front-end" />
    </div>

    <SectionComponent title="quem sou eu" id-name="#about-me" :is-on-screen="isOnScreen">
      me chamo Laisa, tenho mais de 2.5 anos de experiência e sou apaixonada por desenvolvimento web, principalmente front-end! já trabalhei com diferentes frameworks para aplicações em produção, e tenho sempre muita vontade de aprender e facilidade para isso. levo sempre em consideração acessibilidade, performance e developer experience nos projetos em que participo, e claro user experience acima de tudo.
    </SectionComponent>

    <SectionComponent title="experiência" id-name="#experience" :is-on-screen="isOnScreen">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    </SectionComponent>

    <SectionComponent title="educação" id-name="#education" :is-on-screen="isOnScreen">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    </SectionComponent>

    <SectionComponent title="tecnologias" id-name="#technologies" :is-on-screen="isOnScreen">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    </SectionComponent>

    <SectionComponent title="contato" id-name="#contact-me" :is-on-screen="isOnScreen">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    </SectionComponent>

  </main>
</template>