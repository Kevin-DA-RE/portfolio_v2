<script setup>
import data  from '../store/data'


</script>

<template>
  <ul class="min-md:timeline timeline-snap-icon max-md:timeline-compact timeline-vertical overflow-y-auto animate-fade-in">
    <li
      v-for="(exp, index) in data.experience"
      :key="exp.id"
      class="mb-10 max-md:items-center max-md:text-center"
    >
      <!-- Point central -->
      <div class="min-md:timeline-middle mb-6 max-md:hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
             fill="currentColor" class="h-5 w-5">
          <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"/>
        </svg>
      </div>

      <!-- Image -->
      <div :class="[
        index % 2 === 0 ? 'timeline-end' : 'timeline-start',
        'md:mb-10 max-md:flex max-md:justify-center'
      ]">
        <img :src="exp.url_img"
             :alt="exp.function"
             class="w-64 h-max rounded-lg object-cover max-md:hidden md:block"/>
      </div>

      <!-- Texte -->
      <div :class="[
        index % 2 === 0
          ? 'timeline-start md:text-end'
          : 'timeline-end md:mb-10',
        'max-md:text-center'
      ]">
        <time class="font-mono italic">{{ exp.period }}</time>
        <div class="text-lg font-black text-warning">{{ exp.function }}</div>
        <p class="text-lime-500 text-lg font-bold">{{ exp.company }}</p>
        <p class="decoration-sky-500">{{ exp.description }}</p>
        <p class="text-sm font-bold mt-1 text-sky-400">Environnement : {{ exp.stacks }}</p>

        <ul class="list-disc list-inside text-sm mt-2 space-y-1 pt-3">
          <li v-for="(task, idx) in exp.tasks" :key="idx">{{ task }}</li>
        </ul>
      </div>
    </li>
  </ul>
</template>

