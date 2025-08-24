<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useMotionTransitions } from '@vueuse/motion'

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  speed: number
  direction: number
  opacity: number
  shape: 'circle' | 'square' | 'triangle'
}

const elements = ref<FloatingElement[]>([])
const dimensions = reactive({ width: 0, height: 0 })

const updateDimensions = () => {
  dimensions.width = window.innerWidth
  dimensions.height = window.innerHeight
}

onMounted(() => {
  updateDimensions()
  window.addEventListener('resize', updateDimensions)

  elements.value = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * dimensions.width,
    y: Math.random() * dimensions.height,
    size: Math.random() * 8 + 2,
    speed: Math.random() * 2 + 0.5,
    direction: Math.random() * Math.PI * 2,
    opacity: Math.random() * 0.8 + 0.2,
    shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as
      | 'circle'
      | 'square'
      | 'triangle',
  }))

  const interval = setInterval(() => {
    elements.value = elements.value.map((el) => {
      let newX = el.x + Math.cos(el.direction) * el.speed
      let newY = el.y + Math.sin(el.direction) * el.speed
      let newDirection = el.direction

      if (newX <= 0 || newX >= dimensions.width) {
        newDirection = Math.PI - el.direction
        newX = Math.max(0, Math.min(dimensions.width, newX))
      }
      if (newY <= 0 || newY >= dimensions.height) {
        newDirection = -el.direction
        newY = Math.max(0, Math.min(dimensions.height, newY))
      }

      if (Math.random() < 0.01) newDirection += (Math.random() - 0.5) * 0.5

      return { ...el, x: newX, y: newY, direction: newDirection }
    })
  }, 50)

  onUnmounted(() => {
    clearInterval(interval)
    window.removeEventListener('resize', updateDimensions)
  })
})
</script>

<template>
  <div class="fixed inset-0 bg-gray-900 overflow-hidden">
    <!-- Gradient de fond -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

    <!-- Grille animée -->
    <div
      v-motion
      class="absolute inset-0 opacity-10"
      :initial="{ backgroundPosition: '0px 0px' }"
      :enter="{ backgroundPosition: ['0px 0px', '50px 50px'] }"
      :transition="{ duration: 20, repeat: Infinity, easing: 'linear' }"
      :style="{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }"
    />

    <!-- Éléments flottants -->
    <template v-for="el in elements" :key="el.id">
      <!-- Cercle -->
      <div
        v-if="el.shape === 'circle'"
        v-motion
        class="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        :style="{
          left: el.x + 'px',
          top: el.y + 'px',
          width: el.size + 'px',
          height: el.size + 'px',
          opacity: el.opacity,
        }"
        :initial="{ scale: 1, opacity: el.opacity }"
        :enter="{ scale: [1, 1.2, 1], opacity: [el.opacity, el.opacity * 1.5, el.opacity] }"
        :transition="{ duration: 2 + Math.random() * 2, repeat: Infinity, easing: 'ease-in-out' }"
      />

      <!-- Carré -->
      <div
        v-else-if="el.shape === 'square'"
        v-motion
        class="absolute -translate-x-1/2 -translate-y-1/2 bg-cyan-400"
        :style="{
          left: el.x + 'px',
          top: el.y + 'px',
          width: el.size + 'px',
          height: el.size + 'px',
          opacity: el.opacity,
        }"
        :initial="{ rotate: 0, scale: 1 }"
        :enter="{ rotate: [0, 360], scale: [1, 1.1, 1] }"
        :transition="{ duration: 3 + Math.random() * 2, repeat: Infinity, easing: 'linear' }"
      />

      <!-- Triangle -->
      <div
        v-else
        v-motion
        class="absolute -translate-x-1/2 -translate-y-1/2"
        :style="{
          left: el.x + 'px',
          top: el.y + 'px',
          opacity: el.opacity,
          width: 0,
          height: 0,
          borderLeft: el.size / 2 + 'px solid transparent',
          borderRight: el.size / 2 + 'px solid transparent',
          borderBottom: el.size + 'px solid #fbbf24',
        }"
        :initial="{ rotate: 0, scale: 1 }"
        :enter="{ rotate: [0, -360], scale: [1, 1.3, 1] }"
        :transition="{ duration: 4 + Math.random() * 2, repeat: Infinity, easing: 'ease-in-out' }"
      />
    </template>

    <!-- Glow bleu -->
    <div
      v-motion
      class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      :initial="{ scale: 1, opacity: 0.1 }"
      :enter="{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }"
      :transition="{ duration: 8, repeat: Infinity, easing: 'ease-in-out' }"
    />

    <!-- Glow violet -->
    <div
      v-motion
      class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
      :initial="{ scale: 1.2, opacity: 0.2 }"
      :enter="{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.1, 0.2] }"
      :transition="{ duration: 6, repeat: Infinity, easing: 'ease-in-out', delay: 2 }"
    />
  </div>
</template>
