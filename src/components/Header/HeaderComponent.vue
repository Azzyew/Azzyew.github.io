<script setup lang="ts">
import HeaderItem from './HeaderItem.vue';

const navItems = [
  {
    title: "quem sou eu",
    link: "#about-me",
  },
  {
    title: "experiência",
    link: "#experience",
  },
  {
    title: "educação",
    link: "#education",
  },
  {
    title: "tecnologias",
    link: "#technologies",
  },
  {
    title: "contato",
    link: "#contact-me",
  },
];

</script>

<template>
  <header class="w-full h-9 mt-4">
    <nav class="flex items-center justify-evenly">
      <a class="mplus text-3xl text-orange-600" href="#">Laisa Costa</a>

      <ul v-for="item in navItems" :key="item.link">
        <HeaderItem :title="item.title" :link="item.link" />
      </ul>
      
    </nav>
  </header>
</template>
