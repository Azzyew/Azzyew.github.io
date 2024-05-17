<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HeaderComponent from './components/Header/HeaderComponent.vue';
import TypewriterAnimation from './components/TypewriterAnimation.vue';
import SectionComponent from './components/SectionComponent.vue';
import ExperienceCard from './components/ExperienceCard.vue';
import TechnologyCard from './components/TechnologyCard.vue';
import ContactCard from './components/ContactCard.vue';
import EducationCard from './components/EducationCard.vue';
import FooterComponent from './components/FooterComponent.vue';

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
  });

  const targets = document.querySelectorAll('h2');

  for (const target of targets) {
    observer.observe(target);
  }
});

</script>

<template>
  <main class="text-orange-50 bg-neutral-900 px-4 lg:px-16">
    <div class="flex justify-center">
      <HeaderComponent />
    </div>

    <div class="flex flex-col -mt-13 h-dvh items-center text-center justify-center">
      <h1 class="text-4xl font-light tracking-wider mb-4">Prazer, sou a Laisa!</h1>
      <TypewriterAnimation display-text="Desenvolvedora front-end" />
    </div>

    <SectionComponent title="Quem sou eu" id-name="about-me" :is-on-screen="isOnScreen">
      <div class="mt-52 flex flex-col justify-around items-center xl:flex-row">
        <img class="h-96 w-96 rounded-lg" src='./assets/tea.jpg'>
        
        <p class="mt-20 text-2xl font-extralight text-center xl:w-1/2 xl:mt-0">
          Me chamo Laisa, tenho mais de dois anos e meio de experiência e sou apaixonada por desenvolvimento web, principalmente front-end! Já trabalhei com diferentes frameworks para aplicações em produção, e tenho sempre muita vontade de aprender e facilidade para isso. Levo sempre em consideração acessibilidade, performance e developer experience nos projetos em que participo, e claro user experience acima de tudo.
        </p>

      </div>
    </SectionComponent>

    <SectionComponent title="Experiência" id-name="experience" :is-on-screen="isOnScreen">
      <ExperienceCard company="BRIUS" job-title="Desenvolvedora Front-end" period="03/23 - 06/23">
        <template v-slot:description>
          Fui responsável pela migração da plataforma de Vue 2 para Vue 3. Participei do
          desenvolvimento e manutenção de plataformas em produção, utilizando como stack principal
          Vue.js e Typescript, além de tecnologias como Vuex, Pinia e TailwindCSS.
        </template>

        <template v-slot:stack>
          <box-icon type="logo" name="vuejs" color="#c2410c" size="lg"></box-icon>
          <box-icon type="logo" name="typescript" color="#c2410c" size="lg"></box-icon>
          <box-icon type="logo" name="tailwind-css" color="#c2410c" size="lg"></box-icon>
        </template>
      </ExperienceCard>

      <ExperienceCard company="RankMyAPP" job-title="Desenvolvedora Fullstack" period="02/22 - 01/23">
        <template v-slot:description>
          Participei do desenvolvimento e manutenção de plataformas em produção, utilizando como
          stack principal React e Typescript, além de tecnologias como Redux, Styled-components e
          AntDesign no frontend. No backend utilizei tecnologias como Node.js, Typescript, NestJS,
          RabbitMQ e bancos relacionais e não relacionais.
        </template>

        <template v-slot:stack>
          <box-icon type="logo" name="react" color="#c2410c" size="lg"></box-icon>
          <box-icon type="logo" name="typescript" color="#c2410c" size="lg"></box-icon>
          <box-icon type="logo" name="redux" color="#c2410c" size="lg"></box-icon>
        </template>
      </ExperienceCard>

      <ExperienceCard company="IFRS Campus Osório/CNPq" job-title="Bolsista fullstack" period="03/21 - 08/21">
        <template v-slot:description>
          Bolsista CNPq no projeto Promovid@, que teve como objetivo desenvolver um sistema de
          monitoramento de casos de Covid-19 para as Secretarias Municipais de Saúde. Sistema feito
          utilizando a stack MERN (MongoDB, Express, React e Node.js). Participei em atualizações e
          melhorias nas páginas e no desenvolvimento de novas funções, como a de exportar os dados
          em .CSV, e atualização nos filtros utilizados na pesquisa.
        </template>

        <template v-slot:stack>
          <box-icon type="logo" name="react" color="#c2410c" size="lg"></box-icon>
          <box-icon type="logo" name="nodejs" color="#c2410c" size="lg"></box-icon>
          <box-icon type="logo" name="mongodb" color="#c2410c" size="lg"></box-icon>
        </template>
      </ExperienceCard>

      <ExperienceCard company="IFRS Campus Osório" job-title="Bolsista fullstack" period="08/20 - 12/20">
        <template v-slot:description>
          Bolsista de extensão na área de programação no projeto Incubadora de Redes e
          Empreendimentos Solidários do Campus Osório. Programação com React.js, Node.js, Express,
          ContextAPI e uso de metodologia ágil. Participei no desenvolvimento do aplicativo CoopFrete
          para compartilhar fretes entre cooperativas, tanto no desenvolvimento de páginas, 
          como na integração do sistema de redefinição de senha. Participei no desenvolvimento da página 
          oficial do projeto Incubadora tanto na criação de telas quanto na criação dos CRUDs para 
          administrar os conteúdos do site.
        </template>

        <template v-slot:stack>
          <box-icon type="logo" name="react" color="#c2410c" size="lg"></box-icon>
          <box-icon type="logo" name="nodejs" color="#c2410c" size="lg"></box-icon>
          <box-icon type="logo" name="css3" color="#c2410c" size="lg"></box-icon>
        </template>
      </ExperienceCard>
    </SectionComponent>

    <SectionComponent title="Educação" id-name="education" :is-on-screen="isOnScreen">
      <div class="py-48 min-h-dvh flex flex-col justify-between">
        <EducationCard school="Estácio" course="Sistemas para Internet" period="05/22 - 10/24 (previsão)">
        </EducationCard>

        <EducationCard school="IFRS Campus Osório" course="Ensino médio com curso técnico de informática" period="02/18 - 12/21">
        </EducationCard>
      </div>
    </SectionComponent>

    <SectionComponent title="Tecnologias" id-name="technologies" :is-on-screen="isOnScreen">
      <div class="flex flex-wrap items-center justify-center mt-28">
        <TechnologyCard technology="HTML" icon-name="html5"></TechnologyCard>
        <TechnologyCard technology="CSS" icon-name="css3"></TechnologyCard>
        <TechnologyCard technology="JavaScript" icon-name="javascript"></TechnologyCard>
        <TechnologyCard technology="TypeScript" icon-name="typescript"></TechnologyCard>
        <TechnologyCard technology="Git" icon-name="git"></TechnologyCard>
        <TechnologyCard technology="React" icon-name="react"></TechnologyCard>
        <TechnologyCard technology="Vue.js" icon-name="vuejs"></TechnologyCard>
        <TechnologyCard technology="TailwindCSS" icon-name="tailwind-css"></TechnologyCard>
        <TechnologyCard technology="Sass" icon-name="sass"></TechnologyCard>
        <TechnologyCard technology="Redux" icon-name="redux"></TechnologyCard>
      </div>
    </SectionComponent>

    <SectionComponent title="Contato" id-name="contact-me" :is-on-screen="isOnScreen">
      <div class="flex flex-wrap justify-center">
        <ContactCard url="mailto:laisadnevescosta@gmail.com" icon-name="gmail" contact-name="Gmail"></ContactCard>
        <ContactCard url="https://www.linkedin.com/in/laisa-costa-748a5a170" icon-name="linkedin-square" contact-name="LinkedIn"></ContactCard>
        <ContactCard url="https://github.com/Azzyew" icon-name="github" contact-name="GitHub"></ContactCard>
      </div>
    </SectionComponent>

  </main>
  <FooterComponent />
</template>