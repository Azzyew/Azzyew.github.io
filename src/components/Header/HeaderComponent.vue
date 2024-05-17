<script setup lang="ts">
import HeaderItem from './HeaderItem.vue';

const navItems = [
  {
    title: "Quem sou eu",
    link: "#about-me",
  },
  {
    title: "Experiência",
    link: "#experience",
  },
  {
    title: "Educação",
    link: "#education",
  },
  {
    title: "Tecnologias",
    link: "#technologies",
  },
  {
    title: "Contato",
    link: "#contact-me",
  },
];

</script>

<template>
  <header class="w-full h-9 mt-4">
    <nav class="items-center justify-evenly lg:flex">
      <a class="mplus text-3xl text-orange-600" href="#">Laisa Costa</a>

      <ul class="hidden lg:flex" v-for="item in navItems" :key="item.link">
        <HeaderItem :title="item.title" :link="item.link" />
      </ul>
      
    </nav>
  </header>
</template>
