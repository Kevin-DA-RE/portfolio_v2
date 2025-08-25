<script setup>
import { ref } from 'vue'
const props = defineProps({
  project: Object,
  index: Number,
  total: Number,
})

// Crée un nom unique pour le groupe de tabs (par exemple "tabs-0", "tabs-1", etc.)
const tabGroupName = `tabs-${props.index}`
const selectedTab = ref('projet')
</script>

<template>
   
<div class="min-md:hidden tabs tabs-border w-screen justify-center">
    <input
      type="radio"
      :name="tabGroupName"
      class="tab"
      aria-label="Projet"
      v-model="selectedTab"
      value="projet"
    />
    <div class="tab-content border-base-300 p-10  animate-fade-in " v-if="selectedTab === 'projet'">
      <div class="flex flex-col justify-center items-center">
        <h1 class="font-bold text-4xl text-cyan-400 mb-6">
          {{ props.project.name }}
        </h1>
        <figure>
          <img
            :src="props.project.url_img"
            alt="Project Image"
            class="w-80 min-md:w-100 rounded-xl"
          />
        </figure>
      </div>
    </div>

    <input
      type="radio"
      :name="tabGroupName"
      class="tab"
      aria-label="Langage et Frameworks"
      v-model="selectedTab"
      value="langages"
    />
    <div class="tab-content border-base-300  p-10  animate-fade-in " v-if="selectedTab === 'langages'">
      <div class="flex flex-row justify-center">
        <div
          class="px-4 py-2"
          v-for="(stack, index) in props.project.stacks"
          :key="index"
        >
          <div class="w-25">
            <img class="size-7" :src="props.project.img_stack[index]" />
            <p class="font-bold text-cyan-400 text-md">{{ stack }}</p>
          </div>
        </div>
      </div>
    </div>

    <input
      type="radio"
      :name="tabGroupName"
      class="tab"
      aria-label="Code source / site web"
      v-model="selectedTab"
      value="code"
      v-if="props.project.url_github"
    />
    <div class="tab-content border-base-300p-10  animate-fade-in " v-if="selectedTab === 'code' && props.project.url_github">
      <div class="flex flex-row items-center justify-around">
        <div>
          <img class="size-7" src="/skill/logo_git.png" alt="Git Logo" />
          <a
            :href="props.project.url_github"
            target="_blank"
            rel="noopener noreferrer"
            class="block font-bold text-cyan-400 text-md hover:underline cursor-pointer mt-2"
            >GitHub</a
          >
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-8 stroke-cyan-500 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <p class="font-bold text-cyan-400 text-md mt-2">Site web</p>
        </div>
      </div>
    </div>
    <input
      type="radio"
      :name="tabGroupName"
      class="tab"
      aria-label="Descriptif"
      v-model="selectedTab"
      value="desc"
    />
    <div class="tab-content border-base-300 animate-fade-in " v-if="selectedTab === 'desc'">
      <li class="list-col p-4" v-for="(desc, index) in props.project.descriptif" :key="index" style="list-style-type: none;">
        <div class="text-md flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
          <p>{{ desc }}</p>
        </div>
      </li>
    </div>
  </div>
  <div class="max-sm:hidden flex flex-row content-center justify-around w-full h-full">
    <div class="flex flex-col justify-around items-center h-full min-md:h-150">
      <div class="text-center ">
        <h1 class="font-bold text-4xl text-cyan-400">{{ props.project.name }}</h1>
      </div>
      <figure>
        <img :src="props.project.url_img" alt="Project Image" class="w-80 min-md:w-100 rounded-xl" />
      </figure>
    </div>

    <div class="max-sm:hidden w-200 m-2 h-100 content-end">
      <ul class="list  shadow-md">
        <li class="ml-4 text-xl text-sky-600 font-bold tracking-wide">Langage et Frameworks</li>
        <li class="list-row">
          <div
            class="flex flex-row items-center justify-between px-4 py-2 w-25"
            v-for="(stack, index) in props.project.stacks"
            :key="index"
          >
            <div>
              <img class="size-7" :src="props.project.img_stack[index]" />
              <p class="text-center font-bold text-cyan-400 text-md">{{ stack }}</p>
            </div>
          </div>
        </li>
      </ul>

      <ul class="list shadow-md" v-if="props.project.url_github">
        <li class="ml-4 text-xl text-sky-600 font-bold tracking-wide">Code source / site web</li>
        <li class="list-row">
          <div class="flex flex-row items-center justify-between px-4 py-2 w-50 ">
            <div >
              <img class="size-7" src="/skill/logo_git.png" alt="Git Logo" />
              <a
                :href="props.project.url_github"
                target="_blank"
                rel="noopener noreferrer"
                class="block font-bold text-cyan-400 text-md hover:underline cursor-pointer mt-2"
              >GitHub</a>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-7 stroke-cyan-500 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <p class="font-bold text-cyan-400 text-md mt-2" title="A venir">Site web *</p>
            </div>
          </div>
        </li>
      </ul>

      <ul class="list shadow-md">
        <li class="ml-4 mt-5 text-xl text-sky-600 font-bold tracking-wide">Descriptif</li>
        <li class="list-col p-4" v-for="(desc, index) in props.project.descriptif" :key="index">
          <div class="text-md flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
            <p>{{ desc }}</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- Boutons de navigation pour version desktop uniquement -->
    <div class="max-sm:hidden absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a :href="`#slide${((index - 1 + total) % total) + 1}`" class="btn btn-circle">❮</a>
      <a :href="`#slide${((index + 1) % total) + 1}`" class="btn btn-circle">❯</a>
    </div>
  </div>
</template>
