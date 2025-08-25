<script setup>
import CardProject from '@/components/card_project.vue'
import data from '../store/data'
</script>

<template>
  <!-- Version desktop horizontale -->
  <div class="max-md:hidden carousel w-full h-full animate-fade-in">
    <div
      class="carousel-item relative w-full bg-transparente"
      v-for="(project, index) in data.project"
      :key="project.id"
      :id="`slide${index + 1}`"
    >
      <CardProject :project="project" :index="index" :total="data.project.length" />
    </div>
  </div>

  <!-- Version mobile verticale -->
  <div class="min-md:hidden carousel carousel-vertical rounded-box h-120 animate-fade-in ">
    <div
      class="carousel-item h-full"
      v-for="(project, index) in data.project"
      :key="project.id"
      :id="`slide${index + 1}`"
    >
      <CardProject :project="project" :index="index" :total="data.project.length" />
    </div>
  </div>
</template>


<style></style>
