<script setup>
import data from '../store/data'
</script>

<template>
  <div class="min-h-full bg-accent-600 animate-fade-in">
    <h1 class="max-md:hidden text-cyan-500 font-bold m-5">Compétences</h1>

    <div class="flex-wrap justify-around min-h-screen mt-10">
      <div class="flex flex-col h-full justify-around items-center md:flex-row">

        <!-- Bloc compétences -->
        <div
          v-for="(skill, index) in data.skill"
          :key="index"
          class="flex flex-col items-center m-2 group">

          <!-- Image + SVG + overlay titre -->
          <div class="relative w-24 h-24 rounded-lg overflow-hidden">
            <!-- Image -->
            <img :src="skill.url_img" :alt="skill.name" class="w-full h-full object-cover rounded-lg p-2" />

            <!-- Effet SVG lumineux -->
            <svg
              class="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none">
              <rect
                x="2"
                y="2"
                width="96"
                height="96"
                rx="8"
                ry="8"
                fill="none"
                stroke="cyan"
                stroke-width="2"
                class="animate-dash" />
            </svg>

            <!-- Overlay titre (grands écrans uniquement) -->
            <div
              class="hidden md:flex absolute inset-0 items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">
              <h2 class="text-cyan-300 text-lg font-semibold text-center opacity-80 tracking-wide">
                {{ skill.name }}
              </h2>
            </div>
          </div>

          <!-- Titre pour petits écrans (sous l'image) -->
          <div class="md:hidden mt-2">
            <h2 class="text-cyan-500 text-sm font-semibold text-center tracking-wide">
              {{ skill.name }}
            </h2>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<style>
@keyframes dash-loop {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -800;
  }
}

.animate-dash {
  stroke: cyan;
  stroke-width: 2;
  stroke-dasharray: 50 150;
  stroke-dashoffset: 0;
  animation: dash-loop 4s linear infinite;
  filter: drop-shadow(0 0 6px cyan);
}
</style>
