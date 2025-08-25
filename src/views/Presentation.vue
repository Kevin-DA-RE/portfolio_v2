<script setup>
import data from '../store/data'
</script>

<template>
  <div class="relative h-screen w-screen overflow-hidden">


    <!-- Overlay sombre -->
    <div class="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

    <!-- Contenu HTML centré -->
    <div class="absolute inset-0 flex items-center justify-center z-20">
      <div
        class="flex flex-col lg:flex-row items-center justify-between w-11/12 max-w-[1200px] px-6"
      >
        <!-- Portrait -->
        <div
          class="max-md:w-50 max-md:h-50 w-150 rounded-full overflow-hidden animate-fade-in shrink-0"
        >
          <img src="../assets/portrait.png" alt="Portrait" class="object-cover rounded-full" />
        </div>

        <!-- Texte et boutons -->
        <div
          class="flex flex-col items-center justify-center text-white text-center animate-fade-in max-w-xl"
        >
          <div class="space-y-2">
            <h1 class="text-3xl sm:text-4xl font-bold tracking-wide leading-tight">
              Bonjour et bienvenue !<br />
              Je m'appelle Kevin,
              <strong
                class="bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                >Développeur Web Fullstack</strong
              >
            </h1>
            <h2 class="text-lg sm:text-xl font-medium tracking-wide leading-snug">
              Passionné par l'univers du développement web, laissez moi vous présenter mes projets
              et bien plus encore
            </h2>
          </div>

          <div
            class="flex flex-col sm:flex-row justify-center items-center gap-4 w-full mt-5 hover:text-cyan-400 transition-colors"
            style="cursor: pointer"
          >
            <div class="flex flex-row items-center justify-center gap-2 w-full mt-5">
              <!-- Flèche gauche -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 hover:stroke-cyan-400 transition-colors"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
              <!-- Lien -->
              <a
                href="https://drive.google.com/file/d/1AHkEgPogfqium81vowb0_bMrc6zPoVM1/view?usp=sharing"
                target="_blank"
                class="font-semibold hover:text-cyan-400 transition-colors"
              >
                Télécharger mon CV
              </a>
              <!-- Flèche droite -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 hover:stroke-cyan-400 transition-colors"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
            </div>
          </div>
          <fieldset class="mt-5 p-4 border-4 border-sky-700 rounded-lg shadow-md text-lg">
            <legend>Contact</legend>
            <div class="flex flex-row">
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
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                /></svg
              >:
              <a
                :href="`mailto:${data.contact.mail}`"
                style="cursor: pointer"
                class="hover:text-cyan-400 transition-colors px-2"
                >{{ data.contact.mail }}</a
              >
            </div>
            <div class="flex flex-row">
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              :
              <p class="px-2">{{ data.contact.phone }}</p>
            </div>
            <div class="flex flex-row">
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
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              :
              <p class="px-2">{{ data.contact.localisation }}</p>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
